import React, { useState } from 'react';
import { useQuery } from 'react-query'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import TableRow from './Compnent/TableRow';
import { Link } from "react-router-dom";
import './Home.css'
const Home = ({setSpcialPrice}) => {
    const [productValue , setProductValue] =useState("")
    const [sizeValue , setSizeValue] =useState("")
    const [searchValue , setSearchValue] = useState("")
    const { isLoading, error, data } = useQuery('repoData', () =>
        fetch('http://localhost:5000/fashion').then(res =>
            res.json()
        )
    )

    if (isLoading) return <h4>Loading .......</h4>

    if (error) return 'An error has occurred: ' + error.message
    const handleReset =()=>{
        setProductValue("")
        setSizeValue("")
    }
    return (
        <div className='py-4'>
            <div className="container">
                <div className="fashion-header">
                    <div className='d-flex justify-content-between'>
                        <div className="fashion-header-items d-flex">
                            <div className='me-3'>
                                <select onChange={(e) => setProductValue(e.target.value)} className='form-select me-3' name="" id="">
                                    <option value="Hoodies">Hoodies</option>
                                    <option value="Panjabi">Panjabi</option>
                                    <option value="T-shirt">T-shirt</option>
                                </select>
                            </div>
                            <div className='me-3'>
                                <select onChange={(e) => setSizeValue(e.target.value)} className='form-select me-3' name="" id="">
                                    <option selected>Size</option>
                                    <option value="M">M</option>
                                    <option value="XL">XL</option>
                                    <option value="S">S</option>
                                </select>
                            </div>
                            <div>
                                <button onClick={handleReset} className='btn btn-primary'>Reset</button>
                            </div>
                        </div>
                        <div className="fashion-header-items d-flex">
                            <div>
                                <InputGroup className="mb-3">
                                    <Form.Control onChange={(e) => setSearchValue(e.target.value)}
                                        placeholder="Search Product"
                                        aria-label="Recipient's username"
                                        aria-describedby="basic-addon2"
                                    />
                                    <InputGroup.Text id="basic-addon2" className='btn btn-primary'>Search</InputGroup.Text>
                                </InputGroup>
                            </div>
                            <div className='ms-3'>
                                <Link to="/myOrder" className='btn btn-primary px-4'>ADD TO CART</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="table-show table-responsive mt-4">
                    <table class="table table-striped text-center">
                        <thead className='table-dark'>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Image</th>
                                <th scope="col">Name</th>
                                <th scope="col">Color</th>
                                <th scope="col">Stock</th>
                                <th scope="col">Price</th>
                                <th scope="col">Size</th>
                                <th scope="col">Buy</th>
                            </tr>
                        </thead>
                        <tbody>
                          {
                            data
                            .filter((val) => {
                                if(searchValue === ""){
                                    return val
                                } else if(val.name.toLowerCase().includes(searchValue.toLocaleLowerCase())){                                    
                                    return val
                                }
                            })
                            .filter((val) => {
                                if(productValue === ""){
                                    return val
                                } else if(val.name.toLowerCase().includes(productValue.toLocaleLowerCase())){                                    
                                    return val
                                }
                            })
                            .filter((val) => {
                                if(productValue === ""){
                                    return val
                                } else if(val.size.toLowerCase().includes(sizeValue.toLocaleLowerCase())){                                    
                                    return val
                                }
                            })                            
                            .map((product , index) => <TableRow setSpcialPrice={setSpcialPrice} index={index} product={product} key={product._id}/>)
                          }
                        </tbody>
                    </table>
                </div>
            </div>
           
        </div>
    );
};

export default Home;