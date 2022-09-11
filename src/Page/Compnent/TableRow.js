import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TableRow = ({ product, index , setSpcialPrice ,setTotalPrice }) => {
    const { name, img, price, color, size , _id } = product
    const [check , setCheck] = useState("")
    const [inputQuantity, setInputQuantity] = useState(1)
    
    const handleCheck =(e) =>{
          setCheck( e.target.value)       
      
    }
    const hanldleOrder =() =>{
      setSpcialPrice(price)
        const mainPrice = inputQuantity * Number(price)       
      const totalOrder ={
        quantity : inputQuantity ,
        img ,
        name,
        price : mainPrice

      }
      if(check == "on"){
       axios.post("https://pure-sierra-82824.herokuapp.com/fashion/order" , totalOrder)
       .then(res => {    
        setTotalPrice(mainPrice)        
        toast("Thank you For order")
     })
        
      }else{
        alert("Please Fill check box . It does not complete your order")
      }
      
    }
   
    return (
        <tr>
            <th scope="row">{index + 1}</th>
            <td> <img className='table-img' src={img} alt="product photos" /> </td>
            <td >{name}</td>
            <td>{color}</td>
            <td className='text-success fw-bold'>In Stock</td>
            <td> $ {price}</td>
            <td>  {size}</td>
            <td className='cart-td d-md-flex  justify-content-center'>
           <p>  <input onChange={(e) => setInputQuantity(e.target.value)} className='quantity-input' placeholder='1' type="number" name="" id=""  min="1"/> </p>
            <p> <FontAwesomeIcon  onClick={hanldleOrder} className='shoping-cart-icon' icon={ faCartShopping}  /></p>
            <p> <input onClick={handleCheck} type="checkbox" name="" id="" /></p>
            </td>
            <ToastContainer />
        </tr>
    );
};

export default TableRow;