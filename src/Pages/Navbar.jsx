import { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../providers/AuthContext";

const Navbar = () => {
  const { signOutUser, user } = useContext(AuthContext);

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">PlateShare</a>
      </div>

      <div className="flex-none">
        <div className="flex mr-8 list-none gap-2 ">
          <li>
            <NavLink to="/" className='btn'> Home</NavLink>
          </li>
          <li>
            <NavLink to="/availableFoods"  className='btn'>Available Foods</NavLink>
          </li>
        </div>
        <div className="flex list-none">
        
          <div>
            {user ? (
              <>
               <div className="flex justify-center items-center">
               <h2 className="mr-8 btn " onClick={signOutUser}>logout</h2>
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img
                        alt={user.name}
                        src={user?.photoUrl}
                      />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
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
               <div className="flex justify-center items-center"> <li>
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
