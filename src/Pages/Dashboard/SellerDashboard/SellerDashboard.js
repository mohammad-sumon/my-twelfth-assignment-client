import React from "react";
import { Link } from "react-router-dom";

const SellerDashboard = () => {
  return (
    <div>
      <h2 className="text-3xl">This is Seller dashboard</h2>
      <div className="bg-sky-100 p-4 rounded-md my-4 text-center">
        <Link
          to="/dashboard/sellerDashboard/addProduct"
          className="bg-blue-300 hover:bg-blue-400 font-bold p-2 mr-6 rounded-md"
        >
          Add Product
        </Link>
        <Link
          to="/dashboard/sellerDashboard/myProducts"
          className="bg-blue-300 hover:bg-blue-400 font-bold p-2 mr-6 rounded-md"
        >
          My Products
        </Link>
      </div>
    </div>
  );
};

export default SellerDashboard;
