import {  useEffect, useState } from "react";
import { productList } from "../utility/data.js";
import ProductDetail from "./ProductDetail.jsx";



function ProductList ({selectcat,onupdate,searchText}) {
const product = productList;
const search=searchText;
const [sortOrder, setSortOrder] = useState("high");

const selectCategory=selectcat;

const [filteredProduct,setFilteredProduct]= useState([]);



useEffect(()=>{
    let productnotify=selectCategory?product.filter(f=>f.category==selectCategory):product;
    productnotify=productnotify.filter(prod=>
                        prod.productName.toLowerCase().includes(search.toLowerCase()));
                                
                                productnotify = [...productnotify].sort(
                                (a, b) => {
                                    if(sortOrder === "high"){
                                        return b.price - a.price;
                                    }else if(sortOrder === "low"){
                                        return a.price - b.price;
                                    }
                                    else if(sortOrder === "az"){
                                        return a.productName.localeCompare(b.productName);
                                    }
                                    else if(sortOrder === "za"){
                                    return b.productName.localeCompare(a.productName);
 } });
                                setFilteredProduct( productnotify);
                                onupdate(productnotify.length);
                },[selectCategory, search,sortOrder]);

    return(<>
    Sort: <select name="" id="" value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
        <option value="">--Select</option>
        <option value="high">Price: High to Low</option>
        <option value="low">Price: Low to High</option>
        <option value="az">Name: A to Z</option>
        <option value="za">Name: Z to A</option>
    </select>
    <div className="container mt-4">
    <div className="row">
        {filteredProduct.map((prod) => (
            <ProductDetail
                product={prod}
                key={prod.productId}
            />
        ))}
    </div>
</div>
    
    
    </>)
}

export default ProductList;

    
