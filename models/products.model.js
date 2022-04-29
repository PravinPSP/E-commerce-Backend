import mongoose from "mongoose";


const {Schema} = mongoose;

const productschema= new Schema({
    product_model_no:{
        type:String
    },
    product_name:{
        type: String
    },
    product_size:{
        type:String
    },
    product_price:{
        type: Number
    },
    product_qty:{
        type: Number
    },
    categoryId:{
        type:Schema.Types.ObjectId,
        ref:'category' 
    },
    sub_categoryId:{
        type:Schema.Types.ObjectId,
        ref:'subcategory'
    }

});

const product = mongoose.model('product',productschema);
export default product;