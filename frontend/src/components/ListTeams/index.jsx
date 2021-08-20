import React, { useEffect, useState } from "react";
import serviceGetTables from "../../services/requests/getTables";
import { Table, Td, Th, Title, Tr } from "./styles";

function ListTeams() {
  const [tables, setTables] = useState([]);
  useEffect(() => {
    const getTables = async () => {
      try {
        const responseTables = await serviceGetTables();
        console.log(responseTables);
        setTables(responseTables.data);
      } catch (error) {
        alert("Erro ao buscar tabelas");
      }
    };
    getTables();
  }, []);
  return (
    <>
      <br />
      <Title>Tabelas</Title>
      <Table>
        <thead>
          <Tr>
            <Th>Identificador</Th>
            <Th>Nome</Th>
            <Th>Prêmiação</Th>
            <Th>Pontuação máxima</Th>
            <Th>Descrição da pontuação</Th>
          </Tr>
        </thead>
        <tbody>
          {tables.map((table, idx) => (
            <tr>
              <Td>{idx}</Td>
              <Td>{table.name}</Td>
              <Td>{table.award}</Td>
              <Td>{table.maxPoint}</Td>
              <Td>{table.descriptionPoint}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default ListTeams;
