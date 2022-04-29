import express from 'express'
const user_roleRouter = express.Router();


import {insertuserrole} from '../controller/user_rolecontroller'





user_roleRouter.post("/insert-userrole",insertuserrole)




export default user_roleRouter;