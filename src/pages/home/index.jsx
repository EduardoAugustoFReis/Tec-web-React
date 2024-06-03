import {useState} from "react";
import api from "../../services/api";

import {Container, Main, Form} from "./styles";

import { Header } from "../../components/header";
import { Input } from "../../components/input";

export function Home(){

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  async function handleSubmit(event){
    event.preventDefault();

    if (!nome || !email || !telefone) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    try {
      const response = await api.post("/contacts",{
        nome,
        email,
        telefone,
      });

      console.log(response.data);
    
      alert("Cadastro realizado com sucesso!")

      setNome('');
      setEmail('');
      setTelefone('');
      
    } catch (error) {
      console.error(error);
    }
  }
  
  return(
    <Container>

      <Header/>

      <Main>
        <h2>Salve seus contatos</h2>

      <Form onSubmit={handleSubmit}>

       <Input 
       type="text" 
       placeholder="Ex: Ana"
       label="Nome"
       value={nome}
       onChange={(e) => setNome(e.target.value)}
       />

       <Input 
       type="email" 
       placeholder="Ex: ana@email.com"
       label="Email"
       value={email}
       onChange={(e) => setEmail(e.target.value)}
       />

       <Input 
       type="text" 
       placeholder="Ex: 61 99999-9999"
       label="Telefone"
       value={telefone}
       onChange={(e) => setTelefone(e.target.value)}
       />

       <button type="submit">Cadastrar</button>

      </Form>

      </Main>
      
    </Container>
  )
}