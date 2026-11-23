import { useState } from "react";
import { categoryList } from "../utility/data.js"
import ProductList from "./ProductList";





function Search () {
 const category = categoryList;

 const [selectedCatergory,setSelectedCatergory]=useState('');

 const [searchText,setSearchText]=useState('');

 const handleChange=(e)=>{
    setSelectedCatergory(e.target.value);
 }
 const [records,setRecords]=useState()
 
 const onNotify = (mssg)=>{
    setRecords(mssg);
 }



    return(<>
    <h4>This is category selection</h4>
                <div className="input-group mb-3" style={{ maxWidth: "400px" }}>
                            <input  type="text"
                            className="form-control"
                            placeholder="Search products..." onChange={(e)=>setSearchText(e.target.value)}/>
                            <button type="button"  onClick={()=>setSearchText("")} className="btn btn-secondary">Clear</button>
                </div>


        <hr className="my-4 border-secondary opacity-25" />
              
              <div className="d-flex align-items-center gap-3 my-3">

    <label
        htmlFor="category"
        className="form-label mb-0 fw-semibold">
        Category:
    </label>
               <select id="category"
        className="form-select w-auto shadow-sm"
        value={selectedCatergory} onChange={(e)=>handleChange(e)}>
                        <option value="">--Select</option>

                        {category.map((cat)=>(
                            <option  key={cat.id} value={cat.id}>{cat.categoryName}</option>
                        ))}
                    
    </select>
    </div>
            <i>{selectedCatergory}</i>
                        <hr className="my-4 border-secondary opacity-25" />
                           <ProductList selectcat={selectedCatergory} onupdate={onNotify} searchText={searchText}/>

                        <hr className="my-4 border-secondary opacity-25" />
                              {records&&(<i className="text text-success">Product:{records}</i>)}
    
    
    </>)
}


export default Search;
