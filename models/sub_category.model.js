import mongoose from "mongoose";


const {Schema} = mongoose;

const sub_categoryschema = new Schema({
    subCategory:{
        type: String
    },
    categoryId:{
        type:Schema.Types.ObjectId,
        ref:'category'
    }

});

const subcategory = mongoose.model('subcategory',sub_categoryschema);
export default subcategory;