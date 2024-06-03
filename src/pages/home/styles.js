import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 100px auto;
  grid-template-areas: 
  "header"
  "main";
`;

export const Main = styled.div`
  grid-area: main;

  background-color: 	#663399;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2.0rem;

  >h2{
    font-size: 2.2rem;
    color: #fff;
    padding-bottom: 1.0rem;
  }
  
`;

export const Form = styled.form`
  width: 500px;
  background-color: #000;

  display: flex;
  flex-direction: column;

  border-radius: 1.0rem;
  padding: 1.2rem;

  >button{
    background: none;
    border: none;
    font-size: 1.6rem;
    background-color: #fff;
    border-radius: 1.0rem;
    padding: 1.0rem;
    margin-top: 5px;
  }

`;