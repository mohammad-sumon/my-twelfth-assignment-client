import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer mt-6 p-10 bg-base-300 text-base-content text-sm">
      <div>
        <span className="footer-title text-sky-400">Services</span>
        <Link className="link link-hover">Repair</Link>
        <Link className="link link-hover">Marketing</Link>
        <Link className="link link-hover">Advertisement</Link>
      </div>
      <div>
        <span className="footer-title text-sky-400">Company</span>
        <Link className="link link-hover">About us</Link>
        <Link className="link link-hover">Contact</Link>
        <Link className="link link-hover">Workshop</Link>
      </div>
      <div>
        <span className="footer-title text-sky-400">Legal</span>
        <Link className="link link-hover">Terms of use</Link>
        <Link className="link link-hover">Privacy policy</Link>
      </div>
      <div className="mt-10">
        <p className="text-sky-400 text-xl font-bold">
          Copyright © 2022 - All right reserved by Mohammad Sumon
        </p>
      </div>
    </footer>
  );
};

export default Footer;
