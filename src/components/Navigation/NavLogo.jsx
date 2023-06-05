import React from "react";
import { Link } from "react-router-dom";
import LogoFisio from "../../img/lg-fisiokarol.jpg";


export function NavLogo() {
  const a = "inline-block mr-2 ml-2 flex justify-between";
  return (
    <div className={a}>
      <Link to="/">
        <img src={LogoFisio} alt="Logo Fisio" className="w-52 h-36" />
      </Link>
    </div>
  );
}
