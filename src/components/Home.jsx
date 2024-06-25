"use client";
import { useEffect, useState } from "react";
import LetterByLetter from "./LetterByLetter";

function Home() {
  useEffect(() => {
    const cursorShadow = document.getElementById("cursor-shadow");
    const handleMouseMove = (e) => {
      cursorShadow.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  const [position, setPosition] = useState({
    x: window.scrollX,
    y: window.scrollY,
  });
  const handleScroll = () => {
    setPosition({ x: window.scrollX, y: window.scrollY });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const divs = [
    { id: 1, width: 200 },
    { id: 2, width: 300 },
    { id: 3, width: 220 },
    { id: 4, width: 400 },
    { id: 5, width: 300 },
    { id: 6, width: 220 },
    { id: 7, width: 150 },
    { id: 8, width: 200 },
    { id: 9, width: 200 },
    { id: 10, width: 200 },
    { id: 11, width: 250 },
    { id: 12, width: 150 },
    { id: 13, width: 200 },
    { id: 14, width: 300 },
    { id: 15, width: 230 },
    { id: 16, width: 200 },
    { id: 17, width: 370 },
    { id: 18, width: 250 },
    { id: 19, width: 240 },
    { id: 20, width: 300 },
    { id: 21, width: 150 },
    { id: 22, width: 200 },
  ];
  return (
    <div className="home">
      <div id="cursor-shadow"></div>
      <div className="home-title-container">
        <LetterByLetter
          text="CODINGEWER"
          className="home-title"
          speed={200}
          wait={0}
        />
        <LetterByLetter
          text="Preparing to enter the league of giants (AI)"
          className="home-subtitle"
          speed={50}
          wait={2100}
        />
      </div>
      <div className="container">
        <div
          style={{
            transform: "rotateY(45deg)",
            
          }}
          className="scene"
        >
          {divs.map((div, index) => (
            <div key={index} className="box" style={{ width: div.width }}></div>
          ))}
        </div>
        <div
          style={{ transform: "rotateY(-45deg)"}}
          className="scene"
        >
          {divs.map((div, index) => (
            <div key={index} className="box" style={{ width: div.width }}></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
