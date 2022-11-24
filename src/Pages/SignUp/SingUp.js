import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/AuthProvider";

const SingUp = () => {
  const [signUpError, setSignUpError] = useState("");
  const { createUser, googleSingIn } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();

  const handleSignUp = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const role = form.role.value;
    const email = form.email.value;
    const password = form.password.value;

    const signUpUser = {
      name,
      role,
      email,
      password,
    };
    console.log(signUpUser);

    createUser(signUpUser.email, signUpUser.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        toast.success("User Created Successfully.");
        saveUser(name, email);
      })
      .catch((error) => setSignUpError(error));
  };

  const saveUser = (name, email) => {
    const user = { name, email };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("save user", data);
      });
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
          <h2 className="text-xl text-center">Sign Up</h2>
          <form onSubmit={handleSignUp}>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Name</span>
              </label>

              <input
                type="text"
                name="name"
                className="input input-bordered w-full max-w-xs"
                required
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Select Who You are?</span>
              </label>
              <span className="label-text">
                <input
                  className="mr-5"
                  type="radio"
                  id="buyer"
                  value="Buyer"
                  name="role"
                  defaultChecked
                />
                <label defaultValue="buyer" htmlFor="buyer">
                  Buyer
                </label>
              </span>
              <span className="label-text">
                <input
                  className="mr-5"
                  type="radio"
                  id="seller"
                  value="Seller"
                  name="role"
                />
                <label htmlFor="seller">Seller</label>
              </span>
            </div>

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
            </div>
            <input
              className="btn border-none bg-sky-400 hover:bg-sky-500 w-full my-5"
              value="Sign Up"
              type="submit"
            />
            <div>
              {signUpError && (
                <p className="text-red-600">{signUpError.message}</p>
              )}
            </div>
          </form>
          <p>
            Already have an account?{" "}
            <Link className="text-sky-300" to="/login">
              Login from here
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

export default SingUp;
