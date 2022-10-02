import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-[90px] flex justify-around items-center bg-blue-500 px-6 py-3 navbar-text shadow-lg">
      <div>
        <Link to="/">
          <p className="text-[24px] text-white">Home</p>
        </Link>
      </div>
      <div>
        <Link to="/favorite-product">
          <p className="text-[24px] text-white">Favorites</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
