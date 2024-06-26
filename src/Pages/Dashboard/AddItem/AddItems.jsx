import { GiForkKnifeSpoon } from "react-icons/gi";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form"
import useAxiosPublic from "../../../hooks/useAxiosPublic";
 import useAxiosSecure from "../../../hooks/useAxiosSecure";
 import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?expiration=600&key=${image_hosting_key}` 

const AddItems = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic()
  const axiosSecure = useAxiosSecure()
  const onSubmit = async (data) => {
    console.log(data)
    // img upload and get url
    const imageFile = { image: data.image[0]}
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
          'content-type': 'multipart/form-data'
      }
    });
    if (res.data.success) {
      // now send the menu item data to the server with the image url
      const menuItem = {
          name: data.name,
          category: data.category,
          price: parseFloat(data.price),
          recipe: data.recipe,
          image: res.data.data.display_url
      }
      // 
      const menuRes = await axiosSecure.post('/menu', menuItem);
      console.log(menuRes.data)
      if(menuRes.data.insertedId){
          reset();
          Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${data.name} is added to the menu.`,
              showConfirmButton: false,
              timer: 1500
            });
      }
  }
  console.log( 'with image url', res.data);
};


  return (
 <div >
<SectionTitle heading="Add Item" subHeading="What's New?"></SectionTitle>
    <div className="border-double border-4 border-yellow-400 rounded-2xl p-10 m-10">
    <form onSubmit={handleSubmit(onSubmit)}>
      <label className="form-control w-full ">
  <div className="label">
    <span className="label-text">Recipe Name*</span>
    
  </div>
  <input 
  type="text" 
  placeholder="Recipe Name"
  {...register('name', {required: true})} required 
  className="input input-bordered input-warning w-full" />
</label>

<div className="flex gap-6">
  {/* Category */}
  <label className="form-control w-full my-6">
  <div className="label">
    <span className="label-text">Category*</span>
  </div>
  <select defaultValue="default" {...register('category', {required: true})}
      className="select select-warning w-full ">
  <option disabled value="default">Select a Category</option>
  <option value="popular">Popular</option>
  <option value="salad">Salad</option>
  <option value="pizza">Pizza</option>
  <option value="soup">Soup</option>
  <option value="dessert">Dessert</option>
  <option value="drinks">Drinks</option>
</select>
</label>
  {/* Price  */}
  <div>
  <label className="form-control w-full my-6">
  <div className="label">
    <span className="label-text">Price*</span>
  </div>
  <input 
  type="number" 
  placeholder="Price"
  {...register('price', {required: true})} 
  className="input input-bordered input-warning w-full" />
</label>
  </div>
</div>

{/* recipe details */}
<div className="form-control">
    <label className="label-text mb-2">Recipe Details*</label>
  </div>
  <textarea {...register('recipe')} className="textarea textarea-warning w-full" placeholder="Type here"></textarea>
  {/* picture */}
  <div className="form-control w-full my-6">
  <input {...register('image', {required: true})} type="file" className="file-input file-input-bordered file-input-warning w-full max-w-xs" />
  </div>
      <button className="btn btn-warning">Add Item <GiForkKnifeSpoon size={20}/></button>
    </form>
    </div>
 </div>
  );
};

export default AddItems;