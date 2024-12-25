import { useContext } from "react";
import AuthContext from "../providers/AuthContext";
import { Link, useNavigate } from "react-router-dom";

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

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSignIn} className="card-body">
            <h1 className="text-5xl font-bold mb-3">Login now!</h1>

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
              <button className="btn bg-red-400 text-gray-200">Login</button>
            </div>
            <div>
              Already have an account?{" "}
              <Link to="/register" className="btn btn-link">
                Register
              </Link>
            </div>
          </form>
          <Link>
            {" "}
            <button
              onClick={singInWithGoogle}
              className="btn w-full hover:bg-green-200 bg-red-400 mb-3 mt-3"
            >
              Google Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
