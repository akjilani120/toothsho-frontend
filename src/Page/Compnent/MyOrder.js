import React from 'react';
import { useQuery } from 'react-query'
import OrderRow from './OrderRow';
const MyOrder = ({spcialPrice}) => {
    const { isLoading, error, data , refetch } = useQuery('repoData', () =>
        fetch('http://localhost:5000/fashion/order').then(res =>
            res.json()
        )
    )

    if (isLoading) return <h4>Loading .......</h4>

    if (error) return 'An error has occurred: ' + error.message
    return (
        <div>
            <div className="container">
                <h1>My orders</h1>
                <div className='row'>
                    <div className="col-md-8">
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
                                        data.map((product, index) => <OrderRow refetch={refetch} spcialPrice={spcialPrice} product={product} key={product._id} />)

                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-md-4">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrder;