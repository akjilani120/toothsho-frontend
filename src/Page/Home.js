import React from 'react';
import { useQuery } from 'react-query'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
const Home = () => {
    const { isLoading, error, data } = useQuery('repoData', () =>
        fetch('http://localhost:5000/fashion').then(res =>
            res.json()
        )
    )

    if (isLoading) return <h4>Loading .......</h4>

    if (error) return 'An error has occurred: ' + error.message
    return (
        <div className='py-4'>
            <div className="container">
                <div className="fashion-header">
                    <div className='d-flex justify-content-between'>
                        <div className="fashion-header-items d-flex">
                            <div>
                                <select name="" id="">
                                    <option value="Hoodies">Hoodies</option>
                                    <option value="Panjabi">Panjabi</option>
                                    <option value="T-shirt">T-shirt</option>
                                </select>
                            </div>
                            <div>
                                <select name="" id="">
                                    <option selected>Size</option>
                                    <option value="M">M</option>
                                    <option value="XL">XL</option>
                                    <option value="S">S</option>
                                </select>
                            </div>
                            <div>
                                <button>Reset</button>
                            </div>
                        </div>
                        <div className="fashion-header-items d-flex">
                           <div>
                           <InputGroup className="mb-3">
                                <Form.Control
                                    placeholder="Search Product"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                                <InputGroup.Text id="basic-addon2">Search</InputGroup.Text>
                            </InputGroup>
                           </div>
                           <div>
                            <button>ADD TO CART</button>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;