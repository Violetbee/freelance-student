import React from "react";
import { Link } from "react-router-dom";
import { BiAtom } from "react-icons/bi";

function Navbar() {
  return (
    <div className="navbar border-b-[1px] border-b-amber-500 z-10">
      <div className="w-4/6 xl:w-4/6 lg:w-5/6 md:w-5/6 sm:w-5/6 xs:w-4/6 mx-auto justify-evenly">
        <div className="flex-1">
          <Link
            className="btn btn-lg btn-ghost text-5xl xl:text-5xl lg:text-3xl md:text-2xl sm:text-xl xs:text-sm"
            to="/"
          >
            <BiAtom className="text-warning" />
            <p className="bg-clip-text text-transparent bg-gradient-to-r from-violet-700 to-orange-600">
              KodYaz
            </p>
          </Link>
        </div>
        <div className="flex space-x-1">
          <Link
            className="btn btn-lg xl:btn-lg lg:btn-sm md:btn-sm sm:btn-xs xs:btn-xs btn-ghost"
            to="/"
          >
            Anasayfa
          </Link>
          <Link
            className="btn btn-lg xl:btn-lg lg:btn-sm md:btn-sm sm:btn-xs xs:btn-xs btn-ghost"
            to="/About"
          >
            Hakkımızda
          </Link>
          <Link
            className="btn btn-lg xl:btn-lg lg:btn-sm md:btn-sm sm:btn-xs xs:btn-xs btn-ghost"
            to="/Detail"
          >
            Detay
          </Link>
          <Link
            className="btn btn-lg xl:btn-lg lg:btn-sm md:btn-sm sm:btn-xs xs:btn-xs btn-ghost"
            to="/Contact"
          >
            İletişim
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
