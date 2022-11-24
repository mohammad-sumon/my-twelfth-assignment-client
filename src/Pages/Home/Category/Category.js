import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Spinner from "../../Shared/Spinner/Spinner";

const Category = () => {
  const data = useLoaderData();
  console.log(data[0].categories);

  return (
    <div>
      <h2 className="text-3xl my-5 text-center">
        This is the category of{" "}
        <span className="font-bold text-sky-500">{data[0].categories}</span>
      </h2>
      <hr className="w-full mb-6" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.map((dt) => (
          <div key={dt._id} className="card w-full bg-base-100 shadow-xl">
            <figure>
              <img className="w-96 h-96" src={dt.photo} alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Brand Name: {dt.name}</h2>
              <p>Location: {dt.location}</p>
              <p>Resale Price: BDT: {dt.resalePrice}</p>
              <p>Original Price: BDT: {dt.originalPrice}</p>
              <p>Years of Use: {dt.UsesYear}</p>
              <p>Seller Name: {dt.sellerName}</p>
              <div className="card-actions justify-center ">
                <button className="btn bg-sky-400 hover:bg-sky-500 border-none">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
        {/* {data.map((dt) => (
          <div key={dt._id} className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={data.photo} alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{data.brandName}</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <p>{data.location}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Book Now</button>
              </div>
            </div>
          </div>
        ))} */}
        {/* <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Category;
