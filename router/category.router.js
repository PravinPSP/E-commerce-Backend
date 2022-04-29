
import express from 'express'
const categoryRouter = express.Router();

import {insertcategory,listcategory,editcategory,removcategory} from '../controller/category.controller'


categoryRouter.post("/insert-category",insertcategory)

categoryRouter.get("/list-category",listcategory)

categoryRouter.put("/edit-category/:id",editcategory)

categoryRouter.delete("/remove-category/:id",removcategory)


export default categoryRouter;