import React from 'react';

const ReviewDetails = ({ review }) => {
    const { name, rating, reviews, image } = review
    return (
        <div className='px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2'>
            <div className='w-[350px] h-full border-solid border-2 py-4 px-4 hover:border-dotted border-purple-500 rounded-lg shadow-2xl'>
                <div className='mb-4'>
                    <img className='' src={image} alt="" />
                </div>
                <p className='text-xl font-bold text-purple-600 my-4'>{name}</p>
                <p className=' mb-4'><small className='text-gray-500 font-bold'>Ratings: {rating}</small></p>
                <p><span className='text-gray-500 font-bold'>Review:</span> {reviews}</p>
            </div>
        </div>
    );
};

export default ReviewDetails;