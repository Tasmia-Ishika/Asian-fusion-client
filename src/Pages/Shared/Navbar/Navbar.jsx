import { Link } from "react-router-dom";
import { GiCirclingFish } from 'react-icons/gi';
import { TiShoppingCart } from "react-icons/ti";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/Authprovider";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";


const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [cart] = useCart();
  const handleLogOut = () => {
    logOut()
    .then(() => {})
    .catch(error => console.log(error));
  }
  
  const navOptions = <>
  <li><Link  to="/">Home</Link></li>
  <li><Link  to="/menu">Menu</Link></li>
  <li><Link to="/order/salad">Order Food</Link></li>
  { 
  user && isAdmin && <li><Link to="/dashboard/adminHome">Dashboard</Link></li>
  }
   { 
  user && !isAdmin && <li><Link to="/dashboard/userHome">Dashboard</Link></li>
  }
  {/* <li><Link to="/Dashboard/mycart">Dashboard</Link></li> */}
        {
            user ? <>
          
               <li> <button onClick={handleLogOut} className="btn btn-ghost btn-xs mt-1">Sign out</button></li>
            </> : <>
                <li><Link to="/login">Sign in</Link></li>
            </>
        }
        <li>
      <Link to="/dashboard/mycart">
      <button className="btn">
        <TiShoppingCart size={30} color="orange"/>
  <div className="badge badge-warning">+{cart?.length || 0}</div>
</button>

      </Link>
    </li>
 </>
    return (
        <>
  <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white font-bold">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 text-black shadow bg-base-100 rounded-box w-52">
        {navOptions}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-2xl"><GiCirclingFish size={43}color="orange"/>Asian Fusion Bistro</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navOptions}
    </ul>
  </div>
  <div className="navbar-end">
     
  </div>
</div>
        </>
    );
};

export default Navbar;