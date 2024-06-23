"use client";
import React, { useEffect, useState } from "react";
import LetterByLetter from "./LetterByLetter";

function Products({ id }) {
  const [position, setPosition] = useState({ x: window.scrollX, y: window.scrollY });
  const handleScroll = () => {
    setPosition({ x: window.scrollX, y: window.scrollY });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    if (position.y < 700) {
      handleScroll()
    }
  }, [])
  return (
    <div id={id} className="page">
      <div className="page-content">
        {
          position.y > 200 &&
        <LetterByLetter
        text="Products"
        className="product-title"
        speed={200}
        wait={0}
        />
      }
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "48px",
          }}
        >
          <div  className="product-card">
            <h1>Mobile Apps</h1>
            <span className="product-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
              mollitia excepturi, saepe sed est harum odio, nihil voluptatum quod
              itaque qui ducimus aspernatur animi recusandae quas dignissimos et
              nobis non!
            </span>
          </div>
          <div  className="product-card">
            <h1>Mobile Apps</h1>
            <span className="product-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
              mollitia excepturi, saepe sed est harum odio, nihil voluptatum quod
              itaque qui ducimus aspernatur animi recusandae quas dignissimos et
              nobis non!
            </span>
          </div>
          <div  className="product-card">
            <h1>Mobile Apps</h1>
            <span className="product-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
              mollitia excepturi, saepe sed est harum odio, nihil voluptatum quod
              itaque qui ducimus aspernatur animi recusandae quas dignissimos et
              nobis non!
            </span>
          </div>
          <div  className="product-card">
            <h1>Mobile Apps</h1>
            <span className="product-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
              mollitia excepturi, saepe sed est harum odio, nihil voluptatum quod
              itaque qui ducimus aspernatur animi recusandae quas dignissimos et
              nobis non!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
