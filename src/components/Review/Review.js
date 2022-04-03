import React from 'react';

const Review = ({ review }) => {
    const { name, rating, reviews, image } = review
    return (
        <div className='px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2'>
            <div className='w-[250px]'>
                <img src={image} alt="" />
                <p className='text-xl font-bold'>{name}</p>
                <p><small className='text-gray-500 font-bold'>Ratings: {rating}</small></p>
                <p>{reviews}</p>
            </div>
        </div>
    );
};

export default Review;