import React from 'react';
import useReviews from '../../hooks/useReviews';
import ReviewDetails from '../ReviewDetails/ReviewDetails';

const Reviews = () => {
    const [reviews, setReviews] = useReviews()
    return (
        <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-items-center'>
            {
                reviews.map(review => <ReviewDetails
                    key={review.id}
                    review={review}
                ></ReviewDetails>)
            }
        </div>
    );
};

export default Reviews;