import React from "react";
import { Link } from "react-router-dom";

const SingUp = () => {
  return (
    <div>
      <div className="h-[800px] flex justify-center items-center">
        <div className="bg-base-200 rounded-md w-96 p-8">
          <h2 className="text-xl text-center">Sign Up</h2>
          <form>
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
              {/* {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )} */}
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
              value="Sign Up"
              type="submit"
            />
            <div>
              {/* {loginError && <p className="text-red-600">{loginError}</p>} */}
            </div>
          </form>
          <p>
            Already have an account?{" "}
            <Link className="text-sky-300" to="/login">
              Login from here
            </Link>
          </p>
          <div className="divider">OR</div>
          <button className="btn btn-outline hover:bg-sky-400 border hover:border-none w-full">
            CONTINUE WITH GOOGLE
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingUp;