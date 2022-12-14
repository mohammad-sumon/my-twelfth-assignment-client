import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import useAdmin from "../../../hooks/useAdmin";
import useBuyer from "../../../hooks/useBuyer";
import useSeller from "../../../hooks/useSeller";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);
  const [isBuyer] = useBuyer(user?.email);

  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
    navigate("/");
  };

  const menuitems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>

      {user?.uid && isAdmin && (
        <>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </>
      )}

      {/* buyer dashboard */}
      {user?.uid && isBuyer && (
        <>
          <li>
            <Link to="/dashboard/buyerDashboard">Dashboard</Link>
          </li>
        </>
      )}

      {/* seller dashboard */}
      {user?.uid && isSeller && (
        <>
          <li>
            <Link to="/dashboard/sellerDashboard">Dashboard</Link>
          </li>
        </>
      )}

      {/* login and login btn display conditionally */}
      {!user?.uid ? (
        <li>
          <Link to="/login">Login</Link>
        </li>
      ) : (
        <li>
          <button
            onClick={handleLogOut}
            className="btn rounded-md bg-sky-400 border-none hover:bg-sky-500 hover:text-white"
          >
            Sign Out
          </button>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuitems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost font-bold text-3xl text-sky-500">
          AC House
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuitems}</ul>
      </div>
    </div>
  );
};

export default Navbar;
