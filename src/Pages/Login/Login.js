import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Login = () => {
  const [loginError, setLoginError] = useState("");
  const { signIn, googleSingIn } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => setLoginError(error));
  };

  const googleLogin = () => {
    googleSingIn(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="h-[800px] flex justify-center items-center">
        <div className="bg-base-200 rounded-md w-96 p-8">
          <h2 className="text-xl text-center">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email</span>
              </label>

              <input
                type="email"
                name="email"
                className="input input-bordered w-full max-w-xs"
                required
              />
              {/* {errors.email && (
                <p className="text-red-600">{errors.email?.message}</p>
              )} */}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Password</span>
              </label>

              <input
                type="password"
                name="password"
                className="input input-bordered w-full max-w-xs"
                required
              />
              {/* {errors.password && (
                <p className="text-red-600">{errors.password?.message}</p>
              )} */}
            </div>
            <input
              className="btn border-none bg-sky-400 hover:bg-sky-500 w-full my-5"
              value="Login"
              type="submit"
            />
            <div>
              {loginError && (
                <p className="text-red-600">{loginError.message}</p>
              )}
            </div>
          </form>
          <p>
            Do not have an account?{" "}
            <Link className="text-sky-300" to="/signup">
              Create new account
            </Link>
          </p>
          <div className="divider">OR</div>
          <button
            onClick={googleLogin}
            className="btn btn-outline hover:bg-sky-400 border hover:border-none w-full"
          >
            CONTINUE WITH GOOGLE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
