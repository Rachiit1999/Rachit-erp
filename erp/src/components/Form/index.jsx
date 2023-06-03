import React from "react";
import "../styles/style.scss";
import { Link } from "react-router-dom";
import { About } from "../About";

export const Form = () => {
  return (
    <>
      <div className="header">
        <ul>
          <li>
            <Link to='about' >About</Link>
            <Link to="contact">Contact</Link>
            <Link to="error">Error</Link>
          </li>
        </ul>
      </div>
      <div className="form">
        <input type="text" placeholder="Enter Your Name" />
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <input type="button" value="submit" />
      </div>
    </>
  );
};
