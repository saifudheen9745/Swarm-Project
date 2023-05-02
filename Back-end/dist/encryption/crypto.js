"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto = __importStar(require("crypto"));
const algorithm = "aes-256-cbc";
const secret = "email_security_key";
const key = crypto.createHash('sha256').update(String(secret)).digest('base64').substr(0, 32);
const encrypt = () => {
    function encryptEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const iv = crypto.randomBytes(16);
            const cipher = crypto.createCipheriv(algorithm, key, iv);
            let encrypted = cipher.update(email, "utf8", "hex");
            encrypted += cipher.final("hex");
            return `${iv.toString("hex")}:${encrypted}`;
        });
    }
    function decryptEmail(encryptedEmail) {
        return __awaiter(this, void 0, void 0, function* () {
            const [ivString, encrypted] = encryptedEmail.split(":");
            const iv = Buffer.from(ivString, "hex");
            const decipher = crypto.createDecipheriv(algorithm, key, iv);
            let decrypted = decipher.update(encrypted, "hex", "utf8");
            decrypted += decipher.final("utf8");
            return decrypted;
        });
    }
    return { encryptEmail, decryptEmail };
};
exports.default = encrypt;
//# sourceMappingURL=crypto.js.map