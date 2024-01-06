import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import  LOGO  from "../Assets/logo.jpg";
const Header =()=>{
  const [btnNameReact , setBtnNameReact] = useState("Login")
   const Status = useOnlineStatus();
  return(
      <div className='flex bg-pink-300 shadow-md justify-between'>
            <div className='image'>
              <img className='w-28 h-28' src={LOGO}/>
            </div>
            <div className='flex '>
             <ul className="flex flex-wrap m-auto px-4">
              <li className="px-2 font-bold block">Online Status :{Status ? "🌳" :"🍅"}</li>
             <li className="px-2 font-bold"><Link to="/">Home</Link></li>
             <li className="px-2 font-bold"><Link to="/about">About Us</Link></li>
             <li className="px-2 font-bold"> <Link to="/contact">Contact</Link></li>
              
              <li className="px-2 font-bold">Cart</li>
              <li
             className="px-2 font-bold cursor-pointer"
              onClick={()=>{
                btnNameReact === 'Login'?
                setBtnNameReact("Logout")
                :setBtnNameReact("Login")
              }}
              >{btnNameReact}</li>

             </ul>
            </div>
      </div>
    )
  }
  export default Header;