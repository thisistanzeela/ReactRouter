import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [auth, setAuth] = useState("Log In");
  return (
    <div className="flex items-center justify-between p-4 bg-cyan-950 text-white">
      <div className="flex items-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
          className="h-8 w-auto mr-4"
        />
      </div>

      <ul className="flex items-center space-x-6">
        <li className="hover:text-gray-400 cursor-pointer">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-gray-400 cursor-pointer">
          <Link to="/about">About</Link>
        </li>
        <li className="hover:text-gray-400 cursor-pointer">
          <Link to="/contact">Contact</Link>
        </li>
        <li
          className="border border-white px-4 py-2 rounded hover:text-gray-400 cursor-pointer"
          onClick={() => {
            // if (auth === "Log In") {
            //   return setAuth("Log Out");
            // } else {
            //   return setAuth("Log In");
            // }
            auth === "Log In" ? setAuth("Log Out") : setAuth("Log In");
          }}
        >
          {auth}
        </li>
      </ul>
    </div>
  );
};

export default Header;
