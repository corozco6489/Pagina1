import "./header.scss";
import styled from "styled-components";
import { useState } from "react";
import { init } from "ityped";
import { useRef}  from "react";
import { useEffect } from "react";
import { FaAngleDoubleDown } from "react-icons/fa";
import image from "./nenad-grujic--b3wxY6jKEk-unsplash.jpg";
const Navbar = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  width: 30vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 100%);
 background-blend-mode: multiply,multiply;
  justify-content: space-evenly;
  align-items: center;
  transition: transform 0.3s ease-in-out;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.5);
  transform: translate(${({ open }) => (open ? "0" : "110%")});
  a {
    color: #fff;
    text-decoration: none;
    font-size: 25px;
  }
  @media screen and (max-width:800px){
    width:50vh;
  }
`;

export default function Header() {
  const [showMobileMenu, setshowMobileMenu] = useState(false);


  const textRef = useRef();
  useEffect(() => {

    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Developer" , "Designer","Freelance"],
    });
   
  }, [])

  return (
    <div className="header" id="home" >
      <img
        src="assets/img/bx-menu.svg"
        alt=""
        className="hambuger"
        onClick={() => setshowMobileMenu(!showMobileMenu)}
      />
      <Navbar open={showMobileMenu}>
        <a href="#home" onClick={() => setshowMobileMenu(!showMobileMenu)}>Inicio</a>
        <a href="#servicio" onClick={() => setshowMobileMenu(!showMobileMenu)}>Services</a>
        <a href="#portfolio" onClick={() => setshowMobileMenu(!showMobileMenu)}>Portfolio</a>
        <a href="#works" onClick={() => setshowMobileMenu(!showMobileMenu)}>Woks</a>
        <a href="#contacto" onClick={() => setshowMobileMenu(!showMobileMenu)}>Contact</a>
      </Navbar>
      <div className="contenedor head">
        <h1 className="title">
          Web <span ref={textRef}></span>
        </h1>
        <p className="copy">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
          quibusdam aspernatur impedit atque vel, ducimus consequuntur
          consequatur labore repellat porro. Quam, ex provident totam facilis
          debitis ab eaque tempore sit!
        </p>
        <a href="#servicio" className="down">
          <FaAngleDoubleDown className="abajo"/>
        </a>
      </div>
    </div>
  );
}
