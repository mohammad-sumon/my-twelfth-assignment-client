import React from "react";

const HeroPage = () => {
  return (
    <div className="my-10">
      <h1 className="text-4xl text-sky-400 font-bold my-4 text-center">
        Welcome to AC House
      </h1>
      <hr className="mb-5" />
      <div className="grid grid-cols-2 gap-6">
        <img
          src="https://images.unsplash.com/photo-1590756254933-2873d72a83b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          className="rounded-lg shadow-2xl"
          alt=""
        />
        <div className="mt-40">
          <h2 className="text-sky-400 text-4xl font-semibold">
            Choose Your Desired Product!
          </h2>
          <p className="py-6">
            If you are decided to buy short timed used AC, then AC House will be
            your best choice. Here you can find not only your desired product
            but also real product satisfaction. All of product is guranted, and
            provide good service. You can choose any one of them which is
            fulfill your demand. Happy Shopping.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
