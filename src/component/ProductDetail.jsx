import { Button } from "bootstrap";
import { useNavigate } from "react-router-dom";
import ProductView from "./ProductView";




function ProductDetail ({product}){
    const navigate = useNavigate();
    const handleChange=(id)=>{
        navigate(`/product-view/${id}`)
    }
 
    const prod = product;

    return(<>
     <tr >
                    <td>{prod.productId}</td>
                    <td>{prod.productName}</td>
                    <td>{prod.price}</td>
                    <td>{prod.productCode}</td>
                    <td>{prod.category}</td>
                    <td>
                        {<input type="button" className="btn btn-secondary" value="View" onClick={(e)=>handleChange(prod.productId)}/>}
                    </td>
                </tr>

               
    

    </>)
}


export default ProductDetail;