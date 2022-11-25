import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddProduct = () => {
  const navigate = useNavigate();

  const submitAddProduct = (event) => {
    event.preventDefault();
    const form = event.target;

    const productname = form.productname.value;
    const originalprice = form.originalprice.value;
    const resaleprice = form.resaleprice.value;
    const condition = form.condition.value;
    const mobile = form.mobile.value;
    const location = form.location.value;
    const category = form.category.value;
    const photo = form.photo.value;
    const usedyear = form.usedyear.value;

    const addProducts = {
      productname,
      originalprice,
      resaleprice,
      condition,
      mobile,
      location,
      category,
      photo,
      usedyear,
    };
    console.log(addProducts);
    form.reset("");
    toast.success("Added a product successfully");
    navigate("/dashboard/sellerDashboard/myProducts");
  };
  return (
    <div className="my-10">
      <div className="w-[500px] mx-auto rounded-md bg-blue-200 flex justify-center items-center">
        <form onSubmit={submitAddProduct}>
          <h2 className="text-3xl my-3 font-semibold">Please add a product</h2>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <input
              type="text"
              name="productname"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Original Price</span>
            </label>
            <input
              type="text"
              name="originalprice"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Resale Price</span>
            </label>
            <input
              type="text"
              name="resaleprice"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Condition</span>
            </label>
            <input
              type="text"
              name="condition"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Mobile Number</span>
            </label>
            <input
              type="text"
              name="mobile"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <input
              type="text"
              name="location"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <input
              type="text"
              name="category"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Years of Used</span>
            </label>
            <input
              type="text"
              name="usedyear"
              className="input input-bordered w-full"
              required
            />
          </div>

          <input
            className="btn border-none bg-sky-400 hover:bg-sky-500 w-full my-5"
            value="Submit"
            type="submit"
          />
          <div></div>
        </form>
      </div>
      <div className="my-5">
        <Link to="/dashboard/sellerDashboard/myProducts" className="btn btn-sm">
          Wanna Go to My Products Page?
        </Link>
      </div>
    </div>
  );
};

export default AddProduct;
