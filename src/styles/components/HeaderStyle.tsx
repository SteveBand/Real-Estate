import styled from "styled-components";

export const HeaderStyle = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 5px;

  h4 {
    letter-spacing: 2px;
    font-weight: 900;
  }
  ul {
    list-style: none;
    display: flex;
    gap: 2px;
    padding: 0;

    li {
      padding: 0 10px;
      display: flex;
      align-items: center;
      cursor: pointer;
      a {
        text-decoration: none;
        color: var(--text-color);
      }
      svg {
        color: #1e1e1ba1;
      }

      button {
        padding: 5px 15px;
        cursor: pointer;
      }
      button[aria-label="dark"] {
        background-color: var(--text-color);
        color: white;
      }
    }
  }
`;
