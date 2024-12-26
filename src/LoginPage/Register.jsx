import { useContext, useState } from "react";

import AuthContext from "../providers/AuthContext";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import Lottie from "lottie-react";
import lottieRegister from '../../src/lottie/register.json'

const Register = () => {
  const navigate = useNavigate()
  const [error, setError] = useState("");
  const { setUser, createUser,singInWithGoogle } = useContext(AuthContext);

  const handleRegisterSubmit =async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    // const formdata = { name, password, email, photo };

    // if (!/[a-z]/.test(password)) {
    //   setError("password should have one lowercase");
    //   return;
    // }
    // if (!/[A-Z]/.test(password)) {
    //   setError("password should have one uppercase");
    //   return;
    // }
    // if (password.length < 6) {
    //   setError("password should be 6 character");
    //   return;
    // }
    createUser(email, password)
      .then((res) => {
        setUser(res.user),
          updateProfile(res.user, {
            displayName: name,
            photoURL: photo,
          }).then(()=>{
            setUser({
              ...user,
              displayName: name,
              photoURL: photo,
            });
            navigate('/')
          })

      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
         
          <Lottie className="w-[500px]" animationData={lottieRegister}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-3xl text-center font-bold">Register now!</h1>
          <form onSubmit={handleRegisterSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
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
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                name="photo"
                type="url"
                placeholder="PhotoUrl"
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
              <button className="btn btn-primary">Register</button>
            </div>

            <div>
              Already have an account?{" "}
              <Link to="/login" className="btn btn-link">
                Login
              </Link>
            </div>
          </form>
          <Link onClick={singInWithGoogle} className="btn ">Google Login</Link>
        </div>
      </div>

      <div>{error && <p className="text-red-500">{error.message}</p>}</div>
    </div>
  );
};

export default Register;
