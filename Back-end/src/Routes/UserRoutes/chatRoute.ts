import express from 'express'
import { createChat, sendMessage } from '../../Controllers/UserControllers/chatControllers'
import { jwtOptions } from '../../JwtConfig/jwtConfig'
const Router = express.Router()
const {verifyJwtToken} = new jwtOptions()
Router.get('/create/:projectId',verifyJwtToken,createChat)
Router.post('/send',verifyJwtToken,sendMessage)


export default Router