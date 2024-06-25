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
  const products = [
    {id:1,
      tittle:"Web Sites",
      content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, mollitia excepturi, saepe sed est harum odio, nihil voluptatum quod itaque qui ducimus aspernatur animi recusandae quas dignissimos et nobis non!"
    },
    {id:2,
      tittle:"Mobile Apps",
      content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, mollitia excepturi, saepe sed est harum odio, nihil voluptatum quod itaque qui ducimus aspernatur animi recusandae quas dignissimos et nobis non!"
    },
    {id:3,
      tittle:"server Side Apps",
      content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, mollitia excepturi, saepe sed est harum odio, nihil voluptatum quod itaque qui ducimus aspernatur animi recusandae quas dignissimos et nobis non!"
    },
    {id:4,
      tittle:"AI Solutions For Companies(Coming Soon)",
      content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, mollitia excepturi, saepe sed est harum odio, nihil voluptatum quod itaque qui ducimus aspernatur animi recusandae quas dignissimos et nobis non!"
    },

  ]
  return (
    <div id={id} className="page">
        {
          position.y > 200 &&
      <div className="page-content">
        <LetterByLetter
        text="Products"
        className="product-title"
        speed={100}
        wait={0}
        />
        <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "48px",
        }}
        >
          {
            products.map((product)=>(
              <div key={product.id} className="product-card">
                <span className="product-card-title">{product.tittle}</span>
                <span className="product-content">{product.content}</span>
              </div>
            ))
          }
        </div>
      </div>
    }
    </div>
  );
}

export default Products;
