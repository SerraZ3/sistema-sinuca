import React, { useState } from "react";
import createTable from "../../services/requests/createTable";
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

function CreateTable() {
  const [name, setName] = useState("");
  const [award, setAward] = useState("");
  const [maxPoint, setMaxPoint] = useState("");
  const [descriptionPoint, setDescriptionPoint] = useState("");
  const history = useHistory();
  const handleRedirect = (url) => history.push(url);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (!name || !award || !maxPoint || !descriptionPoint) {
        throw Error("Preencha os campos");
      }
      await createTable({ name, award, maxPoint, descriptionPoint });
      alert("Tabela cadastrada com sucesso");
    } catch (error) {
      error.message ? alert(error.message) : alert("Erro ao cadastrar tabela");
    }
  };
  return (
    <Container>
      <Title>Adicionar Tabela</Title>
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
          <LabelInput>Prêmio</LabelInput>
          <Input
            type="text"
            value={award}
            onChange={(e) => setAward(e.target.value)}
          />
        </ContainerForm>
        <ContainerForm>
          <LabelInput>Máximo de pontos</LabelInput>
          <Input
            type="number"
            value={maxPoint}
            onChange={(e) => setMaxPoint(e.target.value)}
          />
        </ContainerForm>
        <ContainerForm>
          <LabelInput>Descrição para ganhar pontuação</LabelInput>
          <Input
            type="text"
            value={descriptionPoint}
            onChange={(e) => setDescriptionPoint(e.target.value)}
          />
        </ContainerForm>

        <ButtonSubmit type="submit" value="Enviar" />
        <ButtonSubmit
          type="button"
          value="Voltar menu principal"
          onClick={() => handleRedirect("/")}
        />
      </Form>
    </Container>
  );
}

export default CreateTable;
