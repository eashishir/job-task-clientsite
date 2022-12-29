import React from 'react';

const PostesCard = () => {
    return (
       <div>
        <div className='text-center mt-5'>
            <h1 className='text-5xl text-primary m-2 font-bold'>Top Status</h1>
        </div>
         <div className="card w-96 bg-base-200 shadow-xl">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    Shoes!
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
       </div>
    );
};

export default PostesCard;