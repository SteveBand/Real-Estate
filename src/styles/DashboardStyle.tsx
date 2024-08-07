import styled from "styled-components";

export const DashboardStyle = styled.section`
  height: 100%;
  section.content {
    box-sizing: border-box;
    padding: 20px;
    display: flex;
    max-width: 1520px;
    height: 100%;

    /* OPTIONS BAR CSS START */

    .options-bar-wrapper {
      flex: 0.33;

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
        label {
          display: block;
          position: relative;
          padding-left: 25px;
          cursor: pointer;
          font-size: 16px;
          user-select: none;
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
          border: 1px solid #80808017;
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
    }

    /* OPTIONS BAR CSS END */

    /* CONTENT WRAPPER CSS START */

    .content-wrapper {
      flex: 1;
    }
  }

  /* CONTENT WRAPPER CSS END */
`;
