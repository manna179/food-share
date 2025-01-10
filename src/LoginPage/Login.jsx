import { useContext } from "react";
import AuthContext from "../providers/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import loginLottie from '../../src/lottie/login.json'
import { IoHome } from "react-icons/io5";
import { RiArrowGoBackLine } from "react-icons/ri";

const Login = () => {
  const navigate = useNavigate();
  const { singInUser, singInWithGoogle } = useContext(AuthContext);
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    singInUser(email, password)
      .then((result) => {
        console.log("sign in", result.user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignInWithGoogle=()=>{
    singInWithGoogle()
    .then(res=>{
      navigate('/')
    }).catch(err=>{
      console.log(err);
    })

  }

  return (
    <div className="hero bg-blue-950 rounded-lg min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie className="" animationData={loginLottie}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSignIn} className="card-body">
            <h1 className="text-5xl font-bold ">Login now!</h1>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-red-500 hover:bg-red-400 text-gray-200">Login</button>
            </div>
            <div className="text-center">
              Already have an account?{" "}
              <Link to="/register" className="btn text-red-500 btn-link">
                Register 
              </Link>
            </div>
            <Link>
            {" "}
            <button
              onClick={handleSignInWithGoogle}
              className="btn w-full hover:bg-red-400   bg-red-500 mb-3 mt-3"
            >
              Google Login
            </button>
          </Link>
          <Link to='/' className="flex justify-end"><div className="flex items-center gap-2 text-red-500"> <RiArrowGoBackLine /> <IoHome /></div></Link>
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default Login;
