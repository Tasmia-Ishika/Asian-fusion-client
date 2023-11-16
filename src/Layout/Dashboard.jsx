import { NavLink, Outlet } from "react-router-dom";
import { FaRegCreditCard, FaCalendarCheck, FaUserCircle  } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { IoHome, IoFastFood } from "react-icons/io5";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import useCart from "../hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart();
    return (
        <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
   <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-[#D1A054] text-base-content">
      {/* Sidebar content here */}
      <li className="font-bold uppercase"><NavLink to="/dashboard/profile"><FaUserCircle size={22} />Profile</NavLink></li>
      <li className="font-bold uppercase"><NavLink to="/dashboard/reservation"><FaCalendarCheck size={20} />Reservations</NavLink></li>
      <li className="font-bold uppercase"><NavLink to="/dashboard/history"><FaRegCreditCard size={20} />Payment History</NavLink></li>
      <li className="font-bold uppercase">
        <NavLink to="/dashboard/mycart"><TiShoppingCart size={24} />My Cart
        <span className="badge badge-warning">+{cart?.length || 0}</span>
        </NavLink>
      </li>
      
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