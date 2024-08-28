import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { RangeInput } from "../DashboardStyle";

export function OptionsBar() {
  const [selected, setSelected] = useState("Buy");
  const [dragValue, setDragValue] = useState<number>(0);
  const [range, setRange] = useState({
    min: 1000000,
    max: 20000000,
  });
  function handleActivate(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const value = e.currentTarget.innerHTML;
    setSelected(value);
  }

  // function createCanvas() {
  //   var c = document.getElementById("range") as HTMLCanvasElement;
  //   var ctx = c.getContext("2d");
  //   var circle = c.getContext("2d");
  //   ctx?.beginPath();
  //   ctx?.clearRect(0, 0, c.width, c.height);
  //   let numberOfRect = 30;
  //   let rectWidth = c.width / numberOfRect - 4;
  //   let height = 10;
  //   let startingPoint = 5;
  //   if (ctx && circle) {
  //     for (let i = 0; i <= numberOfRect; i++) {
  //       if (i > 15) {
  //         height -= 4;
  //         startingPoint += rectWidth + 2;
  //       } else {
  //         height += 4;
  //         startingPoint += rectWidth + 2;
  //       }
  //       ctx?.rect(startingPoint, c.height - height, rectWidth, height);
  //       ctx?.stroke();
  //     }

  //     ctx.fillStyle = "white";
  //     // ctx.fill();
  //     // ctx?.stroke();

  //     circle.arc(20, c.height, 10, 0, 2 * Math.PI);
  //     circle.fillStyle = "black";
  //     circle.fill();
  //     circle.stroke();
  //   }
  // }

  function createGraph() {
    const graphContainer = document.getElementById("graph") as HTMLDivElement;
    const spansArr = Array.from(document.querySelectorAll("#graph span"));
    spansArr.forEach((el) => el.remove());
    const numbOfElements = 38;
    let height = 5;
    const width = Math.floor(graphContainer.offsetWidth) / numbOfElements - 1;

    for (let i = 0; i < numbOfElements; i++) {
      const newRect = document.createElement("span");
      newRect.style.height = `${height}px`;
      newRect.style.width = `${width}px`;
      newRect.setAttribute("aria-label", `${i}`);
      graphContainer?.appendChild(newRect);
      if (i > 19) {
        height -= 2;
      } else if (i < 19) {
        height += 2;
      }
    }
  }

  function handleDrag(e: ChangeEvent<HTMLInputElement>) {
    const inputValue: number = Number(e.target.value);
    const numbOfElements = 37;
    const spanElementWidth = document.querySelector("#graph span")?.clientWidth;
    const spanElements = Array.from(
      document.querySelectorAll("#graph span")
    ) as Array<HTMLSpanElement>;
    const laps = (range.max - range.min) / numbOfElements;
    const currentLabel = Math.ceil(inputValue / laps) - 2;

    spanElements.forEach((el) => {
      if (Number(el.ariaLabel) <= currentLabel) {
        el.style.backgroundColor = "black";
      } else {
        el.style.backgroundColor = "white";
      }
    });
  }

  useEffect(() => {
    createGraph();
  }, []);
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
        <label htmlFor="townhomes">
          Townhomes
          <input type="checkbox" id="townhomes" />
          <span className="checkmark"></span>
        </label>
        <label htmlFor="multi-family">
          Multi-family
          <input type="checkbox" id="multi-family" />
          <span className="checkmark"></span>
        </label>
        <label htmlFor="condos">
          Condos/Co-ops
          <input type="checkbox" id="condos" />
          <span className="checkmark"></span>
        </label>
        <label htmlFor="lots">
          Lots/Land
          <input type="checkbox" id="lots" />
          <span className="checkmark"></span>
        </label>
        <label htmlFor="apartments">
          Apartments
          <input type="checkbox" id="apartments" />
          <span className="checkmark"></span>
        </label>
        <label htmlFor="commercial">
          Commercial
          <input type="checkbox" id="commercial" />
          <span className="checkmark"></span>
        </label>
      </article>

      <article className="price-range">
        <p>Price Range</p>
        {/* <canvas id="range"></canvas> */}
        <article className="graph" id="graph">
          <RangeInput
            type="range"
            onChange={handleDrag}
            min={range.min}
            max={range.max}
          />
        </article>
        <div className="minmax-inputs">
          <div>
            <label htmlFor="min">Minimum</label>
            <div className="input-container">
              <span>$</span>
              <input type="number" id="min" />
            </div>
          </div>
          <div>
            <label htmlFor="max">Maximum</label>
            <div className="input-container">
              <span>$</span>
              <input type="number" id="max" />
            </div>
          </div>
        </div>
      </article>

      <article className="floor-area">
        <p>Floor area</p>
        <div className="minmax-inputs">
          <div>
            <label htmlFor="min">Minimum</label>
            <div className="input-container">
              <input type="number" id="min" />
              <span>m²</span>
            </div>
          </div>
          <div>
            <label htmlFor="max">Maximum</label>
            <div className="input-container">
              <input type="number" id="max" />
              <span>m²</span>
            </div>
          </div>
        </div>
      </article>

      <article className="lot-size">
        <p>Lot size</p>
        <div className="minmax-inputs">
          <div>
            <label htmlFor="min">Minimum</label>
            <div className="input-container">
              <input type="number" id="min" />
              <span>m²</span>
            </div>
          </div>
          <div>
            <label htmlFor="max">Maximum</label>
            <div className="input-container">
              <input type="number" id="max" />
              <span>m²</span>
            </div>
          </div>
        </div>
      </article>

      <article className="year-built">
        <p>Year built</p>
        <input type="range" />
        <div className="minmax-inputs">
          <div>
            <label htmlFor="min">From</label>
            <div className="input-container">
              <input type="number" id="min" />
            </div>
          </div>
          <div>
            <label htmlFor="max">To</label>
            <div className="input-container">
              <input type="number" id="max" />
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
