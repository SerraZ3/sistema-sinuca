import React from "react";
import { Table, Td, Th, Title, Tr } from "./styles";

function ListTeams({ teams }) {
  return (
    <>
      <br />
      <Title>Time</Title>
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
          {teams &&
            teams.map((team, idx) => (
              <tr key={idx}>
                <Td>{idx}</Td>
                <Td>{team.name}</Td>
                <Td>{team.player1.name}</Td>
                <Td>{team.player2.name}</Td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
}

export default ListTeams;
