import { useEffect, useState } from "react";
import api from "../../services/api";

import {Container, Main} from "./styles";

import { Header } from "../../components/header";

export function Contacts(){
  const [contatos, setContatos] = useState([]);

  useEffect(()=>{
     
    async function loadData(){
      try {
        const response = await api.get("/contacts");
        console.log(response.data);

        setContatos(response.data);
        
      } catch (error) {
        console.log(error);
      }
     }

     loadData(); 
  }, [])

  return(
    <Container>

      <Header/>

      <Main>
        <h2>Contatos salvos</h2>

        <ul>
          {contatos.map(contato =>{
            return(
            <li key={contato.id}>
              <span>Nome: {contato.nome} - </span> <span>Email: {contato.email} - Telefone: {contato.telefone}</span>
            </li>
            )
          })}
        </ul>
      </Main>
      
    </Container>
  )
}