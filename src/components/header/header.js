import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { AiFillHome } from "react-icons/ai";
import "./header.css";

function Header({ currentUser }) {
  return (
    <nav className="topMenu">
      <ul className="list-left">
        <Link to="/" className="link">
          <li>
            <AiFillHome />
          </li>
        </Link>
      </ul>

      <ul className="list-right">
        {currentUser ? (
          <li>
            <Link to="/login">
              <button className="success" onClick={() => auth.signOut()}>
                Sign out
              </button>
            </Link>
          </li>
        ) : (
          <React.Fragment>
            <li>
              <Link to="/login">
                <button className="success">Sign in</button>
              </Link>
            </li>

            <li>
              <Link to="register">
                <button className="primary-green">Sign up</button>
              </Link>
            </li>
          </React.Fragment>
        )}
      </ul>
    </nav>
  );
}

export default Header;
