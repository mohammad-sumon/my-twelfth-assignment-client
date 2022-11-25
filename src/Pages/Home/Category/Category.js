import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../../contexts/AuthProvider";
import Spinner from "../../Shared/Spinner/Spinner";

const Category = () => {
  const [booked, setBooked] = useState(null);
  const { user } = useContext(AuthContext);
  console.log(user);
  const data = useLoaderData();
  console.log(data[0].categories);

  const handleModalBtn = (id) => {
    console.log("clicked", id);
  };

  const handleModalSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const username = form.username.value;
    const useremail = form.useremail.value;
    const itemname = form.itemname.value;
    const resaleprice = form.resaleprice.value;
    const phone = form.phone.value;
    const location = form.location.value;

    const buyerInfo = {
      username,
      useremail,
      itemname,
      resaleprice,
      phone,
      location,
    };
    console.log("form clicked", buyerInfo);

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(buyerInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          // setTreatment(null);
          form.reset();
          toast.success("Item is booked now");
        } else {
          toast.error(data.message);
        }
      });

    // toast.success("Item is booked now");
    // form.reset();
    // setBooked(null);
  };

  return (
    <div>
      <h2 className="text-3xl my-5 text-center">
        This is the category of{" "}
        <span className="font-bold text-sky-500">{data[0]?.categories}</span>
      </h2>
      <hr className="w-full mb-6" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.map((dt) => (
          <div key={dt._id} className="card w-full bg-base-100 shadow-xl">
            <figure>
              <img className="w-96 h-96" src={dt?.photo} alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Brand Name: {dt?.name}</h2>
              <p>Location: {dt?.location}</p>
              <p>Resale Price: BDT: {dt?.resalePrice}</p>
              <p>Original Price: BDT: {dt?.originalPrice}</p>
              <p>Years of Use: {dt?.UsesYear}</p>
              <p>Seller Name: {dt?.sellerName}</p>
              <div className="card-actions justify-center ">
                <label
                  htmlFor="booking-modal"
                  className="btn bg-sky-400 hover:bg-sky-500 border-none"
                  onClick={() => setBooked(dt)}
                >
                  Book Now
                </label>

                {/* book now modal body */}
                <form onSubmit={handleModalSubmit}>
                  <input
                    type="checkbox"
                    id="booking-modal"
                    className="modal-toggle"
                  />
                  <div className="modal">
                    <div className="modal-box relative">
                      <label
                        htmlFor="booking-modal"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                      >
                        ✕
                      </label>

                      <h3 className="text-lg font-bold mb-4 text-center">
                        Brand Name: {dt?.name}
                      </h3>
                      <label htmlFor="name">Name</label>
                      <input
                        name="username"
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered w-full mb-4"
                        defaultValue={user?.displayName}
                        disabled
                      />
                      <label htmlFor="name">Email</label>
                      <input
                        name="useremail"
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered w-full mb-4"
                        defaultValue={user?.email}
                        disabled
                      />
                      <label htmlFor="name">Item Name</label>
                      <input
                        name="itemname"
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered w-full mb-4"
                        defaultValue={dt?.name}
                        disabled
                      />
                      <label htmlFor="name">Resale Price</label>
                      <input
                        name="resaleprice"
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered w-full mb-4"
                        defaultValue={dt?.resalePrice}
                        disabled
                      />
                      <label htmlFor="name">Phone</label>
                      <input
                        name="phone"
                        type="text"
                        placeholder="Phone Number"
                        className="input input-bordered w-full mb-4"
                      />
                      <label htmlFor="name">Location</label>
                      <input
                        name="location"
                        type="text"
                        placeholder="Meeting Location"
                        className="input input-bordered w-full mb-4"
                      />

                      <button
                        type="submit"
                        className="btn bg-sky-400 w-full border-none hover:bg-sky-500"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
