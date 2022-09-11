import React from 'react';
import { useState } from 'react';

const OrderRow = ({product , refetch ,spcialPrice }) => {
    const {name , img , quantity , price , _id} = product
    const [mainQuantity , seMainQuantity] = useState(Number(quantity))
    const increament = (id) =>{
        seMainQuantity( mainQuantity + 1)
        const mainPrice = mainQuantity * Number(spcialPrice)
        const updataData = {
           price : mainPrice,
           quantity : mainQuantity
        }
        const url = `http://localhost:5000/fashion/update/${id}`
        fetch(url ,{
            method:"PUT",
            headers:{
                "content-type" : "application/json"
            },
            body : JSON.stringify(updataData)
        })
        .then(res => res.json())
        .then(data =>{
            refetch()
        })
        
    }
    const handleDecreament =(id) =>{
        seMainQuantity( mainQuantity - 1)
        const mainPrice = mainQuantity * Number(spcialPrice)
        
        const updataData = {
           price : mainPrice,
           quantity : mainQuantity
        }
        const url = `http://localhost:5000/fashion/update/${id}`
        fetch(url ,{
            method:"PUT",
            headers:{
                "content-type" : "application/json"
            },
            body : JSON.stringify(updataData)
        })
        .then(res => res.json())
        .then(data =>{
            refetch()
        })
        
    }
    const handleDelete =(id) =>{
        const url = `http://localhost:5000/fashion/order/delete/${id}`
        fetch(url ,{
            method:"DELETE",           
        })
        .then(res => res.json())
        .then(data =>{
            refetch()
        })
        
    }
    return (
        <tr>
        <th scope="row">  <button className='btn btn-danger' onClick={()=>handleDelete(_id)}>x</button> </th>
        <td> <img className='table-img' src={img} alt="product photos" /> </td>
        <td >{name}</td>     
        <td> $ {price}</td>
        <td ><button className='btn btn-primary me-3'  disabled={ mainQuantity === 1} onClick={()=>handleDecreament(_id)}>  - </button>
         {mainQuantity} 
         <button className='btn btn-primary ms-3'  onClick={()=>increament(_id)}> +</button>
         </td> 
        <td> $ {price}</td>

       
    </tr>
    );
};

export default OrderRow;