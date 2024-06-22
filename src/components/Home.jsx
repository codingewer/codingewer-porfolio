"use client";
import { useEffect } from "react";
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
    </div>
  );
}

export default Home;
