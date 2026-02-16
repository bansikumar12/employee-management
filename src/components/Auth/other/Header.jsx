
import React from "react";

const Header = ({ data, changeUser }) => {

  const logoutHandler = () => {
    changeUser();   
  };

  return (
    <div className="flex items-end justify-between p-4 border-b-2 border-gray-300">
      <h1 className="text-2xl text-white font-medium">
        Hello <br />
        <span className="text-3xl font-semibold">
          {data?.firstname || "Admin"}
        </span>
      </h1>

      <button
        onClick={logoutHandler}
        className="bg-red-500 text-white px-4 py-2 rounded-md"
      >
        Logout
      </button>
    </div>
  );
};

export default Header;