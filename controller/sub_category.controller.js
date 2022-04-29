import subcategory from "../models/sub_category.model";
import category from "../models/category.model";


export const savesubcategorywithcategory = async (req, res)=> {

    let cate = await category.findOne({category:req.body.category})
    
    if(cate && cate._id){

           let userData = {subCategory:req.body.subCategory, categoryId: cate._id};

           let User = await subcategory.create(userData);

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


export const listsubcategory = async(req,res)=>{
    
    let sub_newcategory = await subcategory.find({});

        if(sub_newcategory){

            return res.status(200).json({
                message:"sucess",
                data:sub_newcategory,
                status:true
            })
           
        }else{
            return res.status(500).json({
                message: "something went wrong",
                status:false
                });
        }

}

export const editsubcategory = async(req,res)=>{
      const _id = req.params.id;
    let subcategoryedit = await subcategory.findByIdAndUpdate(_id,{subCategory:req.body.subCategory,upsert:false},{new:true})

        if(subcategoryedit){

            return res.status(200).json({
                message:"sucess11111",
                    data:subcategoryedit,
                    status:true
                });
           
        }else{
          
             return res.status(500).json({
                 message: "something went wrong",
                 status:false
            });
        }

}

export const removsubcategory= async(req,res)=>{
         const _id = req.params.id;
    let subcategoryRemove = await subcategory.findByIdAndDelete(_id);

       if(subcategoryRemove){
           return res.status(200).json({
               message:"sucess",
                   data:subcategoryRemove,
                   status:true
               });

       } else{
           return res.status(500).json({
               message: "something went wrong",
               status:false
               });
       }  

}



export const listwithcategory = async(req,res)=>{
          const _id = req.params.id;
        let search = await category.findById(_id)
        
        if(search && search._id){
            let find = await subcategory.find({categoryId:search._id}).populate('categoryId');
               if(find){
                   return res.status(200).json({
                       message:"Success",
                       data:find,
                       status:true
                    }); 
               } else{
                   return res.status(500).json({
                       message:"Category does Not exist...",
                       status:false
                   })
               }
        }
        if(!search){
            let find = await subcategory.find({}).sort({subcategory:1}).populate('categoryId');
            if(find){
                return res.status(200).json({
                    message:"Success",
                    data:find,
                    status:true  
                 }); 
            } else{
                return res.status(500).json({
                    message:"Category does Not exist...",
                    status:false
                })
            }
        }   
            return res.status(500).json({
                message:"Category does Not exist.",
                status:false
            })  
         


}