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

  display: flex;
  flex-direction: column;
  padding: 1.2rem 3.0rem;
 
  >h2{
    font-size: 1.8rem;
    color: #fff;
    padding-bottom: 1.0rem;
    border-bottom: 1px solid #fff;
  }

  >ul{
    display: flex;
    flex-wrap: wrap;
    gap: 2.0rem;
    padding-top: 8px;

    li{
      span{
        color: #fff;
        font-size: 1.6rem;
      }
    } 
  }

  @media (max-width: 500px){
    height: 100%;

    h2{
      font-size: 1.6rem;
    }

    >ul{
    li{
      strong{
        font-size: 1.4rem;
      }
      span{
        font-size: 1.2rem;
      }
    } 
    }

  }
`;