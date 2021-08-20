import React, { useEffect, useState } from "react";
import { Table, Td, Th, Title, Tr } from "./styles";
import serviceGetTeams from "../../services/requests/getTeams";

function ListTables() {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
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
  return (
    <>
      <br />
      <Title>Times</Title>
      <Table>
        <thead>
          <Tr>
            <Th>Identificador</Th>
            <Th>Nome</Th>
            <Th>Jogador 1</Th>
            <Th>Jogador 2</Th>
          </Tr>
        </thead>
        <tbody>
          {teams.map((table, idx) => (
            <tr>
              <Td>{idx}</Td>
              <Td>{table.name}</Td>
              <Td>{table.player1.name}</Td>
              <Td>{table.player2.name}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default ListTables;
