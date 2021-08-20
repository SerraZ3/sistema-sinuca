import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ListTables from "../../components/ListTables";
import ListTeams from "../../components/ListTeams";
import insertTeamInTable from "../../services/requests/insertTeamInTable";
import {
  ButtonSubmit,
  Container,
  ContainerForm,
  Form,
  Input,
  LabelInput,
  Title,
} from "./styles";

function InsertTeamInTable() {
  const [indexTeam, setIndexTeam] = useState("");
  const [indexTable, setIndexTable] = useState("");
  const history = useHistory();
  const handleRedirect = (url) => history.push(url);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (!indexTeam || !indexTable) {
        throw Error("Preencha os campos");
      }
      await insertTeamInTable({ indexTeam, indexTable });
      alert("Time cadastrado com sucesso");
    } catch (error) {
      error.message ? alert(error.message) : alert("Erro ao criar time");
    }
  };
  return (
    <Container>
      <Title>Vincular times a tabela</Title>
      <Form onSubmit={handleSubmit}>
        <ContainerForm>
          <LabelInput>Identificador do time</LabelInput>
          <Input
            type="number"
            value={indexTeam}
            onChange={(e) => setIndexTeam(e.target.value)}
          />
        </ContainerForm>
        <ContainerForm>
          <LabelInput>Identificador da tabela</LabelInput>
          <Input
            type="number"
            value={indexTable}
            onChange={(e) => setIndexTable(e.target.value)}
          />
        </ContainerForm>

        <ButtonSubmit type="submit" value="Inserir time na tabela" />
        <ButtonSubmit
          type="button"
          value="Voltar menu principal"
          onClick={() => handleRedirect("/")}
        />
      </Form>
      <ListTeams />
      <ListTables />
    </Container>
  );
}

export default InsertTeamInTable;
