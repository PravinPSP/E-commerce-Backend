import user_role_schema from "../models/user_role.model";


export const insertuserrole = async(req,res)=>{

    let userData =  {user_role:req.body.user_role }
    let insertUserData = await user_role_schema.create(userData);

    
    return res.status(200).json({
        message:"sucess",
        data: insertUserData,
        satus:true
 });

}


