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
 
`;