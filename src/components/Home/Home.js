import React from 'react';

const Home = () => {
    return (
        <section>
            <div className='flex justify-around items-center my-20'>
                <div className='px-10'>
                    <h1 className='text-xl md:text-7xl'>Best camera</h1>
                    <h1 className='text-xl md:text-7xl text-purple-600'>Best capturing</h1>
                    <p className='my-4'>That said, the D3500 will be too basic for experienced photographers. For a more powerful DSLR camera, we suggest looking at the Canon EOS 90D.</p>
                </div>
                <div className='w-[800px] px-10'>
                    <img src="https://i.pinimg.com/originals/09/01/24/0901241fee529bc19918ad3b7b579826.jpg" alt="" />
                </div>
            </div>
        </section>
    );
};

export default Home;