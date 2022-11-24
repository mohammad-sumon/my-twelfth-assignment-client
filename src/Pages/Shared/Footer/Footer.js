import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-sky-100 text-black">
      <footer className="footer mt-6 p-10 bg-sky-100 text-black">
        <div>
          <span className="footer-title text-xl">Services</span>
          <Link className="link link-hover">Repair</Link>
          <Link className="link link-hover">Marketing</Link>
          <Link className="link link-hover">Advertisement</Link>
        </div>
        <div>
          <span className="footer-title text-xl">Company</span>
          <Link className="link link-hover">About us</Link>
          <Link className="link link-hover">Contact</Link>
          <Link className="link link-hover">Workshop</Link>
        </div>
        <div>
          <span className="footer-title text-xl">Legal</span>
          <Link className="link link-hover">Terms of use</Link>
          <Link className="link link-hover">Privacy policy</Link>
        </div>
      </footer>
      <div className="pb-6 text-center">
        <p className="text-xl font-bold">
          Copyright © 2022 - All right reserved by Mohammad Sumon
        </p>
      </div>
    </div>
  );
};

export default Footer;
