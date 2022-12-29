import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register , handelsubmit} = useForm;
    
    const handleLogin = data => {
        console.log(data);
    }
    return (
        <div className='bg-base-200'>
            <div className='h-[800px] flex justify-center items-center'>
            <div className='w-97 p-7'>
                <h2 className="text-xl text-center">login</h2>
                <form>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type='text'
                            // {...register("email", {
                            //     required: "Email Address is required"
                            // })}
                            className="input input-bordered w-full max-w-xs" />
                        {/* {errors.email && <p className='text-red-600'>{errors.email?.message}</p>} */}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type='password'
                            // {...register("password", {
                            //     required: "Password is required",
                            //     minLength: { value: 6, message: 'password must be 6 characters or longer' }
                            // })}
                            className="input input-bordered w-full max-w-xs" />
                        {/* {errors.password && <p className='text-red-600'>{errors.password?.message}</p>} */}
                        <label className="label">
                            <span className="label-text"> Forget Password</span>
                        </label>
                    </div>
                    <input className='btn btn-accent w-full' value="Login" type="submit" />
                    <div>
                        {/* {loginError && <p className='text-red-600'>{loginError}</p>} */}
                    </div>
                </form>
                <p>New to doctors portal? <Link className='text-secondary font-bold' to='/signup'>Create new account</Link></p>
                <div className="divider text-secondary font-bold">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
        </div>
    );
};

export default Login;