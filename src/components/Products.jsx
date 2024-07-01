"use client";
import React, { useEffect, useState } from "react";
import LetterByLetter from "./LetterByLetter";

function Products({ id }) {
  const [position, setPosition] = useState(
    typeof window !== "undefined" && { x: window.scrollX, y: window.scrollY }
  );
  const handleScroll = () => {
    setPosition({ x: window.scrollX, y: window.scrollY });
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (typeof window !== null) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);
  useEffect(() => {
    if (position.y < 700) {
      handleScroll();
    }
  }, []);
  const products = [
    {
      id: 1,
      tittle: "Web Sites",
      content: `Our company specializes in developing robust web applications tailored to meet the unique needs of our clients. With a focus on security, scalability, and efficiency, we deliver high-quality solutions that ensure seamless data management and optimal performance on all web platforms. Trust us to transform your online presence with our state-of-the-art web technologies.`,
    },
    {
      id: 2,
      tittle: "Mobile Apps",
      content: `Our company specializes in developing robust web applications tailored to meet the unique needs of our clients. With a focus on security, scalability, and efficiency, we deliver high-quality solutions that ensure seamless data management and optimal performance on all web platforms. Trust us to transform your online presence with our state-of-the-art web technologies.`,
    },
    {
      id: 3,
      tittle: "server Side Apps",
      content: `Our company specializes in 
      developing robust server-side applications tailored to meet the unique needs of our clients. With a focus on security, scalability, and efficiency, we deliver high-quality solutions that ensure seamless data management and optimal performance. 
      Trust us to transform your business processes with our state-of-the-art server-side technology.`,
    },
    {
      id: 4,
      tittle: "AI Solutions For Companies(Coming Soon)",
      content:
        `Our company specializes in developing cutting-edge AI-based software tools tailored to meet the unique needs of our clients. With a focus on security, scalability, and efficiency, we deliver high-quality solutions that ensure seamless data management and optimal performance across various platforms. Stay tuned for our upcoming AI-driven products that will revolutionize the way you operate. Trust us to transform your business processes with our state-of-the-art AI technologies.`
    }
  ];
  return (
    <div id={id} className="page">
      {position.y > 200 && (
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
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <span className="product-card-title">{product.tittle}</span>
                <span className="product-content">{product.content}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;
