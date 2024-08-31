import styled from "styled-components";

export const HeaderStyle = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 5px;
  position: sticky;
  top: 0;
  left: 0;
  background-color: white;
  z-index: 999;

  .mobile-btn {
    display: none;
    font-size: 22px;
    cursor: pointer;
    transition: 200ms ease;
    &:hover {
      scale: 1.1;
    }
  }

  .mobile-nav {
    position: absolute;
    top: 0;
    right: 0;
    /* width: 300px; */
    /* max-width: 300px; */
    transform: translateX(100%);
    height: 100vh;
    display: block;
    flex-direction: row-reverse;
    background-color: white;
    box-sizing: border-box;
    padding: 0 10px;
    transition: 300ms ease;

    .log-container {
      display: flex;
      gap: 10px;
      width: 100%;
      align-items: start;
      justify-content: center;
      margin: 20px 0;

      button {
        padding: 12px 30px;
        border-radius: 10px;
      }
    }

    .resources {
      display: flex;
      justify-content: space-evenly;
    }
    li {
      margin: 20px 0;
      display: flex;
      justify-content: center;
    }
  }

  [aria-label="active"].mobile-nav {
    transform: translateX(0%);
  }

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

  @media screen and (max-width: 1100px) {
    align-items: center;
    flex-direction: row-reverse;
    padding: 15px 30px;

    h4 {
      font-size: 24px;
      margin: 0;
    }
    .ul-left,
    .ul-right {
      display: none;
    }

    .mobile-btn {
      display: block;
    }
  }
`;
