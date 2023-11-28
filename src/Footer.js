import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="bg-black grid grid-cols-7 px-28 py-8">
        <div className="col-span-2">
          <h1 className="font-semibold text-2xl text-white">HaloKost</h1>
          <h1 className="text-lg text-white">Temukan Kost Impianmu</h1>
        </div>
        <div className="text-white col-span-2">
          <h1>Jl. Veteran No.31 Malang</h1>
          <h1>support@halokost.com</h1>
        </div>
        <div className="text-white text-base flex flex-col gap-1 col-span-2">
          <NavLink to="/">
            <h1>Home</h1>
          </NavLink>
          <NavLink to="/gallery">
            <h1>Gallery</h1>
          </NavLink>
          <NavLink to="/contact">
            <h1>Contact</h1>
          </NavLink>
        </div>
        <div className="text-white col-span-1">
          <h1 className="text-lg font-semibold">Social</h1>
          <div className="flex gap-4 text-lg mt-3">
            <FaInstagram />
            <FaTwitter />
            <FaFacebook />
          </div>
        </div>
      </div>
      <div className="bg-sky-800 text-white text-center py-1">
        Copyrigt {new Date().getFullYear()}
      </div>
    </>
  );
};

export default Footer;
