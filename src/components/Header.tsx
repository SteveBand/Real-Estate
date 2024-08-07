import React from "react";
import { HeaderStyle } from "../styles/components/HeaderStyle";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export function Header() {
  return (
    <HeaderStyle>
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
          <MdOutlineKeyboardArrowDown />
        </li>
        <li>
          <button>Sign In</button>
        </li>
        <li>
          <button aria-label="dark">Sign Up</button>
        </li>
      </ul>
    </HeaderStyle>
  );
}
