import React from 'react';
import { Link } from 'react-router-dom';

const ThankPage = () => {
    return (
        <div className=''>
            <div className='my-3'> <Link className='btn btn-success ms-3' to="/">Home </Link> <Link className='btn btn-success ms-3' to="/myOrder">My Order </Link></div>
           <img height="650px" className='w-100' src="https://img.freepik.com/free-vector/thank-you-card-colorful-watercolor-floral-with-gold-frame_65186-2978.jpg?w=2000" alt="" />
        </div>
    );
};

export default ThankPage;