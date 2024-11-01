import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, USER_AVATAR } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/Browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="flex justify-between absolute w-screen px-8 py-3 bg-gradient-to-b from-black z-10">
      <img
        className="w-[197px] mx-[100px]"
        src={LOGO}
        alt="logo"
      />
      {user && (<div className="flex items-center ">
        <img
          className="w-12 h-12 mx-2"
          src={USER_AVATAR}
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
