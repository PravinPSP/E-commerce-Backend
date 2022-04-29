
import user from "../models/user.model";
import user_role_schema from "../models/user_role.model";


 export const insertUser = async(req,res)=>{
        let userData =  {name:req.body.name, email:req.body.email, password:req.body.password }
        let insertUserData = await user.create(userData);

        
        return res.status(200).json({
            message:"sucess",
            data: insertUserData,
            satus:true
     });

}
 
export const userlogin= async(req,res)=>{

    
    if(!req.body.email){
        return res.status(422).json({
            message:"email needed",
            status:false
        })
    }
    if(!req.body.password){
        return res.status(422).json({
            message:"password needed",
            status:false
        })
    }


    const usercheck = await user.findOne({email:req.body.email, password:req.body.password})

    if(usercheck){
                return res.status(200).json({
                    message:" login sucessfull",
                    data: usercheck,
                    satus:true
            });

    } else {
            return res.status(422).json({
                message:"user does not exist.",
                status: false
        })
    }
}


export const userprofile = async(req,res)=>{
    const _id = req.params.id;
    const userprofile = await user.findById(_id)


            if(userprofile){
                return res.status(200).json({
                    message:"my profile",
                    data: userprofile,
                    satus:true
            });

        } else {
            return res.status(422).json({
                message:"user does not exist.",
                status: false
            })
        }
}

export const updateUser = async(req,res)=>{
        const _id = req.params.id;
           const update = await user.findByIdAndUpdate(_id,{email:req.body.email,name:req.body.name, password:req.body.password ,upsert:false})
        
                    if(update){
                        return res.status(200).json({
                            message:"sucess",
                                data:update,
                                status:true
                            });
                    }else {
                        return res.status(500).json({
                            message:"something went wrong",
                                
                                status:false
                            });
                    }
                           
}
       
    
 


export const removeuser = async(req,res)=>{
         const _id = req.params.id;
     let userRemove = await user.findByIdAndDelete(_id);

        if(userRemove){

            return res.status(200).json({
                message:"sucess",
                    data:userRemove,
                    status:true
                });

        } else{
            return res.status(500).json({
                message: "something went wrong",
                status:false
                });
        }  

}





export const insert_user_with_userrole = async (req,res)=> {


       let cate = await user_role_schema.findOne({user_role:req.body.user_role})
       
       if(cate && cate._id){

              let userData = {name:req.body.name, email:req.body.email, password:req.body.password, user_role_Id: cate._id};

              let User = await user.create(userData);

              if(User){
                     return res.status(200).json({
                            message:"sucess",
                            data: User,
                            satus:true
                     });
              }else {
                     return res.status(500).json({
                            message: "Something went wrong.",
				            status: false
                     });
              }
       }
       else {
              return res.status(422).json({
                     message:"category does not exist.",
                     status: false
              })
       }
       
}




export const list_user = async(req,res)=>{

    let userCompany = await user.find().populate('user_role_Id');

    
    if(userCompany){
            return res.status(200).json({
                message:"sucess",
                data: userCompany,
                satus:true
        });
    }
    else {
                     return res.status(500).json({
                            message: "Something went wrong.",
				            status: false
                     });
}

}