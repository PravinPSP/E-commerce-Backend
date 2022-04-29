import product from "../models/products.model";
import subcategory from "../models/sub_category.model";

import category from "../models/category.model";



export const save_product_with_subcategory = async (req, res)=> {

    let cate = await category.findOne({category:req.body.category});
    
    let sub_cate = await subcategory.findOne({subCategory:req.body.subCategory,categoryId:cate._id})
    
    if(cate && sub_cate ){

           let userData = { product_model_no:req.body.product_model_no,
                            product_name:req.body.product_name,
                            product_size:req.body.product_size,
                            product_qty:req.body.product_qty,
                            product_price:req.body.product_price,
                            categoryId:cate._id,
                            sub_categoryId: sub_cate._id};

                          
           let User = await product.create(userData);

           

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
                  message:"categodcdcdry does not exist.",
                  status: false
           })
    }
    
}


export const editproduct = async (req,res)=>{

         const _id = req.params.id;

    let edited_product = await product.findByIdAndUpdate(_id,{  product_id:req.body.product_id,
        product_name:req.body.product_name,
        product_size:req.body.product_size,
         product_qty:req.body.product_qt,upsert:false},{new:true})

    if(edited_product){

        return res.status(200).json({
            message:"sucessfully product is edited",
                data:edited_product,
                status:true
            });
       
    }else{
      
         return res.status(500).json({
             message: "something went wrong",
             status:false
        });
    }

}




export const list_All_Product = async(req,res)=>{
    
    let list_product = await product.find({});

        if(list_product){

            return res.status(200).json({
                message:"sucess",
                data:list_product,
                status:true
            })

        } else{
            return res.status(500).json({
                message: "something went wrong",
                status:false
                });
        }

}


export const remove_Product= async(req,res)=>{

     const _id = req.params.id;

     let product_remove = await product.findByIdAndDelete(_id);

       if(product_remove){
           return res.status(200).json({
               message:`${product_remove.product_name} succesfull removed`,
                   data:product_remove,
                   status:true
               });

       } else{
           return res.status(500).json({
               message: "something went wrong",
               status:false
               });
       }  

}



export const list_product_with_subcategory = async(req,res)=>{

     const _id = req.params.id;

        let find = await product.find({categoryId:_id}).populate('categoryId').populate('sub_categoryId');
           if(find){
               return res.status(200).json({
                   message:"Successferr",
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

