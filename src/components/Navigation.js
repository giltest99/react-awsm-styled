import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/typo">Typography</Link>
          </li>
          <li>
            <Link to="/buttons">Buttons</Link>
          </li>
          <li>
            <Link to="/lists">Lists</Link>
          </li>
          <li>
            <Link to="/tables">Tables</Link>
          </li>
          <li>
            <Link to="/forms">Forms</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
