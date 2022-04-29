
import express from 'express'
const userRouter = express.Router();

import {insertUser , userlogin , updateUser,removeuser,userprofile, insert_user_with_userrole ,list_user } from '../controller/user.controller'



userRouter.post("/insert-user", insert_user_with_userrole );

userRouter.post("/user-login",userlogin);

userRouter.get("/user-profile/:id",userprofile);

userRouter.put("/user-update/:id",updateUser);

userRouter.delete("/user-delete/:id",removeuser);


userRouter.get("/list-user", list_user );

export default userRouter;