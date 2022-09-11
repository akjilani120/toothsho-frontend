import React from 'react';
import { useState } from 'react';

const OrderRow = ({product }) => {
    const {name , img , quantity , price , _id} = product
    const [mainQuantity , semainQuantity] = useState(Number(quantity))
    const increament = () =>{
        semainQuantity( mainQuantity + 1)
    }
    return (
        <tr>
        <th scope="row"> x </th>
        <td> <img className='table-img' src={img} alt="product photos" /> </td>
        <td >{name}</td>     
        <td> $ {price}</td>
        <td >{mainQuantity} <button onClick={increament}> +</button></td> 
        <td> $ {price}</td>

       
    </tr>
    );
};

export default OrderRow;