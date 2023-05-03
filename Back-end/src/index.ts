import express from "express";
import * as dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import morgan from "morgan";
import * as bodyParser from "body-parser";
//
import { ConnectToDatabase } from "./Connection/connection";
import authRoute from "./Routes/UserRoutes/authRoute";
import projectRoute from "./Routes/UserRoutes/projectRoute";
import workspaceRoute from "./Routes/UserRoutes/workspaceRoute";
import taskRoute from "./Routes/UserRoutes/taskRoute";
const server = express();
const app = express.Router();

/*--------DB-Connection-------------*/
ConnectToDatabase();

dotenv.config();

/*---------Middlewares---------------*/
server.use(cookieParser());
server.use(
  cors({
    origin: [
      "*",
      "http://localhost:5173",
      "http://swarm-official.online",
      "https://swarm-official.online",
    ],
    credentials: true,
  })
);
server.use(morgan("dev"));
server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.json());
server.use(express.static("./src/Public"));

/*---------Routing Middlewares--------*/

app.use("/", authRoute);
app.use("/project", projectRoute);
app.use("/workspace", workspaceRoute);
app.use("/task", taskRoute);

/*--------Server Running--------------*/

server.listen(process.env.PORT_NUMBER, () => {
  console.log(`Server started on port ${process.env.PORT_NUMBER}`);
});
