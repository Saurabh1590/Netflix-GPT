import React from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="flex justify-between absolute w-screen px-8 py-3 bg-gradient-to-b from-black z-10">
      <img
        className="w-[197px] mx-[100px]"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && (<div className="flex items-center ">
        <img
          className="w-12 h-12 mx-2"
          src={user?.photoURL}
          alt="usericon"
        />
        <button
          onClick={handleSignOut}
          className="bg-[#FF000C] hover:bg-[#ff000dd1] text-white font-bold py-2 px-4 border border-red-700 rounded"
        >
          Sign Out
        </button>
      </div>)}
    </div>
  );
};

export default Header;
