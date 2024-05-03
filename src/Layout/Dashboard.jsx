import { NavLink, Outlet } from "react-router-dom";
import {  FaUserCircle  } from "react-icons/fa";
import {FaCalendarCheck, FaRegCreditCard, FaCalendarPlus } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { IoHome, IoFastFood } from "react-icons/io5";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import { MdOutlineManageSearch } from "react-icons/md";
import { HiUsers } from "react-icons/hi2";

import useCart from "../hooks/useCart";

import { TiThMenu } from "react-icons/ti";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();
  const [isAdmin] = useAdmin();

  return (
        <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center ">
    <label htmlFor="my-drawer-2" className="btn btn-outline drawer-button lg:hidden"><TiThMenu size={22}></TiThMenu>
  </label>
   <Outlet></Outlet>
    
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-[#D1A054] text-base-content">

      {

isAdmin ? <>
 <li className="font-bold uppercase"><NavLink to="/dashboard/profile"><FaUserCircle size={22} />Admin</NavLink></li> 
      <li className="font-bold uppercase"><NavLink to="/dashboard/additems"><IoIosAddCircle size={22} />Add Items</NavLink></li>
     <li className="font-bold uppercase"><NavLink to="/dashboard/history"><MdOutlineManageSearch size={24} />Manage Items</NavLink></li>
      <li className="font-bold uppercase"><NavLink to="/dashboard/history"><FaCalendarCheck size={21} />Manage Reservations</NavLink></li> 
      <li className="font-bold uppercase"><NavLink to="/dashboard/allusers"><HiUsers size={24} />All Users</NavLink></li>
     
</> 
    :
 <>

<li className="font-bold uppercase"><NavLink to="/dashboard/profile"><FaUserCircle size={22} />Profile</NavLink></li>
       <li className="font-bold uppercase"><NavLink to="/dashboard/reservation"><FaCalendarPlus size={21} />Reservations</NavLink></li>
      <li className="font-bold uppercase"><NavLink to="/dashboard/history"><FaRegCreditCard size={20} />Payment History</NavLink></li> 
      <li className="font-bold uppercase">
        <NavLink to="/dashboard/mycart"><TiShoppingCart size={24} />My Cart
        <span className="badge badge-warning">+{cart?.length || 0}</span>
        </NavLink>
      </li>
</>
      }

    
    
      <div className="divider"></div>

      <li className="font-bold uppercase"><NavLink to="/"><IoHome size={20} />Home</NavLink></li>
      <li className="font-bold uppercase"><NavLink to="/menu"><MdOutlineRestaurantMenu size={24} />Menu</NavLink></li>
  <li className="font-bold uppercase"><NavLink to="/order/salad"><IoFastFood size={22} />Order Food</NavLink></li>


    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;