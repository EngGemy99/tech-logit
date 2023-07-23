import React, { useEffect } from "react";
import "./style.scss";
const FloatingIcon = () => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      let con = document.getElementById("corner-contact");
      if (window.scrollY > 200) {
        con.classList.remove("active");
      } else {
        con.classList.add("active");
      }
    });
  }, []);
  return (
    <div className="corner-contact active" id="corner-contact">
      <ul className="list-unstyled">
        <li>
          <a href="#">
            <i className="-mb-2 fa-brands fa-whatsapp"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa-solid fa-envelope -mb-2"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa-solid fa-arrow-up -mb-2"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FloatingIcon;
