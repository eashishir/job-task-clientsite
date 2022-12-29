import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const { register , handelsubmit} = useForm();
    
    const handleLogin = data => {
        console.log(data);
    }
    return (
        <div className='bg-base-200'>
            <div className='h-[800px] flex justify-center items-center'>
            <div className='w-97 p-7'>
                <h2 className="text-xl text-center">Signup</h2>
                <form>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type='text'
                            {...register("name", {
                                required: "Enter your name"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {/* {errors.email && <p className='text-red-600'>{errors.email?.message}</p>} */}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type='text'
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {/* {errors.email && <p className='text-red-600'>{errors.email?.message}</p>} */}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type='password'
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'password must be 6 characters or longer' }
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {/* {errors.password && <p className='text-red-600'>{errors.password?.message}</p>} */}
                        <label className="label">
                      
                        </label>
                    </div>
                    <input className='btn btn-accent w-full' value="SignUp" type="submit" />
                    <div>
                        {/* {loginError && <p className='text-red-600'>{loginError}</p>} */}
                    </div>
                </form>
                <p>Have an account ? <Link className='text-secondary font-bold' to='/login'>Please Login</Link></p>
                <div className="divider text-secondary font-bold">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
        </div>
    );
};

export default SignUp;