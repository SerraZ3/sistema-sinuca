import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ListTables from "../../components/ListTables";
import ListTeams from "../../components/ListTeams";
import serviceAddPoint from "../../services/requests/addPoint";
import showTable from "../../services/requests/showTable";
import {
  ButtonSubmit,
  Container,
  ContainerForm,
  Form,
  Input,
  LabelInput,
  Title,
} from "./styles";

function AddPoint() {
  const [indexTable, setIndexTable] = useState("");
  const [table, setTable] = useState();
  const history = useHistory();
  const handleRedirect = (url) => history.push(url);

  const handleSearchTable = async (event) => {
    event.preventDefault();
    try {
      if (!indexTable) {
        throw Error("Preencha os campos");
      }
      const responseTable = await showTable({ indexTable });
      setTable(responseTable.data);
    } catch (error) {
      error.message ? alert(error.message) : alert("Erro ao buscar tabela");
    }
  };
  const addPoint = (idxTable) => {
    return async (idxTeam, newPoint) => {
      try {
        await serviceAddPoint({
          indexTable: idxTable,
          indexTeam: idxTeam,
          pointValue: newPoint,
        });
        alert("Ponto adicionado com sucesso");
      } catch (error) {
        error.message ? alert(error.message) : alert("Erro ao adicionar ponto");
      }
    };
  };
  return (
    <Container>
      <Title>Busque por uma tabela</Title>
      <Form onSubmit={handleSearchTable}>
        <ContainerForm>
          <LabelInput>Identificador da tabela</LabelInput>
          <Input
            type="number"
            value={indexTable}
            onChange={(e) => setIndexTable(e.target.value)}
          />
        </ContainerForm>
        <ButtonSubmit type="submit" value="Buscar por tabela" />
        <ButtonSubmit
          type="button"
          value="Voltar menu principal"
          onClick={() => handleRedirect("/")}
        />
      </Form>
      {table && (
        <>
          <ListTables tables={[table]} />
          <ListTeams
            teams={table.teams}
            showPoints
            addPoint={addPoint(indexTable)}
          />
        </>
      )}

      {/* <ContainerForm>
          <LabelInput>Identificador do time</LabelInput>
          <Input
            type="number"
            value={indexTeam}
            onChange={(e) => setIndexTeam(e.target.value)}
          />
        </ContainerForm> */}

      {/* <ListTeams /> */}
      {/* <ListTables /> */}
    </Container>
  );
}

export default AddPoint;
