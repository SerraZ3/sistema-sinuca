import React, { useState } from "react";
import AddPointModal from "../AddPointModal";
import { Table, Td, Th, Title, Tr } from "./styles";

function ListTeams({ teams, showPoints, addPoint }) {
  const [openModal, setOpenModal] = useState(false);
  const [idxTeam, setIdxTeam] = useState();
  return (
    <>
      <br />
      {openModal && (
        <AddPointModal
          team={teams[idxTeam]}
          idxTeam={idxTeam}
          addPoint={addPoint}
          closeModal={() => setOpenModal(false)}
        />
      )}
      <Title>Time</Title>
      <Table>
        <thead>
          <Tr>
            <Th>ID</Th>
            <Th>Nome</Th>
            <Th>Jogador 1</Th>
            <Th>Jogador 2</Th>
            {showPoints && (
              <>
                <Th>Pontos</Th>
                <Th>Adicionar pontuação</Th>
              </>
            )}
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
                {showPoints && (
                  <>
                    <Td>{team.point.totalValue}</Td>
                    <Td
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setIdxTeam(idx);
                        setOpenModal(true);
                      }}
                    >
                      Clique para adicionar
                    </Td>
                  </>
                )}
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
}

export default ListTeams;
