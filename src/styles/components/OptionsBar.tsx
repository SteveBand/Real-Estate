import React, { useRef, useState } from "react";

export function OptionsBar() {
  const [selected, setSelected] = useState("Buy");
  function handleActivate(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const value = e.currentTarget.innerHTML;
    setSelected(value);
  }
  return (
    <section className="options-bar-wrapper">
      <nav>
        <ul>
          <li>
            <button
              data-active={selected === "Buy" ? "active" : ""}
              onClick={handleActivate}
            >
              Buy
            </button>
          </li>
          <li>
            <button
              data-active={selected === "Sell" ? "active" : ""}
              onClick={handleActivate}
            >
              Sell
            </button>
          </li>
          <li>
            <button
              data-active={selected === "Rent" ? "active" : ""}
              onClick={handleActivate}
            >
              Rent
            </button>
          </li>
        </ul>
      </nav>
      <article className="type">
        <p>Real estate type</p>
        <label htmlFor="houses">
          Houses
          <input type="checkbox" id="houses" />
          <span className="checkmark"></span>
        </label>
      </article>
    </section>
  );
}
