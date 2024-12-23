import React from 'react';

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center min-h-screen'>
            <h2 className='text-3xl font-bold text-red-600'>NO DATA FOUND</h2>
            <button className='btn btn-link'>Home</button>
        </div>
    );
};

export default ErrorPage;