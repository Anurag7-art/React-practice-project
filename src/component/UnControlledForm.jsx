import { useRef, useState } from "react";




function UnControlledForm (){

    const onHandleSubmit =(e) => {
        e.preventDefault();
          const product={
        productId:productIdref.current.value,
        productName:productNameref.current.value,
        price:productpriceref.current.value,
        productCode:productcodeIdref.current.value,
        category:productcategory.current.value ,};
        alert('Form Submit' + JSON.stringify(product)); 
        
    }
    
     const productIdref=useRef();
     const productNameref=useRef();
     const productpriceref=useRef();
     const productcodeIdref=useRef();
     const productcategory=useRef();
     
 
   


    return(<>
    <h4>This is Uncontrolled form</h4>
    <div className="row">
        <div className="col-lg-6">
            <form action="" >
                <div className="form-group">
                    <label htmlFor="">ProductId</label>
                    <input type="text" name="" id="" className="form-control" ref={productIdref} onChange={(e)=>onHandleChange(e)} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Product Name</label>
                    <input type="text" name="" id="" className="form-control" ref={productNameref} onChange={(e)=>onHandleChange(e)} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Price</label>
                    <input type="text" name="" id="" className="form-control" ref={productpriceref} onChange={(e)=>onHandleChange(e)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">ProductCode</label>
                    <input type="text" name="" id="" className="form-control" ref={productcodeIdref} onChange={(e)=>onHandleChange(e)} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Category</label>
                    <input type="text" name="" id="" className="form-control"  ref={productcategory} onChange={(e)=>onHandleChange(e)}/>

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


export default UnControlledForm;