import React from "react";
import { Table, Td, Th, Title, Tr } from "./styles";

function ListTables({ tables }) {
  return (
    <>
      <br />
      <Title>Tabela</Title>
      <Table>
        <thead>
          <Tr>
            <Th>ID</Th>
            <Th>Nome</Th>
            <Th>Prêmiação</Th>
            <Th>Pontuação máxima</Th>
            <Th>Descrição da pontuação</Th>
            <Th>Status</Th>
          </Tr>
        </thead>
        <tbody>
          {tables &&
            tables.map((table, idx) => (
              <tr key={idx}>
                <Td>{idx}</Td>
                <Td>{table.name}</Td>
                <Td>{table.award}</Td>
                <Td>{table.maxPoint}</Td>
                <Td>{table.descriptionPoint}</Td>
                <Td>{table.isActive ? "Ativo" : "Finalizado"}</Td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
}

export default ListTables;
