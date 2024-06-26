import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Providers/Authprovider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
 import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const {signIn} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
useEffect ( () => {
    loadCaptchaEnginge(6);
}, [])

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            Swal.fire({
                title: "Sign in successful",
                showClass: {
                  popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                },
                hideClass: {
                  popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                }
              });

        navigate(from, {replace: true});
        })
    }
const handleValidateCaptcha = (e) =>{
const user_captcha_value = e.target.value;
if(validateCaptcha(user_captcha_value)){
setDisabled(false);
}
else{
setDisabled(true);
}
}
    return (
        <>
         <Helmet>
                <title>Asian Bistro | Sign In</title>
         </Helmet>
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col md:flex-row-reverse">
                <div className="text-center md:w-1/2 lg:text-left">
                    <h1 className="text-5xl font-bold text-orange-400 font-extrabold">Sign in</h1>
                    <p className="py-6 ">Please Sign in if you already have an account.</p>
                </div>
                <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover text-orange-500 font-bold">Forgot password?</a>
                            </label>
                        </div>


                        <div className="form-control">
                            <label className="label">
                            <LoadCanvasTemplate />  
                            </label>
                            <input onBlur={handleValidateCaptcha}  type="text" name="captcha" placeholder="Enter Captcha" className="input input-bordered" required />
                            {/* <button  className="btn btn-outline btn-xs mt-3 border-b-4 bg-slate-100 border-0 border-orange-400">Validate</button> */}
                    </div>
                    <div className="form-control mt-6">
                    <input disabled={disabled} className="btn btn-outline border-b-4 bg-slate-100 border-0 border-orange-400 mt-4" type="submit" value="Login" />
                        </div>
                        <p className='text-center'><small>New Here? <Link className='text-orange-400 font-bold' to="/signup">Create an account</Link></small></p>
                        <SocialLogin></SocialLogin>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
};

export default Login;