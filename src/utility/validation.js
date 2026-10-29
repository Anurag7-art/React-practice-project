


export const validateProductFrom = (fieldName,fieldValue) =>{

    let errors={}
        
    
    if(fieldName =="productName"){
            if(!fieldValue.length){
                errors.title="Product Name is mandatory";
            }else{
                delete errors.title;
            }
            
        }
        return errors;
            
    }
