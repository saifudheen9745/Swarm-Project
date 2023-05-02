import * as crypto from "crypto";

const algorithm = "aes-256-cbc";
const secret = "email_security_key";
const key = crypto.createHash('sha256').update(String(secret)).digest('base64').substr(0, 32);

const encrypt = () => {
  async function encryptEmail(email: string) {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(email, "utf8", "hex");
    encrypted += cipher.final("hex");
    return `${iv.toString("hex")}:${encrypted}`;
  }

  async function decryptEmail(encryptedEmail: string) {
    const [ivString, encrypted] = encryptedEmail.split(":");
    const iv = Buffer.from(ivString, "hex");
    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    let decrypted = decipher.update(encrypted, "hex", "utf8");
    decrypted += decipher.final("utf8");
    return decrypted;
  }

  return { encryptEmail, decryptEmail };
};

export default encrypt