import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import { RiDeleteBin5Fill } from "react-icons/ri";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyCart = () => {
  const [cart, refetch] = useCart();
  // const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  console.log(cart);
  // how does reduce work!!!
  const total = cart.reduce((sum, item) => item.price + sum, 0);
  
  const handleDelete = item => {
    Swal.fire({
        title: 'Do you want to remove this item from cart?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, remove it!'
    }).then((result) => {
        if (result.isConfirmed) {
    fetch(`http://localhost:5000/carts/${item._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount> 0) {
                        refetch();
                        Swal.fire(
                            'Removed!',
                            'The item has been removed.',
                            'success'
                        )
                    }
                })
        }
    })
}

    return (
        <div className="w-full m-10">
            <Helmet>
                <title>Asian Bistro | Cart</title>
            </Helmet>
          <div className=" font-bold h-[60px] flex justify-evenly items-center gap-7 m-4">
            <h1 className="text-2xl">Total Item = {cart.length}</h1>
            <h1 className="text-2xl">Total Price =  {total} BDT</h1>
            { cart.length ? 
              <Link to="/dashboard/payment">
              <button className="btn btn-warning btn-outline btn-sm">PAY</button>
              </Link> :
               <button disabled className="btn btn-warning btn-outline btn-sm">PAY</button>
            }
          </div>
          {/* Table -------->*/}
          <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Food</th>
        <th>Item Name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        cart.map((item,index) =>   <tr
        key={item._id}
        >
          <td>
            {index + 1}
          </td>
          <td>
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src={item.image} alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
          </td>
          <td className="font-bold">
           {item.name}</td>
          <td className="text-amber-600 font-extrabold ">BDT {item.price}</td>
          <td>
          <button onClick={() => handleDelete(item)}  className="btn  bg-red-600  text-white"><RiDeleteBin5Fill size={18}/></button>
          </td>
        </tr>)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyCart;