import {Container, Main} from "./styles";

import { Header } from "../../components/header";

import { useNavigate } from "react-router-dom";

export function NotFoundPage(){
  const navigate = useNavigate();
  
  function handleBack(){
    navigate("/");
  }
  return(
    <Container>
     <Header/>

      <Main>
        <h2>Página não encontrada!</h2>

        <button onClick={handleBack}>Voltar para página inicial</button>
      </Main>

    </Container>
  )
}