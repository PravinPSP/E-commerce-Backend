import express from 'express'
const sub_categoryRouter = express.Router();


import {insertsubcategory,listsubcategory,editsubcategory,removsubcategory} from '../controller/sub_category.controller'
import {savesubcategorywithcategory,listwithcategory } from '../controller/sub_category.controller'

// import {sub_categorywithcategory } from '../controller/sub_category.controller'



sub_categoryRouter.post("/save-subcategory",savesubcategorywithcategory)

sub_categoryRouter.get("/list-subcategory",listsubcategory)

sub_categoryRouter.put("/edit-subcategory/:id",editsubcategory)

sub_categoryRouter.delete("/remove-subcategory/:id",removsubcategory)

sub_categoryRouter.get("/list-subcategory-with-category/:id",listwithcategory)


export default sub_categoryRouter;