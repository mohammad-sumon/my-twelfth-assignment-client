import React from "react";
import { Link } from "react-router-dom";

const MyProducts = () => {
  return (
    <div>
      <h2 className="text-3xl text-center my-5 font-semibold">My Products</h2>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Price</th>
                <th>Status</th>
                <th>Delete</th>
                <th>Advertise</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Window AC</td>
                <td>32000</td>
                <td>Unsold</td>
                <td>
                  <button className="btn btn-sm btn-danger">Delete</button>
                </td>
                <td>
                  <button className="btn btn-sm btn-info">Advertise</button>
                </td>
              </tr>
              <tr>
                <th>2</th>
                <td>Split AC</td>
                <td>55000</td>
                <td>Sold</td>
                <td>
                  <button className="btn btn-sm btn-danger">Delete</button>
                </td>
                <td>
                  <button className="btn btn-sm btn-info">Advertise</button>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="my-5">
            <Link
              to="/dashboard/sellerDashboard/addProduct"
              className="btn btn-sm"
            >
              Go Back to Add Product Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProducts;
