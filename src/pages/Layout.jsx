// eslint-disable-next-line no-unused-vars
import React from "react";
import { Navbar } from "../components/Navbar";
import "../styles/layout.css";
// eslint-disable-next-line react/prop-types
export const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">{children}</div>
    </div>
  );
};
