// import { useEffect, useState } from 'react';
// import mongoose,{connect} from 'mongoose';

// function useRealtimeDb() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const client = mongoose.connect('mongodb://0.0.0.0:27017/SWARM', {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     const db = client.connection;

//     db.on('error', console.error.bind(console, 'connection error:'));
//     db.once('open', function() {
//       console.log('Connected to MongoDB database');
//     });

//     const changeStream = db.collection('workspace').watch();

//     changeStream.on('change', (change) => {
//       console.log('Change:', change);
//       setData((prevData) => {
//         return [...prevData, change];
//       });
//     });

//     return () => {
//       changeStream.close();
//       client.disconnect();
//     };
//   }, []);

//   return { data };
// }

// export default useRealtimeDb;
