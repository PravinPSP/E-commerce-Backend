import express from 'express'
const product_router = express.Router();


import {insertproduct,editproduct,list_All_Product,remove_Product} from '../controller/products.controller'

import {save_product_with_subcategory,list_product_with_subcategory} from '../controller/products.controller'



product_router.post("/insert-product",save_product_with_subcategory);

product_router.put("/edit-product/:id",editproduct);

product_router.get("/list-allproducts",list_All_Product);

product_router.delete ("/delete-product/:id",remove_Product);

product_router.get("/list-product-with-subcategory/:id",list_product_with_subcategory);



export default product_router;