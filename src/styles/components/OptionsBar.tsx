import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
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
    // const spanElementWidth = document.querySelector("#graph span")?.clientWidth;
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

  // const changeSpanWidth = useCallback(() => {
  //   const graph = document.querySelector("#graph") as HTMLDivElement;
  //   const numbOfElements = 37;
  //   const width = Math.floor(graph?.offsetWidth / 37) - 1;
  //   const spans: Array<HTMLSpanElement> = Array.from(
  //     document.querySelectorAll("#graph span")
  //   );
  //   spans.forEach((span) => {
  //     span.style.width = `${width}px`;
  //   });

  //   console.log(graph.offsetWidth, width, width * 37);
  // }, []);

  useEffect(() => {
    createGraph();

    // window.addEventListener("resize", changeSpanWidth);

    // return () => window.removeEventListener("resize", changeSpanWidth);
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
