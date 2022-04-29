import mongoose from "mongoose";


const {Schema} = mongoose;

const userroleschema = new Schema({
    user_role:{
        type: String
    }
  

});

const user_role_schema = mongoose.model('user_role',userroleschema);
export default user_role_schema;