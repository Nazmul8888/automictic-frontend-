import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const NavBar = () => {

  const [loadedData, setLoadedData] = useState([]);

  useEffect(() => {
    const dataFromLocalStorage = JSON.parse(localStorage.getItem('items'));

    if (dataFromLocalStorage) {
      setLoadedData(dataFromLocalStorage);
    }

  }, []);


  const navLink = <>

    <li className="font-bold text-white"><NavLink to='/'>Home</NavLink></li>
    <li className="font-bold text-white"><NavLink to='/cart'>MyCart</NavLink></li>
    <li className="font-bold text-white"><NavLink to='/addProduct'>AddProduct</NavLink></li>
    {/* <li className="font-bold text-white"><NavLink to='/product'>Product</NavLink></li> */}

    <li className="font-bold text-white"><NavLink to='/login'>Login</NavLink></li>
    <li className="font-bold text-white"><NavLink to='/register'>Register</NavLink></li>
  </>
  return (
    <div className="navbar bg-pink-600">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLink}

          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">CARSTAR</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLink}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Login</a>
      </div>

    </div>
  );
};

export default NavBar;