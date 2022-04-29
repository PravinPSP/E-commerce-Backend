import express from 'express';
import mongoose from 'mongoose';
const app = express();


import userRouter from './router/user.router'
import categoryRouter from './router/category.router'
import sub_categoryRouter from './router/sub_category.router'
import product_router from './router/products.route'
import user_role_Router from './router/user_role.router'

app.use(express.json())

mongoose.connect('mongodb://localhost:27017/ecommerce')
.then(()=>{
    console.log("mongodb started")
}).catch(()=>{
    console.log("mongodb connection failed")
})


app.use('/user',userRouter);
app.use('/category',categoryRouter);
app.use('/sub-category',sub_categoryRouter);
app.use('/product',product_router);
app.use('/user-role',user_role_Router);


app.listen(3000, function (res,req) {
console.log('Example app listening on port 3dghretyhs000!');
});