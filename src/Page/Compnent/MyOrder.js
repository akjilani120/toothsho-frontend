import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom';
import OrderRow from './OrderRow';
const MyOrder = () => {
    const [totalPrice, setTotalPrice]= useState(0)
    const { isLoading, error, data, refetch } = useQuery('orderData', () =>
        fetch('https://pure-sierra-82824.herokuapp.com/fashion/order').then(res =>
            res.json()
        )
    )
   
    const getTotal=()=>{
        data.forEach(element => {
          setTotalPrice( element.total )          
       })
   }

    useEffect(()=>{
        if(data){
            getTotal()
        }
    },[data])

   

   

    if (isLoading) return <h4>Loading .......</h4>

    if (error) return 'An error has occurred: ' + error.message
    return (
        <div>
            <div className='my-3'> <Link className='btn btn-success ms-3' to="/">Home </Link> </div>
            <div className="container">               
                <div className='row'>
                    <div className="col-md-8">
                    <h1 className='text-center text-primary'>My orders</h1>
                        <div className="table-show table-responsive mt-4">
                            <table class="table table-striped text-center">
                                <thead className='table-dark'>
                                    <tr>
                                        <th scope="col">Delete Order</th>
                                        <th scope="col">Image</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">SubTotal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.map((product, index) => <OrderRow totalPrice={totalPrice}  setTotalPrice={setTotalPrice} refetch={refetch}  product={product} key={product._id} />)

                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="total-show-order card p-3">
                            <h3>Cart Totals</h3>
                            <div className='d-flex justify-content-between'>
                                <h5>Subtotal</h5>
                                <h5>{totalPrice}</h5>
                            </div>

                            <hr />
                            <div className='d-flex justify-content-between'>
                                <h5>Total</h5>
                                <h5>{totalPrice}</h5>

                            </div>
                            <div className='mx-auto my-4'>
                            <Link className='btn btn-primary btn-block' to="/thankPage">Processed To Check Out</Link>
                        </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrder;