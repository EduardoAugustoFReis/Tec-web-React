import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  grid-area: header;

  background-color: #000;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.0rem;

  >h1{
    font-size: 2.6rem;
    color: #fff;
  }

  ul{

    >li{
      display: flex;
      gap: 1.0rem;

      a{
        font-size: 1.6rem;
        color: #fff;
        
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  @media (max-width: 500px){

    >h1{
    font-size: 1.6rem;
    color: #fff;
    }

    ul{
      >li{
        display: flex;
        align-items: center;
        gap: 5px;
        a{
          font-size: 1.0rem;
        }
      }
    }

  }
`;
