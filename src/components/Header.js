import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, LOGO_URL_SM, SUPPORTED_LANGUAGES, USER_AVATAR } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faMagnifyingGlass, faPlay } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
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

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-full md:px-12 md:py-4 bg-gradient-to-b from-black z-10 flex justify-between items-center px-4 py-3">
      <div>
        {/* Logo for larger screens */}
        <img className="w-44 hidden md:block" src={LOGO} alt="logo" />
        {/* Smaller logo for mobile view */}
        <img
          className="w-20 object-cover md:hidden"
          alt="sm-logo"
          src= {LOGO_URL_SM}
        />
      </div>

      {user && (
        <div className="flex items-center space-x-4">
          {/* Language selection dropdown */}
          {showGptSearch && (
            <select
              className="p-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors duration-200"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          {/* GPT Search button */}
          <button
            onClick={handleGptSearchClick}
            className="md:py-2 md:px-4 py-2 px-4 text-sm md:text-lg bg-purple-700 hover:bg-purple-600 text-white rounded-2xl transition-colors duration-200"
          >
            {showGptSearch ? (
              <FontAwesomeIcon icon={faHouse} />
            ) : (
              <div >
                GPT&nbsp; <FontAwesomeIcon icon={faMagnifyingGlass} />
              </div>
            )}
          </button>

          {/* User avatar for larger screens */}
          <img
            className="w-10 h-10 hidden md:block rounded-md border-2 border-gray-300"
            src={USER_AVATAR}
            alt="usericon"
          />

          {/* Sign out button */}
          <button
            onClick={handleSignOut}
            className="bg-white text-black rounded-3xl px-4 py-2 text-xs md:text-lg hover:bg-gray-200 transition-colors duration-200"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
