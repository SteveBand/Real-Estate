import styled from "styled-components";

export const DashboardStyle = styled.section`
  height: 100%;
  gap: 20px;
  max-width: 1520px;
  overflow: hidden;

  margin: 0 auto;
  section.content {
    box-sizing: border-box;
    padding: 20px;
    display: flex;
    gap: 50px;
    height: 100%;

    /* OPTIONS BAR CSS START */

    .options-bar-wrapper {
      flex: 0.33;
      max-width: 370px;
      min-width: 250px;
      nav {
        ul {
          list-style: none;
          display: flex;
          position: relative;
          padding: 0;

          li {
            flex: 1;

            button {
              background-color: transparent;
              width: 100%;
              padding: 8px 0;
              border: 1px solid #80808017;
              border-radius: 2px;
              font-size: 14px;
              cursor: pointer;
              z-index: 1;
              position: relative;
            }

            button[data-active="active"] {
              background-color: #1e1e1b;
              color: white;
            }
          }
        }
      }

      .type {
        margin-top: 3rem;
        p {
          font-weight: 500;
          font-size: 17px;
        }
        label {
          display: block;
          position: relative;
          padding-left: 25px;
          cursor: pointer;
          font-size: 16px;
          user-select: none;
          margin: 12px 0;
        }

        input[type="checkbox"] {
          position: absolute;
          opacity: 0;
        }

        span.checkmark {
          position: absolute;
          top: 3px;
          left: 0;
          height: 15px;
          width: 15px;
          border: 1px solid #80808034;
          border-radius: 2px;
        }

        span.checkmark::after {
          left: 5px;
          top: 2px;
          width: 3px;
          height: 8px;
          border: solid white;
          border-width: 0 2px 2px 0;
          transform: rotate(45deg);
          content: "";
          position: absolute;
          display: none;
        }

        input:checked ~ span.checkmark::after {
          display: block;
        }

        input:checked ~ span.checkmark {
          background-color: black;
        }
      }

      .price-range p {
        font-weight: 500;
        font-size: 17px;
        margin-bottom: 10px;
      }

      .price-range {
        padding: 10px 0;
      }

      .graph {
        position: relative;
        /* min-width: 370px; */
        box-sizing: border-box;
        /* padding: 0 2px; */
        margin-bottom: 20px;
        display: flex;
        align-items: flex-end;
        gap: 1px;

        span {
          display: inline-block;
          flex: 1;
          border: 1px solid gray;
          /* margin: 0 0.5px; */
          box-sizing: border-box;
        }
      }

      .minmax-inputs {
        display: flex;
        justify-content: center;
        gap: 15px;

        div {
          flex: 1;
          width: 100%;

          label {
            display: block;
            font-size: 14px;
            letter-spacing: 0.5px;
            color: var(--text-light-color);
          }

          .input-container {
            width: 100%;
            border: 1px solid var(--light-border);
            box-sizing: border-box;
            overflow-x: visible;
            display: flex;
            padding: 5px;

            span {
              font-size: 18px;
            }

            input {
              width: 100%;
              outline: none;
              padding: 5px 2px;
              border: none;
              font-size: 16px;

              &::-webkit-inner-spin-button {
                -webkit-appearance: none;
              }
            }
          }
        }
      }

      .floor-area {
        box-sizing: border-box;
        padding: 20px 0;

        p {
          font-weight: 500;
          font-size: 17px;
          margin-bottom: 10px;
        }
      }

      .lot-size {
        box-sizing: border-box;
        padding: 20px 0;

        p {
          font-weight: 500;
          font-size: 17px;
          margin-bottom: 10px;
        }
      }

      .year-built {
        input {
          width: 100%;
        }
      }

      /* @media screen and (max-width: ) {
      } */
    }

    /* OPTIONS BAR CSS END */

    /* CONTENT WRAPPER CSS START */

    .content-wrapper {
      flex: 1;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      max-width: 1500px;

      .map-container {
        height: 100%;
        height: 270px;
        width: 100%;
        margin-bottom: 20px;
        filter: grayscale(100%);
        .leaflet-container {
          height: 100%;
          width: 100%;
        }
      }

      .filter {
        p {
          display: flex;
          align-items: center;

          svg {
            font-size: 18px;
          }
        }
      }

      .cards-wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 15px;
        justify-content: center;
        overflow-y: auto;
        max-height: 100%;

        .card {
          width: 100%;
          min-width: 300px;

          .price {
            display: flex;
            justify-content: space-between;
            h3 {
              margin: 0;
              font-weight: 500;
            }
          }

          p {
            font-size: 13px;
            color: #adadad;
            margin-top: 5px;
          }
        }
        img {
          width: 100%;
        }

        @media screen and (max-width: 1380px) {
          grid-template-columns: 1fr 1fr;
        }

        @media screen and (max-width: 1000px) {
          grid-template-columns: 1fr;
        }
      }
    }
  }

  /* CONTENT WRAPPER CSS END */
`;

export const RangeInput = styled.input`
  -webkit-appearance: none;
  margin: 10px 0;
  width: 100%;
  position: absolute;
  background-color: transparent;
  bottom: -10px;
  left: 0;

  &:focus {
    outline: none;
  }
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 1px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 0px 0px 0px #000000;
    background: #ffffff;
    border-radius: 0px;
    border: 0px solid #8a8a8a;
  }
  &::-webkit-slider-thumb {
    box-shadow: 1px 1px 10px #828282;
    border: 0px solid #8a8a8a;
    height: 14px;
    width: 14px;
    border-radius: 50px;
    background: #b9b9b9;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -10.5px;
  }
  &:focus::-webkit-slider-runnable-track {
    background: #ffffff;
  }
  &::-moz-range-track {
    width: 100%;
    height: 1px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 0px 0px 0px #000000;
    background: #ffffff;
    border-radius: 0px;
    border: 0px solid #8a8a8a;
  }
  &::-moz-range-thumb {
    box-shadow: 1px 1px 10px #828282;
    border: 0px solid #8a8a8a;
    height: 22px;
    width: 22px;
    border-radius: 50px;
    background: #dadada;
    cursor: pointer;
  }
  &::-ms-track {
    width: 100%;
    height: 1px;
    cursor: pointer;
    animate: 0.2s;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  &::-ms-fill-lower {
    background: #ffffff;
    border: 0px solid #8a8a8a;
    border-radius: 0px;
    box-shadow: 0px 0px 0px #000000;
  }
  &::-ms-fill-upper {
    background: #ffffff;
    border: 0px solid #8a8a8a;
    border-radius: 0px;
    box-shadow: 0px 0px 0px #000000;
  }
  &::-ms-thumb {
    margin-top: 1px;
    box-shadow: 1px 1px 10px #828282;
    border: 0px solid #8a8a8a;
    height: 22px;
    width: 22px;
    border-radius: 50px;
    background: #dadada;
    cursor: pointer;
  }
  &:focus::-ms-fill-lower {
    background: #ffffff;
  }
  &:focus::-ms-fill-upper {
    background: #ffffff;
  }
`;
