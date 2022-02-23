import React from "react";
import { HeaderWrap } from "./headerStyles";

export const Header = () => {
  return (
    <HeaderWrap>
      <div className="topnav" id="topnav">
        <a href="#home" className="active">
          Inicio
        </a>
        <a href="#quienesSomos">Quienes somos</a>
        <a href="#contacto">Contacto</a>
      </div>
    </HeaderWrap>
  );
};
