import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Header = () => {
  const  {user, logOut} = use(AuthContext)
  const handleLogout =()=>{
    logOut()
    .then(() => {
      alert("you logged out successfully")
    }).catch((error) => {
      
      console.log(error);
    }); 
  }

  const link =<>
  <NavLink to="/"  className='mr-3 '>Home</NavLink>
  <NavLink to="/Queries"  className='mr-3 '>Queries</NavLink>
  <NavLink to="/allRecommends"  className='mr-3 '>AllRecommends</NavLink>
  
  {
    user && <>
      <NavLink to="/addproduct"  className='mr-3 '>AddQueries</NavLink>
  <NavLink to="/MyProduct"  className='mr-3 '>My-Queries</NavLink>
  <NavLink to="/myRecommend"  className='mr-3 '>My-Recommendation</NavLink>
  <NavLink to="/RecommendsForMe"  className='mr-3 '>RecommendsForMe</NavLink>
     </>
  }
  
  </>
  
  return (
    <div>
      <div className="navbar fixed top-0 left-0 w-full z-50   bg-gradient-to-r from-indigo-50 to-purple-100 text-black shadow-sm lg:px-15 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 lg:p-2 shadow">
        {link}
      </ul>
    </div>
    <img className='w-15' src={'https://static.vecteezy.com/system/resources/previews/026/711/273/non_2x/recommended-stamp-recommendation-icon-recommendation-rubber-stamp-round-band-label-emblem-seal-sticker-logo-illustration-with-grunge-texture-vector.jpg'} alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {link}
    </ul>
  </div>
  <div className="navbar-end">
    {/* <NavLink to='/login'>Login</NavLink>
    <NavLink to='/register'>Register</NavLink> */}

    {
            user ? (<>
                <button onClick={handleLogout} className='btn bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 ml-3 '>LogOut</button>
            </>) : (<><Link to='login' className="btn bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 mr-3 ">Login</Link>
              <Link to="/register" className="btn bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 ">Register</Link></>)
          }
  </div>
</div>
    </div>
  );
};

export default Header;