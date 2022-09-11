import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

const TableRow = ({ product, index }) => {
    const { name, img, price, color, size , _id } = product
    const [check , setCheck] = useState("")
    const hanldleOrder =() =>{

    }
    console.log("check value" , check)
    return (
        <tr>
            <th scope="row">{index + 1}</th>
            <td> <img className='table-img' src={img} alt="product photos" /> </td>
            <td >{name}</td>
            <td>{color}</td>
            <td className='text-success fw-bold'>In Stock</td>
            <td> $ {price}</td>
            <td>  {size}</td>
            <td className='cart-td'>
            <input className='quantity-input' placeholder='1' type="number" name="" id=""  min="1"/> 
           <FontAwesomeIcon className='shoping-cart-icon' icon={ faCartShopping}  />
             <input onChange={(e) => setCheck(e.target.value)} type="checkbox" name="" id="" />
            </td>
        </tr>
    );
};

export default TableRow;