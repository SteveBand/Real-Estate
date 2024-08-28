import React from "react";
import { PiHeartDuotone } from "react-icons/pi";

const Card = ({ data }: Props) => {
  function formatPrice(price: number) {
    const string = price.toString();

    let convertedArr: Array<string> = [];
    const newStr = string
      .split("")
      .reverse()
      .forEach((str, index) => {
        const realIndex = index + 1;
        if (realIndex % 3 === 0) {
          convertedArr.push(",");
          convertedArr.push(str);
        } else {
          convertedArr.push(str);
        }
      });
    const format = convertedArr.reverse().join("");
    return format;
  }

  const formattedPrice = formatPrice(data.price);

  return (
    <div className="card">
      <img src="https://www.cio.com/wp-content/uploads/2023/07/shutterstock_676661263.jpg?quality=50&strip=all&w=1024" />
      <footer className="card-footer">
        <div className="price">
          <h3>${formattedPrice}</h3>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#060606"
            width={26}
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke="#b4b3b3"
              stroke-width="0.288"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
                stroke="#d1d1d1"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </div>
        <p>
          <span>{data.bds} bds</span> · <span>{data.ba} ba</span> ·{" "}
          <span>{data.squareMetre} m²</span>
        </p>
      </footer>
    </div>
  );
};

export default Card;

interface Props {
  data: {
    id: string;
    type: string;
    price: number;
    floorArea: string;
    lotSize: string;
    yearBuilt: number;
    bds: number;
    ba: number;
    squareMetre: number;
    country: string;
    city: string;
  };
}
