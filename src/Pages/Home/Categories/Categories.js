import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const [Categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/resaleProductCategories")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCategories(data);
      });
  }, []);

  return (
    <div className="text-center my-10">
      <h2 className="text-3xl text-sky-400 font-bold my-5">All Categories</h2>
      <hr className="mb-5" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
        {Categories.map((category) => (
          <div
            key={category._id}
            className="card card-compact w-full bg-base-100 shadow-xl "
          >
            <figure>
              <img src={category.image} className="w-full h-96" alt="" />
            </figure>
            <div className="card-body">
              <div className="w-full justify-center text-white">
                <Link
                  to={`category/${category.categories}`}
                  className="btn btn-info"
                >
                  {category.categories}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
