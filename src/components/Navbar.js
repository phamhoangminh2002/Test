import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Navbar() {
  return (
    <div>
      <Link
        activeClass="active"
        className="nav-item"
        to="section1"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >Section 1</Link>
      <Link
        activeClass="active"
        className="nav-item"
        to="section2"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >Section 2</Link>
      <Link
        activeClass="active"
        className="nav-item"
        to="section3"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      > Section 3</Link>
       <Link
        activeClass="active"
        className="nav-item"
        to="section4"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      > Section 4</Link>
       <Link
        activeClass="active"
        className="nav-item"
        to="section5"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      > Section 5</Link>
    </div>
  );
}
