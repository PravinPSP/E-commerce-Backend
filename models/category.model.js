import mongoose from "mongoose";

const {Schema} = mongoose;

const categoryschema = new Schema({
    category:{
        type: String
    }
    

});

const category = mongoose.model('category',categoryschema);
export default category;