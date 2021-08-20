import React, { useState } from "react";
import createTeam from "../../services/requests/createTeam";
import { useHistory } from "react-router-dom";
import {
  Container,
  Title,
  ContainerForm,
  Form,
  LabelInput,
  Input,
  ButtonSubmit,
} from "./styles";

function CreateTeam() {
  const [name, setName] = useState("");
  const [namePlayer1, setNamePlayer1] = useState("");
  const [namePlayer2, setNamePlayer2] = useState("");
  const history = useHistory();
  const handleRedirect = (url) => history.push(url);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (!name || !namePlayer1 || !namePlayer2) {
        throw Error("Preencha os campos");
      }
      await createTeam({ name, namePlayer1, namePlayer2 });
      alert("Time cadastrado com sucesso");
    } catch (error) {
      error.message ? alert(error.message) : alert("Erro ao criar time");
    }
  };
  return (
    <Container>
      <Title>Criar Time</Title>
      <Form onSubmit={handleSubmit}>
        <ContainerForm>
          <LabelInput>Nome</LabelInput>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </ContainerForm>
        <ContainerForm>
          <LabelInput>Nome do jogador 1</LabelInput>
          <Input
            type="text"
            value={namePlayer1}
            onChange={(e) => setNamePlayer1(e.target.value)}
          />
        </ContainerForm>
        <ContainerForm>
          <LabelInput>Nome do jogador 2</LabelInput>
          <Input
            type="text"
            value={namePlayer2}
            onChange={(e) => setNamePlayer2(e.target.value)}
          />
        </ContainerForm>
        <ButtonSubmit type="submit" value="Cadastrar" />
        <ButtonSubmit
          type="button"
          value="Voltar menu principal"
          onClick={() => handleRedirect("/")}
        />
      </Form>
    </Container>
  );
}

export default CreateTeam;
