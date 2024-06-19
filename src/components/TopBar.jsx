"use client";
import Link from "next/link";
import React, { useState } from "react";

function TopBar() {
  const [togledLink, setTogletLink] = useState("/");
  const toggleActive = (link) => {
    setTogletLink(link);
  };
  const [toggled, setTogglet] = useState(false);

  const handleToggle = () => {
    if (toggled) {
      document.getElementById("top-bar-menu").style.display = "none";
    } else {
      document.getElementById("top-bar-menu").style.display = "flex";
    }
    setTogglet(!toggled);
  };
  return (
    <div className="topbar-container">
      <div className="topbar-inner">
        <div className="topbar-navs">
          <Link
            onClick={() => toggleActive("/")}
            className={
              togledLink === "/"
                ? " topbar-navs-a-active topbar-navs-a"
                : "topbar-navs-a"
            }
            href="/"
          >
            Home
          </Link>
          <Link
            onClick={() => toggleActive("projects")}
            className={
              togledLink === "projects"
                ? " topbar-navs-a-active topbar-navs-a"
                : "topbar-navs-a"
            }
            href="/"
          >
            Projects
          </Link>
          <Link
            onClick={() => toggleActive("products")}
            className={
              togledLink === "products"
                ? " topbar-navs-a-active topbar-navs-a"
                : "topbar-navs-a"
            }
            href="/"
          >
            Products
          </Link>
          <Link
            onClick={() => toggleActive("contact")}
            className={
              togledLink === "contact"
                ? " topbar-navs-a-active topbar-navs-a"
                : "topbar-navs-a"
            }
            href="/"
          >
            Contact
          </Link>
        </div>
        <button onClick={handleToggle} className="menu-btn">
          <div
            style={{
              width: 48,
              height: 5,
              borderRadius: 2.5,
              rotate: toggled ? "135deg" : "0deg",
              transition: "0.5s",
              backgroundColor: toggled ? "red" : "#FF0000",
            }}
          ></div>
          <div
            style={{
              width: 36,
              height: 5,
              display: toggled ? "none" : "block",
              borderRadius: 2.5,
              backgroundColor: "#FF0000",
            }}
          ></div>
          <div
            style={{
              width: 48,
              height: 5,
              rotate: toggled ? "135deg" : "0deg",
              transition: "0.5s",
              borderRadius: 2.5,
              backgroundColor: toggled ? "red" : "#FF0000",
            }}
          ></div>
        </button>
      </div>
      <div id="top-bar-menu" className="topbar-menu">
        <Link
          onClick={() => toggleActive("/")}
          className={
            togledLink === "/"
              ? " topbar-navs-a-active topbar-navs-a"
              : "topbar-navs-a"
          }
          href="/"
        >
          Home
        </Link>
        <Link
          onClick={() => toggleActive("projects")}
          className={
            togledLink === "projects"
              ? " topbar-navs-a-active topbar-navs-a"
              : "topbar-navs-a"
          }
          href="/"
        >
          Projects
        </Link>
        <Link
          onClick={() => toggleActive("products")}
          className={
            togledLink === "products"
              ? " topbar-navs-a-active topbar-navs-a"
              : "topbar-navs-a"
          }
          href="/"
        >
          Products
        </Link>
        <Link
          onClick={() => toggleActive("contact")}
          className={
            togledLink === "contact"
              ? " topbar-navs-a-active topbar-navs-a"
              : "topbar-navs-a"
          }
          href="/"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

export default TopBar;
