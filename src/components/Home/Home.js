import React from 'react';

const Home = () => {
    return (
        <div className='flex justify-around items-center my-20'>
            <div>
                <h1 className='text-xl md:text-7xl'>Best camera</h1>
                <h1 className='text-xl md:text-7xl'>Best capturing</h1>
            </div>
            <div className='w-[600px]'>
                <img src="https://i.pinimg.com/originals/09/01/24/0901241fee529bc19918ad3b7b579826.jpg" alt="" />
            </div>
        </div>
    );
};

export default Home;