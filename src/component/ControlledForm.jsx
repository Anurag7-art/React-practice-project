import { useState } from "react";
import { categoryList } from "../utility/data";
import { validateProductFrom } from "../utility/validation";



function ControlledFrom (){

    const category = categoryList;


    const productobj={
        productId:0,
        productName:"",
        price:"",
        productCode:"",
        category:"",
    }
    const[errors,setErrors]=useState({});
    const [product,setProduct]=useState(productobj);

    const onHandleChange =(e)=>{

        setProduct(prev=>({...prev,[e.target.name]:e.target.value}));
        setErrors(validateProductFrom(e.target.name,e.target.value));
     
    }
    
    const onHandleSubmit =(e)=>{
        e.preventDefault();
        if(Object.keys(errors).length <= 0){
            alert('Product saved successfully' + JSON.stringify(product))
        console.log(product);
        
        }
        
    }




     return(<>
    <h4>This is Controlled form</h4>
    <div className="row">
        <div className="col-lg-6">
            <form action="" onSubmit={(e)=>onHandleSubmit(e)} >
                <div className="form-group">
                    <label htmlFor="">ProductId</label>
                    <input type="text" name="productId" id="" className="form-control"  onChange={(e)=>onHandleChange(e)} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Product Name</label>
                    <input type="text" name="productName" id="" className="form-control" onChange={(e)=>onHandleChange(e)} />
                    {errors && errors.hasOwnProperty('title')&&(<span className="text-danger">{errors.title}</span>)}
                </div>
                <div className="form-group">
                    <label htmlFor="">Price</label>
                    <input type="text" name="price" id="" className="form-control"  onChange={(e)=>onHandleChange(e)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">ProductCode</label>
                    <input type="text" name="productCode    " id="" className="form-control"  onChange={(e)=>onHandleChange(e)} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Category</label>
                    <select name="category" id="" onChange={(e)=>onHandleChange(e)} >
                           <option value="">--Select</option>
                        {category.map((cat)=>(
                            <option key={cat.id} value={cat.id}>{cat.categoryName}</option>
                        ))}
                    </select>
                    <br /><br />
                 

                </div>
                <div className="form-group">
                    <label htmlFor=""></label>
                    <input type="button" name="" id="" value="Submit" className="btn btn-secondary"  onClick={(e)=>onHandleSubmit(e)}/>
                    
                </div>
                
            </form>
        </div> 
    </div>
    
    </>)
}

export default ControlledFrom;