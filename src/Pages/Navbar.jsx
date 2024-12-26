import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../providers/AuthContext";

const Navbar = () => {
  const { signOutUser, user } = useContext(AuthContext);

  return (
    <div className="navbar flex-col md:flex-row bg-red-100">
      <div className="flex-1">
        <Link to='/' className="btn bg-transparent btn-ghost text-2xl">PlateShare</Link>
      </div>

      <div className="flex-none">
        <div className="flex mr-8 list-none gap-2 ">
          <li>
            <NavLink to="/" className='btn bg-transparent'> Home</NavLink>
          </li>
          <li>
            <NavLink to="/availableFoods"  className='btn bg-transparent'>Available Foods</NavLink>
          </li>
          <li>
            <NavLink to="/allFoods"  className='btn bg-transparent'>All Foods</NavLink>
          </li>
        </div>
        <div className="flex list-none">
        
          <div>
            {user ? (
              <>
               <div className="flex justify-center items-center">
               <h2 className="mr-8 btn bg-transparent" onClick={signOutUser}>logout</h2>
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10  rounded-full">
                      <img
                      
                      className=" h-12 w-12 bg-cover "
                      src={user?.photoUrl}
                      alt={user?.name}
                      />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[12] mt-3 w-52 p-2 shadow"
                  >
                    <li>
                      <NavLink to="/addsFood">Add Food</NavLink>
                    </li>
                    <li>
                      <NavLink to="/manageFood">Manage My Foods</NavLink>
                    </li>
                    <li>
                      <NavLink to="/myFoodRequest">My Food Request</NavLink>
                    </li>
                    <h3></h3>
                  </ul>
                </div>
               </div>
              </>
            ) : (
              <>
               <div className="flex justify-center items-center gap-2"> <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
                /
                <li>
                  {" "}
                  <NavLink to="/register">Register</NavLink>
                </li></div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
