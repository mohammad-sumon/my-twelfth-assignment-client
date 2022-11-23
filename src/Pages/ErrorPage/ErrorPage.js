import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="">
      <div>
        <img
          src={
            "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
          }
          alt=""
          className="error-logo w-1/2 rounded-md mt-20 mx-auto"
        />
      </div>
      <div className="text-center">
        <p className="text-4xl font-semibold mt-4 mb-8">
          <span className="text-red-500">Sorry,</span> we couldn't find this
          page.
        </p>
        <Link
          to="/"
          className="px-8 py-3 font-semibold rounded bg-sky-200 text-gray-900"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
