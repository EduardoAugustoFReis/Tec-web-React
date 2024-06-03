import { Container } from "./styles";

export function Input({ type, id, label, ...rest }) {
  return (
    <Container>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} {...rest} /> 
    </Container>
  );
}
