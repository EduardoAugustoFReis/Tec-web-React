import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 100px auto;
  grid-template-areas: 
  "header"
  "main";

  @media (max-width: 500px){
    display: flex;
    flex-direction: column;
  }

`;

export const Main = styled.div`
  grid-area: main;

  background-color: 	#663399;

  padding-top: 3.0rem;
  padding-left: 1.0rem;

  >h2{
    font-size: 2.2rem;
    color: #fff;
    padding-bottom: 1.0rem;
  }

  >button{
    font-size: 1.6rem;
    border-radius: 1.0rem;
    padding: 1.0rem;
    border: none;
  }

  @media (max-width: 500px){
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 2.0rem 0px;

    >h2{
    font-size: 1.8rem;
    }
   
    >button{
    font-size: 1.2rem;
    padding: 0.8rem;
    }
    
  }
  
`;
