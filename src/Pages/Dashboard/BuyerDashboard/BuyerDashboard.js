import React from "react";
import { Link } from "react-router-dom";

const BuyerDashboard = () => {
  return (
    <div>
      <h2 className="text-2xl">This is buyer dashboard</h2>
      <h3 className="text-xl">My Orders</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Serial No:</th>
              <th>Photo</th>
              <th>Title</th>
              <th>Price: BDT</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>
                <div className="avatar">
                  <div className="w-14 rounded-full">
                    <img src="https://i.ibb.co/5x4gHmb/windowac.jpg" alt="" />
                  </div>
                </div>
              </td>
              <td>Window AC</td>
              <td>30000</td>
              <td>
                <Link to="/dashboard/payment">
                  <button className="btn btn-sm btn-info">Pay</button>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BuyerDashboard;
