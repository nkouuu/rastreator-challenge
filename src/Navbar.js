import React from "react";
import "./_Navbar.scss";

export default function Navbar(props) {
  let options = [
    "SEGUROS",
    "INTERNET Y TELEFONIA",
    "FINANZAS",
    "VIAJES",
    "COCHES",
    "ENERGIA"
  ];
  let menuDiv;

  window.onload = () => {
    menuDiv = document.getElementsByClassName("menu-div")[0];
    document.getElementsByClassName("menu-icon")[0].onclick = () => {
      menuDiv.style.display = "inline";
    };

    menuDiv.onclick = e => {
      if (window.innerWidth < 768) {
        menuDiv.style.display = "none";
      }
    };
    window.onresize = () => {
      if (window.innerWidth > 768) {
        menuDiv.style.display = "inline";
      } else {
        menuDiv.style.display = "none";
      }
    };
  };

  return (
    <nav>
      <div className="logo-div">
        <button className="menu-icon">
          <i className="fas fa-bars" />
        </button>
        <div className="img-div">
          <img src="/assets/logo-rastreator-header.png" alt="" />
        </div>
        <button className="area-btn">MI ÁREA PERSONAL</button>
        <button className="user-icon">
          <i className="fas fa-user" />
        </button>
      </div>
      <div className="menu-div">
        <ul>
          {options.map(e => (
            <li key={e}>
              {e}
              <i className="fas fa-angle-down shown" />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
