import { useState } from 'react';
import { storage } from '../Firebase/config';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

function useImageUpload() {
  const [uploadProgress, setUploadProgress] = useState(0);

  async function uploadImages(images,folderName = 'images') {
    
    const downloadURLs = [];

    const promises = images.map(async (image) => {
      const imageRef = ref(storage, `/${folderName}/${image.name}`);
      const uploadTask = uploadBytesResumable(imageRef, image);

      return new Promise((resolve, reject) => {
        uploadTask.on('state_changed',
          (snapshot) => {
            // Get the progress ratio here
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setUploadProgress(progress);
          },
          (error) => {
            console.log("Error uploading image:", error);
            reject(error);
          },
          async () => {
            // Get the download URL of the uploaded image here
            try {
              const url = await getDownloadURL(uploadTask.snapshot.ref); 
              downloadURLs.push(url);
              resolve();
            } catch (error) {
              console.log("Error getting download URL:", error);
              reject(error);
            }
          }
        );
      });
    });

    try {
      await Promise.all(promises);
      return downloadURLs;
    } catch (error) {
      console.log("Error uploading images:", error);
    }
  }

  return [uploadImages, uploadProgress];
}

export default useImageUpload;