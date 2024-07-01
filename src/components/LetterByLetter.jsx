"use client";

import React, { useEffect, useState } from "react";

function LetterByLetter({ text, className, style, speed, wait }) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (!start) {
      setTimeout(() => {
        setStart(true);
      }, wait);
    }
  }, [start, wait]);

  useEffect(() => {
    if (!start) {
      setIndex(0);
      setDisplayedText("");
    }
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(displayedText + text[index]);
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timer);
    }
  }, [index, text, displayedText]);

  const [cursor, setCursor] = useState("|");
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setCursor((prevCursor) => (prevCursor === "|" ? "" : "|"));
    }, speed);
    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <div style={style} className={className}>
      <span>
        {  start && displayedText} {displayedText.length < text.length && start && cursor}{" "}
      </span>
    </div>
  );
}

export default LetterByLetter;
