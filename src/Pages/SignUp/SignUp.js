import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const SignUp = () => {
    const { register ,formState:{ errors } , reset, handleSubmit} = useForm();
    const {createUser,googleLogin} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    
    const handleSignup = data => {
        console.log(data);
        
        createUser(data.email, data.password)
        .then(result => {
            const user = result.user;
            reset();
            console.log(user)
        })
        .catch(error =>console.log(error))
    }
    const googleSignIn = () => {
        googleLogin(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error => console.log(error))


    }
    return (
        <div className='bg-base-200'>
            <div className='h-[800px] flex justify-center items-center'>
            <div className='w-97 p-7'>
                <h2 className="text-xl text-center">Signup</h2>
                <form onSubmit={handleSubmit(handleSignup)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type='text'
                            {...register("name", {
                                required: "Enter your name"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
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
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
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
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                        
                    </div>
                    <input className='btn btn-accent w-full mt-4' value="SignUp" type="submit" />
                    <div>
                        {/* {loginError && <p className='text-red-600'>{loginError}</p>} */}
                    </div>
                </form>
                <p>Have an account ? <Link className='text-secondary font-bold' to='/login'>Please Login</Link></p>
                <div className="divider text-secondary font-bold">OR</div>
                <button onClick={googleSignIn} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
        </div>
    );
};

export default SignUp;