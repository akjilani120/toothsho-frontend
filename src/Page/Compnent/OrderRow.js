import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const OrderRow = ({product , refetch }) => {
    const {name , img , quantity , price , _id, total} = product
    const [mainQuantity , seMainQuantity] = useState(Number(quantity))

    const update=()=>{
        const data={
            quantity:mainQuantity,
            total:price * mainQuantity
        }
        const url = `https://pure-sierra-82824.herokuapp.com/fashion/update/${_id}`
        fetch(url ,{
            method:"PUT",
            headers:{
                "content-type" : "application/json"
            },
            body : JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data =>{           
            refetch()
        })
    }

    useEffect(()=>{
        update()
    },[mainQuantity])

    const increament = () =>{
        seMainQuantity( mainQuantity + 1) 
    }

    const handleDecreament =() =>{
        seMainQuantity( mainQuantity - 1)
    }

    const handleDelete =(id) =>{
        const url = `https://pure-sierra-82824.herokuapp.com/fashion/order/delete/${id}`
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
        <td> $ {total}</td>
        <td ><button className='btn btn-primary me-3' disabled={mainQuantity <= 1}  onClick={()=>handleDecreament()}>  - </button>
         {mainQuantity} 
         <button className='btn btn-primary ms-3'  onClick={()=>increament()}> +</button>
         </td> 
        <td> <h5 className='text-primary'>$ {total}</h5></td>

       
    </tr>
    );
};

export default OrderRow;