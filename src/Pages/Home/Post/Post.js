import React from 'react';

const Post = () => {
    return (
        <div>
            <div className='text-center mt-5'>
                <h1 className='text-5xl text-primary m-2 font-bold'>Share what you can  </h1>
            </div>

            <div className="hero mt-3  bg-base-200">


                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center d-flex justify-content-center lg:text-left">
                        <h1 className="text-5xl font-bold">Post a status update</h1>
                        <p className="py-6">The miracle is this: The more we share the more we have.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Write Here</span>
                                </label>
                                <textarea className="textarea textarea-bordered" placeholder="Type"></textarea>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Upload Image</span>
                                </label>
                                <input type="text" placeholder="URI" className="input input-bordered" />
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Post;