import React, { useState } from "react";
import Logo from "../img/logo.png";
import Avatar from "../img/avatar.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MdShoppingBasket, MdLogout, MdAdd } from "react-icons/md";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../utils/firebase.config";
import { useStateValue } from "../context/stateProvider";
import { actionType } from "../context/reducer";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const fireBaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [{ user }, dispatch] = useStateValue();
  const userPhoto = user?.photoURL;

  const login = async () => {
    console.log("clicked");
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(fireBaseAuth, provider);

      dispatch({ type: "SET_USER", user: providerData[0] });

      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setShowMenu(!showMenu);
    }
  };

  const logOut = () => {
    setShowMenu(false);
    dispatch({ type: actionType.SET_USER, user: null });
    localStorage.clear();
  };

  return (
    <header className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-orange-600">
      {/* Desktop and Tablet */}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <Link to={"/"}>
          <div className="flex items-center gap-2">
            <motion.img
              whileTap={{ scale: 0.6, rotate: 360 }}
              src={Logo}
              alt="logo"
              className="w-8 object-cover"
            />
            <p className="text-headingColor text-xl font-bold">KiaFood</p>
          </div>
        </Link>
        <div className="flex justify-center items-center gap-8">
          <ul className="flex items-center gap-6">
            <li className="text-base text-headingColor hover:border-b-2 cursor-pointer transition duration-800 ease-in">
              Home
            </li>
            <li className="text-base text-headingColor hover:border-b-2 cursor-pointer transition duration-800 ease-in">
              Menu
            </li>
            <li className="text-base text-headingColor hover:border-b-2 cursor-pointer transition duration-800 ease-in">
              About
            </li>
            <li className="text-base text-headingColor hover:border-b-2 cursor-pointer transition duration-800 ease-in">
              Service
            </li>
          </ul>
          <div className="relative flex items-center justify-center">
            <MdShoppingBasket className=" cursor-pointer text-green-200 md:text-2xl ml-8" />
            <div className=" absolute -right-2 -top-2  w-4 h-4 rounded-full bg-green-100 flex items-center justify-center">
              <p className="text-xs text-black font-semibold">2</p>
            </div>
          </div>
          <div className="relative">
            <motion.img
              src={user ? userPhoto : Avatar}
              alt="avatar"
              whileTap={{ scale: 0.6 }}
              className="w-10 min-w-[40px] min-h-[40px] drop-shadow-2xl cursor-pointer rounded-full"
              onClick={login}
            />
            {showMenu && (
              <motion.div
                className="w-52 top-12 right-0 bg-gray-100 shadow-xl rounded-lg absolute flex flex-col gap-2"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
              >
                <Link to={"/createItem"}>
                  <p
                    className="px-4 py-2 flex items-center justify-between gap-3 cursor-pointer hover:shadow-md hover:bg-gray-200 transition-all duration-150 ease-in-out rounded-xl"
                    onClick={() => setShowMenu(false)}
                  >
                    Add New Product <MdAdd />
                  </p>
                </Link>
                <p
                  onClick={logOut}
                  className="px-4 py-2 flex items-center justify-between gap-3 cursor-pointer hover:shadow-md hover:bg-gray-200 transition-all duration-150 ease-in-out rounded-xl "
                >
                  Log out <MdLogout />
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="flex items-center justify-between md:hidden w-full h-full">
        <Link to={"/"}>
          <div className="flex items-center gap-2">
            <motion.img
              whileTap={{ scale: 0.6, rotate: 360 }}
              src={Logo}
              alt="logo"
              className="w-8 object-cover"
            />
            <p className="text-headingColor text-xl font-bold">KiaFood</p>
          </div>
        </Link>
        <div className="relative flex items-center justify-center">
          <MdShoppingBasket className=" cursor-pointer text-green-200 text-4xl ml-8" />
          <div className=" absolute -right-2 -top-2  w-4 h-4 rounded-full bg-green-100 flex items-center justify-center">
            <p className="text-xs text-black font-semibold">2</p>
          </div>
        </div>
        <div className="relative ">
          <motion.img
            src={user ? userPhoto : Avatar}
            alt="avatar"
            whileTap={{ scale: 0.6 }}
            className="w-10 min-w-[40px] min-h-[40px] drop-shadow-2xl cursor-pointer rounded-full"
            onClick={login}
          />
          {showMenu && (
            <motion.div
              className="w-52 top-12 right-0 bg-gray-100 shadow-xl rounded-lg absolute flex flex-col gap-2"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
            >
              <Link to={"/createItem"}>
                <p className="px-4 justify-center py-2 flex items-center  gap-3 cursor-pointer hover:shadow-md hover:bg-gray-200 transition-all duration-150 ease-in-out rounded-xl ">
                  Add New Product <MdAdd />
                </p>
              </Link>
              <ul className="flex items-center gap-6 flex-col ">
                <li
                  className="text-base w-full text-center text-headingColor hover:border-b-2 cursor-pointer hover:shadow-md hover:bg-gray-200 transition-all duration-150 ease-in-out rounded-xl "
                  onClick={() => setShowMenu(false)}
                >
                  Home
                </li>
                <li
                  className="text-base w-full text-center text-headingColor hover:border-b-2 cursor-pointer hover:shadow-md hover:bg-gray-200 transition-all duration-150 ease-in-out rounded-xl"
                  onClick={() => setShowMenu(false)}
                >
                  Menu
                </li>
                <li
                  className="text-base w-full text-center text-headingColor hover:border-b-2 cursor-pointer hover:shadow-md hover:bg-gray-200 transition-all duration-150 ease-in-out rounded-xl"
                  onClick={() => setShowMenu(false)}
                >
                  About
                </li>
                <li
                  className="text-base w-full text-center text-headingColor hover:border-b-2 cursor-pointer hover:shadow-md hover:bg-gray-200 transition-all duration-150 ease-in-out rounded-xl"
                  onClick={() => setShowMenu(false)}
                >
                  Service
                </li>
              </ul>
              <p
                onClick={logOut}
                className="px-4 py-2 flex items-center justify-center gap-3 cursor-pointer bg-slate-300 hover:shadow-md hover:bg-gray-200 transition-all duration-150 ease-in-out rounded-xl "
              >
                Log out <MdLogout />
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
