import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import ListTables from "../../components/ListTables";
import ListTeams from "../../components/ListTeams";
import insertTeamInTable from "../../services/requests/insertTeamInTable";
import serviceGetTeams from "../../services/requests/getTeams";
import serviceGetTables from "../../services/requests/getTables";
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
  const [teams, setTeams] = useState([]);
  const [tables, setTables] = useState([]);
  useEffect(() => {}, []);
  useEffect(() => {
    const getTables = async () => {
      try {
        const responseTables = await serviceGetTables();
        setTables(responseTables.data);
      } catch (error) {
        alert("Erro ao buscar tabelas");
      }
    };
    getTables();
    const getTeams = async () => {
      try {
        const responseTeams = await serviceGetTeams();
        setTeams(responseTeams.data);
      } catch (error) {
        alert("Erro ao buscar tabelas");
      }
    };
    getTeams();
  }, []);
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (!indexTeam || !indexTable) {
        throw Error("Preencha os campos");
      }
      await insertTeamInTable({ indexTeam, indexTable });
      alert("Time cadastrado com sucesso");
    } catch (error) {
      error.message && error.response.status !== 400
        ? alert(error.message)
        : alert(
            "Erro ao vincular time. Verifique os indentificadores e a quantidade de time vinculados a tabela"
          );
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
      <ListTeams teams={teams} />
      <ListTables tables={tables} />
    </Container>
  );
}

export default InsertTeamInTable;
