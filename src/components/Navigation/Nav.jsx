import React from "react";

import {
  FaHome,
  FaInfoCircle,
  FaCogs,
  FaEnvelope,
  FaRegHospital,
} from "react-icons/fa";
import { NavLogo } from "./NavLogo";
import { Link } from "react-router-dom";

export function Nav() {
  const linkMenu =
    "block p-4 mt-4 lg:inline-block lg:mt-0 text-beige-dark hover:scale-125 mr-4 transition";
  const linkMenuIcon = "inline-block mr-2 mb-1";

  return (
    <nav className="flex shadow-lg justify-between flex-wrap bg-beige-light">
      <div className="w-full max-w-7xl m-auto flex ">
        <div className=" wlex-shrink-0 ">
          <a href="/">
            <NavLogo />
          </a>
        </div>
        <div className="w-full block flex-grow justify-between scale lg:flex items-center ">
          <div className=" flex text-lg ml-auto  ">
            <Link to="/" className={linkMenu}>
              <FaHome className={linkMenuIcon} />
              Home
            </Link>
            <Link to="/about" className={linkMenu}>
              <FaInfoCircle className={linkMenuIcon} />
              Sobre
            </Link>
            <Link to="/planos" className={linkMenu}>
              <FaRegHospital className={linkMenuIcon} />
              Parcerias
            </Link>
            <Link to="/services" className={linkMenu}>
              <FaCogs className={linkMenuIcon} />
              Serviços
            </Link>
            <Link
              to="/formpage"
              className="text-white bg-beige-dark  hover:text-beige-dark hover:bg-white transition p-4 rounded-lg "
            >
              <FaEnvelope className={linkMenuIcon} />
              Contato
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
