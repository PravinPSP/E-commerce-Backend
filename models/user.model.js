import mongoose from "mongoose";

const {Schema} = mongoose;

const userschema = new Schema({
    name:{
        type: String
    },
    email:{
        type: String
    },
    password:{
        type: String
    },
    user_role_Id:{
        type:Schema.Types.ObjectId,
        ref:'user_role'
    }

});

const User = mongoose.model('user',userschema);
export default User;