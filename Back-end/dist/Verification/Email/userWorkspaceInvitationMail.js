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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sentMail = void 0;
const NodeMailer = __importStar(require("nodemailer"));
const crypto_1 = __importDefault(require("../../encryption/crypto"));
const { encryptEmail } = (0, crypto_1.default)();
const sentMail = (email, workspaceId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const transporter = NodeMailer.createTransport({
            host: process.env.HOST,
            service: process.env.SERVICE,
            port: Number(process.env.EMAIL_PORT),
            secure: Boolean(process.env.SECURE),
            auth: {
                user: process.env.USER,
                pass: process.env.PASS
            }
        });
        for (let i = 0; i < email.length; i++) {
            const encryptedEmail = yield encryptEmail(email[i].email);
            yield transporter.sendMail({
                from: process.env.USER,
                to: email[i].email,
                subject: "Swarm service confirmation mail",
                html: `
            <!DOCTYPE html>
            <html>
              <head>
                <meta charset="UTF-8">
                <title>Workspace Invitation</title>
                <style>
                  /* Styling for the invitation */
                  body {
                    font-family: Arial, Helvetica, sans-serif;
                    background-color: #f2f2f2;
                  }
                  .invitation {
                    max-width: 500px;
                    margin: 0 auto;
                    padding: 20px;
                    background-color: #fff;
                    border-radius: 5px;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
                  }
                  h1 {
                    font-size: 24px;
                    margin-bottom: 10px;
                  }
                  p {
                    font-size: 16px;
                    line-height: 1.5;
                    margin-bottom: 20px;
                  }
                  .button {
                    display: inline-block;
                    margin-right: 10px;
                    padding: 10px 20px;
                    border-radius: 5px;
                    color: #fff;
                    text-decoration: none;
                    transition: background-color 0.3s ease;
                  }
                  .button.accept {
                    background-color: #008000;
                  }
                  .button.accept:hover {
                    background-color: #006600;
                  }
                  .button.decline {
                    background-color: #cc0000;
                  }
                  .button.decline:hover {
                    background-color: #990000;
                  }
                </style>
              </head>
              <body>
                <div class="invitation">
                  <h1>Workspace Invitation</h1>
                  <p>You have been invited to join our workspace. To accept or decline the invitation, please click the appropriate button below.</p>
                  <div>
                  <a class="button accept" href="${process.env.BASE_URL}/verifyworkspaceinvitation/${workspaceId}/${encryptedEmail}/accepted">Accept</a>
                  <a class="button decline" href="http://localhost:3000/workspace/verifyinvitationmail/${workspaceId}/${encryptedEmail}/declined">Decline</a>
                  </div>
                </div>
              </body>
              </html>
              
              `
            });
        }
        return "Email sent successfully";
    }
    catch (error) {
        console.log(error);
        throw { error };
    }
});
exports.sentMail = sentMail;
//# sourceMappingURL=userWorkspaceInvitationMail.js.map