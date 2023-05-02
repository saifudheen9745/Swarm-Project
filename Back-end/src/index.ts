import express, { Application } from "express";
import * as dotenv from 'dotenv';
import  cookieParser  from 'cookie-parser';
import  cors  from 'cors';

import morgan from "morgan";
import * as bodyParser from 'body-parser';
//
import { ConnectToDatabase } from "./Connection/connection";
import authRoute from './Routes/UserRoutes/authRoute'
import projectRoute from './Routes/UserRoutes/projectRoute'
import workspaceRoute from './Routes/UserRoutes/workspaceRoute'
import taskRoute from './Routes/UserRoutes/taskRoute'

const app:Application = express()

/*--------DB-Connection-------------*/
ConnectToDatabase()


dotenv.config()


/*---------Middlewares---------------*/
app.use(cookieParser())
app.use(cors({ origin: 'http://localhost:5173',credentials:true }));
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static('./src/Public'))


/*---------Routing Middlewares--------*/

app.use('/',authRoute)
app.use('/project',projectRoute)
app.use('/workspace',workspaceRoute)
app.use('/task',taskRoute)

/*--------Server Running--------------*/

app.listen(process.env.PORT_NUMBER,()=>{
    console.log(`Server started on port ${process.env.PORT_NUMBER}`)
})


