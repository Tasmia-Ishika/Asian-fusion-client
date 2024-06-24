import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form"
import {GiForkKnifeSpoon} from "react-icons/gi";
import Swal from "sweetalert2";
// import useAxiosPublic from "../../../hooks/useAxiosPublic";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";


const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();
     //const axiosPublic = useAxiosPublic();
   //const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {  
      console.log(data)
    const reviewItem = {
    name: data.name,
    rating : parseFloat(data.rating),
    details: data.details
     }
     fetch('http://localhost:5000/reviews', {
      method: 'POST',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(reviewItem)
  })
      .then(res => res.json())
      .then(data => {
          console.log(data);
          reset();
          Swal.fire({
            title: "Thank you for the feedback!",
            text: "We appreciate your effort. Thanks for sharing your opinion",
            icon: "success"
          });
        })
    console.log(data);
 };
 
     
    return (
        <div>
           <SectionTitle subHeading="Your opinion matter to us" heading="Add Ratings"></SectionTitle>
           <div className="border-double border-4 border-yellow-400 rounded-2xl p-10 m-10">
 <form onSubmit={handleSubmit(onSubmit)}>
            {/* name */}
           <label className="form-control w-full ">
  <div className="label">
    <span className="label-text font-bold">Customer Name</span>
    
  </div>
  <input 
  type="text" 
  placeholder="Customer Name"
  {...register('name', {required: true})} required 
  className="input input-bordered input-warning w-full" />
</label>
 {/* rating */}
 <h1 className="mt-5  font-bold text-lg label-text">Did we provide good service? Please rate us to improve our quality and service.</h1>
 <div className="rating mt-4 mb-5 rating-lg">
  <input type="radio" {...register("rating", { min: 1, max: 5 })} value="1"  className="mask mask-star-2 bg-orange-500" />
  <input type="radio" {...register("rating", { min: 1, max: 5 })} value="2" className="mask mask-star-2 bg-orange-500" defaultChecked />
  <input type="radio" {...register("rating", { min: 1, max: 5 })} value="3" className="mask mask-star-2 bg-orange-500" />
  <input type="radio" {...register("rating", { min: 1, max: 5 })} value="4" className="mask mask-star-2 bg-orange-500" />
  <input type="radio" {...register("rating", { min: 1, max: 5 })} value="5"  className="mask mask-star-2 bg-orange-500" />
</div>

{/* details */}
<div className="mt-3 font-bold form-control">
    <label className="label-text mb-2">Share your feedback</label>
  </div>
  <textarea {...register('details')} className="textarea textarea-warning w-full" placeholder="Type here"></textarea>

  <button className="btn btn-warning  mt-4">Submit <GiForkKnifeSpoon size={20}/></button>
    </form>
           </div>
        </div>
    );
};

export default AddReview;