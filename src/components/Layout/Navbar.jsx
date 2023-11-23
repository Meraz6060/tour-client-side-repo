import { Link, NavLink } from "react-router-dom";
import UseAuth from "../../hooks/UseAuth";
import Swal from "sweetalert2";
import logImg from '../../assets/loginicon.jpg';
import './../../App.css';

const Navbar = () => {
  const {user, logout} =UseAuth();

  const handleLogOut = () => {
    logout()
    .then(()=>{
        Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Log Out Successfull',
            showConfirmButton: false,
            timer: 1500
    });
  })
    .catch(error =>{
        console.error(error);
    })
  
  }
  
  return (
    <div className="navbar fixed z-10 bg-opacity-30 max-w-[1300px] max-h-[10px]   bg-black text-white">
      <div className="navbar  ">
        <div className="flex-none lg:hidden">
          <label
            htmlFor="my-drawer-3"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div className="aspect-square  w-16 relative overflow-hidden  rounded-xl" data-te-ripple-init data-te-ripple-color="light">
        <img className=" object-cover 
                h-full 
                w-full 
                group-hover:scale-110 
                transition" src="https://i.ibb.co/bPRBYPv/10f1f391-35f0-41ad-a417-c318638f6226.jpg"/>
        </div>
        <div className="flex-1 px-2 mx-2 font-bold text-3xl"><span className="text-5xl text-[#d5294d]">B</span>aangldesh <span className="text-5xl text-[#15932e]">T</span>ravel</div>
        <div>
          
        </div>
        <div className="flex-none hidden lg:block">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "btn btn-primary btn-sm" : "btn btn-ghost btn-sm"
            }
          >
            {" "}
            Home
          </NavLink>

          <NavLink
            to="/booklist"
            className={({ isActive }) =>
              isActive ? "btn btn-primary btn-sm" : "btn btn-ghost btn-sm"
            }
          >
            {" "}
            My Booking
          </NavLink>
          <NavLink
            to="/allservices"
            className={({ isActive }) =>
              isActive ? "btn btn-primary btn-sm" : "btn btn-ghost btn-sm"
            }
          >
            {" "}
            All Service
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "btn btn-primary btn-sm" : "btn btn-ghost btn-sm"
            }
          >
            {" "}
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "btn btn-primary btn-sm" : "btn btn-ghost btn-sm"
            }
          >
            {" "}
            Contact
          </NavLink>
  

          <a
            className={({ isActive }) =>
              isActive ? "btn btn-primary btn-sm" : "btn btn-ghost btn-sm"
            }
          >
              <div className="dropdown ">
                <button className="dropbtn btn-ghost">Destination</button>
                <div className="dropdown-content">
                  <a><Link to="/destination/Dhaka">Dhaka</Link></a>
                  <a ><Link to="/destination/khulna">khulna</Link></a>
                  <a ><Link to="/destination/Sylhet">Sylhet</Link></a>
                  <a ><Link to="/destination/Rajshahi">Rajshahi</Link></a>
                  <a ><Link to="/destination/Barisal">Barisal</Link></a>
                  <a ><Link to="/destination/Chittagong">Chittagong</Link></a>
                </div>
              </div>
      </a>




        </div>
        <div>
          {user?.email ? (

          <div className="dropdown dropdown-end">
            
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user && user.photoURL ? user.photoURL : logImg} alt="NO"/>
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-1 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-300 rounded-box  text-black"
            >
              {/* <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li> */}
              <li>
              <span className="font-semibold w-full ">{user.displayName}</span>
              </li>
              <li>
                <a className="font-bold" onClick={handleLogOut}>Logout</a>
              </li>
            </ul>
            </div>
                ):(
             <NavLink
             to="/login"
             className={({ isActive }) =>
               isActive ? "btn btn-primary btn-sm" : "btn btn-ghost btn-sm"
             }
           >
             {" "}
             Login
           </NavLink>
          )}
        </div>
      </div>
 
    </div>
  );
};

export default Navbar;
