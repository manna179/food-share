import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../providers/AuthContext";

const Navbar = () => {
  const { signOutUser, user } = useContext(AuthContext);

  return (
    <div className="navbar sticky items-center top-0 z-40 flex-col md:flex-row text-black bg-red-400 px-5">
      <div className="flex-1">
        <Link to="/" className="btn bg-transparent btn-ghost text-2xl">
          PlateShare
        </Link>
      </div>

      <div className="flex-none items-center">
        <div className="flex mr-8 items-center list-none gap-2 ">
          <li>
            <NavLink to="/" className="  text-black">
              {" "}
              Home
            </NavLink>
          </li>|
          <li>
            <NavLink
              to="/availableFoods"
              className=" text-black"
            >
              Available 
            </NavLink>
          </li>|
          <li>
            <NavLink to="/allFoods" className=" text-black">
             Foods
            </NavLink>
          </li>|
          <li>
            <NavLink to='/extraSection' className=" text-black">About us</NavLink>
          </li>
        </div>
        <div className="flex list-none">
          <div>
            {user ? (
              <>
                <div className="flex justify-center items-center">
                  
                  <div className="dropdown dropdown-end">
                    <div
                      tabIndex={0}
                      role="button"
                      className=" btn-circle avatar"
                    >
                      <div className=" rounded-full">
                        <img
                          className=" h-12 w-12 bg-cover "
                          src={user?.photoURL}
                          alt={user?.name}
                        />
                      </div>
                    </div>
                    <ul
                      tabIndex={0}
                      className="menu menu-sm dropdown-content bg-red-500  text-black rounded-box z-[12] mt-3 w-52 p-2 shadow"
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
                      <li>
                    <h2
                      className="mr-8  text-black"
                      onClick={signOutUser}
                    >
                      logout
                    </h2>
                  </li>
                    </ul>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="flex justify-center items-center gap-2">
                  {" "}
                  <li>
                    <NavLink to="/login">Login</NavLink>
                  </li>
                  /
                  <li>
                    {" "}
                    <NavLink to="/register">Register</NavLink>
                  </li>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
