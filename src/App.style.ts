import styled, { createGlobalStyle} from "styled-components";

import BGImage from "./imgs/bg-img.jpg";

export const GlobalStyle = createGlobalStyle`

html {
    height: 100%;
}

body{
    background-image: url(${BGImage});
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content:center;
}
*{
    box-sizing: border-box;
    font-family:'Catamaran', sans-serif;
}`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > p {
    color: #fff;
  }
  .score {
    color: black;
    font-size: 2rem;
    padding: 10px;
    margin: 10px;
    background-image: linear-gradient(180deg, #fff, #997b59);
    border-radius: 80px

  }
  h1 {
    text-transform: capitalize;
    font-family: Fascinate Inline;
    background-image: linear-gradient(180deg, #fff, #8e6e13);
    font-weight: 400;
    background-size: 100%;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    text-align: center;
    margin: 20px;
    border-radius: 10px;
  }
  .start, .next {
    cursor: pointer;
    background: linear-gradient(180deg, #ffffff, #ffcc99);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }
  .start {
    max-width: 200px;
  }
`;