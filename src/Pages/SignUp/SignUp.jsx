import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/Authprovider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
 import SocialLogin from "../Shared/SocialLogin/SocialLogin";
// import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const SignUp = () => {
const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    } = useForm();
    const {createUser, updateUserProfile} = useContext(AuthContext);
    const navigate = useNavigate();

const onSubmit = data => {
    
    createUser(data.email, data.password)
    .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name, data.photoURL)
        .then(() => {
            const saveUser = {name: data.name, email : data.email}
            fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body : JSON.stringify(saveUser)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    reset();
                    Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User created successfully",
                    showConfirmButton: false,
                    timer: 1500
              });
                    navigate('/');
                }
            })
        })
        .catch(error => console.log(error))
    })
    };
return (
   <>
       <Helmet>
                <title>Asian Bistro | Sign Up</title>
            </Helmet>
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold text-orange-400 font-extrabold">Sign up now!</h1>
        <p className="py-6">Sign up and get additional discount from us as a welcome treat.</p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
            <label className="label">
                <span className="label-text font-semibold">Name</span>
            </label>
            <input type="text" {...register("name", { required: true })}  placeholder="Name" 
             name="name" className="input input-bordered" />
            {errors.name && <span className="text-red-600"> Name is required</span>}    
            </div>
            <div className="form-control">
            <label className="label">
                <span className="label-text font-semibold">Photo URL</span>
            </label>
            <input type="text" {...register("photoURL", { required: true })}  placeholder="Photo URL" className="input input-bordered" />
            {errors.photoURL && <span className="text-red-600"> Photo URL is required</span>}    
            </div>
            <div className="form-control">
            <label className="label">
                <span className="label-text font-semibold">Email</span>
            </label>
            <input type="email" {...register("email", { required: true })}  name="email" placeholder="Email" className="input input-bordered"/>
            {errors.email && <span className="text-red-600"> Email is required</span>} 
            </div>
            <div className="form-control">
            <label className="label">
                <span className="label-text font-semibold">Password</span>
            </label>
            <input type="password"  {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} placeholder="Password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
            <label className="label">
                <a href="#" className="label-text-alt link link-hover text-orange-400 font-bold">Forgot password?</a>
            </label>
            </div>
            <div className="form-control mt-6">
                <input className="btn btn-outline border-b-4 bg-slate-100 border-0 border-orange-400 mt-4" type="submit" value="Sign Up"/>
            </div>
        </form> 
        <p className='text-center pb-2'><small>Already have an account? <Link className='text-orange-400 font-bold' to="/login">Sign in</Link></small></p>
         <SocialLogin></SocialLogin>
        </div>
    </div>
    </div>
   </>
);
};

export default SignUp;