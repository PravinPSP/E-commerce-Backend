
import category from '../models/category.model'
import product from '../models/products.model';
import subcategory from '../models/sub_category.model';



export const insertcategory = async(req,res)=>{
    let newcategory = await category.create({category:req.body.category});

        if(newcategory){
            return res.status(200).json({
                message:"sucess",
                data: newcategory,
                satus:true
            });
        }else{
            return res.status(500).json({
                message: "something went wrong",
                status:false
                });
        }
    

}


export const listcategory = async(req,res)=>{
    
    let newcategory = await category.find({});

        if(newcategory){

            return res.status(200).json({
                message:"sucess",
                data:newcategory,
                status:true
            })


           
        }else{
            return res.status(500).json({
                message: "something went wrong",
                status:false
                });
        }

  


}

export const editcategory = async(req,res)=>{
    const _id = req.params.id;
    let categoryedit = await category.findByIdAndUpdate(_id,{category:req.body.category,upsert:false},{new:true})

        if(categoryedit){

            return res.status(200).json({
                message:"sucess",
                    data:edit,
                    status:true
                });
           
        }else{
          
             return res.status(500).json({
                 message: "something went wrong",
                 status:false
            });
        }

}

export const removcategory= async(req,res)=>{
    const _id = req.params.id;
    let categoryRemove = await category.findByIdAndDelete(_id);
    let subcategroryremove = await subcategory.remove({categoryId:categoryRemove._id});

    let productremove = await product.remove({categoryId:categoryRemove._id});

       if(categoryRemove && productremove && subcategroryremove){
           return res.status(200).json({
               message:"sucess",
                   data:categoryRemove,
                   status:true
               });

       } else{
           return res.status(500).json({
               message: "something went wrong",
               status:false
               });
       }  

}




