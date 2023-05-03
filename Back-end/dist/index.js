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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv = __importStar(require("dotenv"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const bodyParser = __importStar(require("body-parser"));
//
const connection_1 = require("./Connection/connection");
const authRoute_1 = __importDefault(require("./Routes/UserRoutes/authRoute"));
const projectRoute_1 = __importDefault(require("./Routes/UserRoutes/projectRoute"));
const workspaceRoute_1 = __importDefault(require("./Routes/UserRoutes/workspaceRoute"));
const taskRoute_1 = __importDefault(require("./Routes/UserRoutes/taskRoute"));
const server = (0, express_1.default)();
const app = express_1.default.Router();
/*--------DB-Connection-------------*/
(0, connection_1.ConnectToDatabase)();
dotenv.config();
/*---------Middlewares---------------*/
server.use((0, cookie_parser_1.default)());
server.use((0, cors_1.default)({
    origin: [
        "*",
        "http://localhost:5173",
        "http://swarm-official.online",
        "https://swarm-official.online",
    ],
    credentials: true,
}));
server.use((0, morgan_1.default)("dev"));
server.use(bodyParser.urlencoded({ extended: true }));
server.use(express_1.default.json());
server.use(express_1.default.static("./src/Public"));
/*---------Routing Middlewares--------*/
app.use("/", authRoute_1.default);
app.use("/project", projectRoute_1.default);
app.use("/workspace", workspaceRoute_1.default);
app.use("/task", taskRoute_1.default);
/*--------Server Running--------------*/
server.listen(process.env.PORT_NUMBER, () => {
    console.log(`Server started on port ${process.env.PORT_NUMBER}`);
});
//# sourceMappingURL=index.js.map