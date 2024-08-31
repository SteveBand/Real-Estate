import React, { useState } from "react";
import { HeaderStyle } from "../styles/components/HeaderStyle";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaList } from "react-icons/fa";

export function Header() {
  const [menu, setMenu] = useState(false);
  return (
    <HeaderStyle>
      <FaList className="mobile-btn" onClick={() => setMenu((prev) => !prev)} />
      <ul className="ul-left">
        <li>
          <a href="#">Houses</a>
          <MdOutlineKeyboardArrowDown />
        </li>
        <li>
          <a href="#">Townhomes</a>
          <MdOutlineKeyboardArrowDown />
        </li>
        <li>
          <a href="#">Apartments</a>
          <MdOutlineKeyboardArrowDown />
        </li>
        <li>
          <a href="#">Land</a>
          <MdOutlineKeyboardArrowDown />
        </li>
        <li>
          <a href="#">Commercial</a>
          <MdOutlineKeyboardArrowDown />
        </li>
      </ul>
      <h4>URBN</h4>

      <ul className="ul-right">
        <li>
          <a href="#">Loans</a>
        </li>
        <li>
          <a href="#">Resources</a>
        </li>
        <li>
          <button>Sign In</button>
        </li>
        <li>
          <button aria-label="dark">Sign Up</button>
        </li>
      </ul>

      <ul className="mobile-nav" aria-label={menu ? "active" : ""}>
        <div className="log-container">
          <li>
            <button>Sign In</button>
          </li>
          <li>
            <button aria-label="dark">Sign Up</button>
          </li>
        </div>
        <div className="resources">
          <li>
            <a href="#">Loans</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
        </div>
        <li>
          <a href="#">Houses</a>
          <MdOutlineKeyboardArrowDown />
        </li>
        <li>
          <a href="#">Townhomes</a>
          <MdOutlineKeyboardArrowDown />
        </li>
        <li>
          <a href="#">Apartments</a>
          <MdOutlineKeyboardArrowDown />
        </li>
        <li>
          <a href="#">Land</a>
          <MdOutlineKeyboardArrowDown />
        </li>
        <li>
          <a href="#">Commercial</a>
          <MdOutlineKeyboardArrowDown />
        </li>
      </ul>
    </HeaderStyle>
  );
}
