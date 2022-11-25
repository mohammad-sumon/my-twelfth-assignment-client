import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const BuyerDashboard = () => {
  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  return (
    <div>
      <h2 className="text-2xl">This is buyer dashboard</h2>
      <h3 className="text-xl">My Orders</h3>
      <h3 className="text-xl">{bookings.length}</h3>
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
            {bookings &&
              bookings.map((booking, i) => (
                <tr>
                  <th>{i + 1}</th>
                  <td>
                    <div className="avatar">
                      <div className="w-14 rounded-full">
                        <img src={booking?.photo} alt="" />
                      </div>
                    </div>
                  </td>
                  <td>{booking?.itemname}</td>
                  <td>{booking?.resaleprice}</td>
                  <td>
                    <Link to="/dashboard/payment">
                      <button className="btn btn-sm btn-info">Pay</button>
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BuyerDashboard;
