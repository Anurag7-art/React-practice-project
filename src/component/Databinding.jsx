import {useState} from 'react'


function Databinding() {

const name = "Anurag";
const [fullName,setFullName] = useState('Shindhe');

const  handleChange = (e)=> {
   
    setFullName(e.target.value);
}
const handleSubmit =(e) => {
    e.target.value="Clicked me";
    e.target.style.backgroundColor= 'red';
    setTimeout(()=>{
    e.target.value='Click Me'
    e.target.style.background='royalblue'
    setFullName('');
    },3000
    );

}
<br />


    return(<>
    
    <h4>It is databinding page </h4>
    <input type="text" name="" id=""  placeholder="Anurag"onChange={(e)=>handleChange(e)} />
    <hr />  
    <i>{name}</i>

    <hr />
     
    <input type="text" name="" id="" value={fullName} onChange={(e)=>handleChange(e)} />
    <hr /> <i>{fullName}</i>
    <hr />
     <input type="submit" className='btn btn-primary' value="Click me " onClick={(e)=>handleSubmit(e)} />
    
    
    </>)
}
    


export default Databinding;