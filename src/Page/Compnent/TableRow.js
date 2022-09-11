import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const TableRow = ({ product, index }) => {
    const { name, img, price, color, size } = product
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
             <input type="checkbox" name="" id="" />
            </td>
        </tr>
    );
};

export default TableRow;