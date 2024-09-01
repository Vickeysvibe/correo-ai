// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "../styles/navbar.css";
import chat from "../svgs/chat.svg";
import dashboard from "../svgs/dashboard.svg";
import inbox from "../svgs/inbox.svg";
import { Link, useLocation } from "react-router-dom";
import logo from "../svgs/Correo.ai2.png";
export const Navbar = () => {
  let location = useLocation();
  location = location.pathname;
  location = location.slice(1, location.length);
  const [page, setPage] = useState(location);
  const [tab, setTab] = useState("active");
  return (
    <>
      <div
        style={tab ? { display: "block" } : { marginLeft: "-20vw" }}
        className="navbar"
      >
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="ul">
          <ul>
            <Link
              style={{ textDecoration: "none", color: "aliceblue" }}
              to={"/dashboard"}
            >
              <li
                onClick={() => {
                  setPage("dashboard");
                }}
                style={
                  page === "dashboard"
                    ? {
                        backgroundColor: "rgb(192, 192, 192)",
                        paddingRight: "0vw",
                        borderRadius: "30px",
                      }
                    : {}
                }
              >
                {" "}
                <img src={dashboard} alt="chat" />
                <p>Dashboard</p>
              </li>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "aliceblue" }}
              to={"/chat"}
            >
              <li
                onClick={() => {
                  setPage("chat");
                }}
                style={
                  page === "chat"
                    ? {
                        backgroundColor: "rgb(192, 192, 192)",
                        paddingRight: "0vw",
                        borderRadius: "30px",
                      }
                    : {}
                }
              >
                {" "}
                <img src={chat} alt="chat" />
                <p>Chat</p>
              </li>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "aliceblue" }}
              to={"/inbox"}
            >
              <li
                onClick={() => {
                  setPage("inbox");
                }}
                style={
                  page === "inbox"
                    ? {
                        backgroundColor: "rgb(192, 192, 192)",
                        paddingRight: "0vw",
                        borderRadius: "30px",
                      }
                    : {}
                }
              >
                {" "}
                <img src={inbox} alt="chat" />
                <p>Inbox</p>
              </li>
            </Link>
          </ul>
        </div>
        <div className="user">
          <img
            src="https://i.pinimg.com/originals/b8/4f/41/b84f4195a6d33c93d01111287c0c7b7e.jpg"
            alt="face"
          />
          <div className="dets">
            <h1>Name</h1>
            <p>Emailis@mail.com</p>
          </div>
        </div>
      </div>
      <div
        onClick={() => {
          setTab(!tab);
        }}
        className="over"
      >
        =
      </div>
    </>
  );
};
