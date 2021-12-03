import "./portfolio.scss";
import { useState } from "react";
import styled from "styled-components";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";

import { useEffect } from "react";

const ImagenLight = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(${({ open }) => (open ? "0" : "110%")});
  transition: transform 0.2s ease-in-out;
  .close {
    position: absolute;
    top: 15px;
    right: auto;
    width: 40px;
    cursor: pointer;
  }
  .agregar-imagen {
    object-fit: cover;
    width: 60%;
    border-radius: 10px;
    transform: scale(${({ abrir }) => (abrir ? "0" : "1")});
    transition: transform 0.3s 0.2s;
  }
`;

export default function Portfolio() {
  const [show, setShow] = useState(false);
  const [blog, setBlog] = useState([]);
  const [blog1, setBlog1] = useState([]);

  useEffect(() => {
    setBlog(featuredPortfolio);
  }, [true]);

  useEffect(() => {
    setBlog1(featuredPortfolio);
  }, [false]);

  return (
    <div id="portfolio">
      <div className="gallery">
        <div className="contenedor">
          <h2 className="subtitle">Portfolio</h2>
        </div>
        <div className="contenedor-galeria">
          {blog.map((d) => (
            <img
              src={d.img}
              alt=""
              className="img-galeria"
              onClick={() => setShow(!show)}
            />
          ))}
        </div>
      </div>

      <ImagenLight open={show}>
        <img
          src="assets/img/bx-x.svg"
          alt=""
          className="close"
          onClick={() => setShow(!show)}
        />
{/* 
        {
            blog1.map((d)=>(

                <img
                src={d.img}
                alt=""
                className="agregar-imagen"
                abrir={show}
              />

         
            ))
        } */}

         
      </ImagenLight>
    </div>
  );
}
