"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectToDatabase = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
const ConnectToDatabase = () => {
    mongoose_1.default.connect('mongodb+srv://saifudheen:saifu123@cluster0.ddiqrrn.mongodb.net/SWARM?retryWrites=true&w=majority', dbOptions).then(() => {
        console.log("Database Swarm connection success");
    }).catch((err) => {
        console.log(`Database error: ${err}`);
    });
};
exports.ConnectToDatabase = ConnectToDatabase;
//# sourceMappingURL=connection.js.map