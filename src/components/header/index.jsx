import { Container } from "./styles";

import {Link} from "react-router-dom";

export function Header(){
  return(
    <Container>
      <h1>Contatos</h1>

     <li>
      <Link to="/">Home</Link>
      <Link to="/contacts">Meus Contatos</Link>
      </li> 

    </Container>
  )
}