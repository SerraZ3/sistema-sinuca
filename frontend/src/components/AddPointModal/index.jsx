import React, { useState } from "react";
import {
  ButtonSubmit,
  Container,
  ContainerForm,
  Content,
  Form,
  Input,
  LabelInput,
  Modal,
  Title,
} from "./styles";

function AddPointModal({ closeModal, team, addPoint, idxTeam }) {
  const [point, setPoint] = useState("");
  const handleAddPoint = async (event) => {
    event.preventDefault();
    try {
      if (!point) {
        throw Error("Preencha os campos");
      }
      await addPoint(idxTeam, point);
      closeModal();
    } catch (error) {
      error.message ? alert(error.message) : alert("Erro ao adicionar ponto");
    }
  };
  return (
    <Container>
      <Modal>
        <Content>
          <Title>Adicionar pontuação no time {team.name}</Title>
          <Form onSubmit={handleAddPoint}>
            <ContainerForm>
              <LabelInput>Pontuação</LabelInput>
              <Input
                type="number"
                value={point}
                onChange={(e) => setPoint(e.target.value)}
              />
            </ContainerForm>
            <ButtonSubmit type="submit" value="Adicionar ponto" />
            <ButtonSubmit
              type="button"
              value="Sair"
              onClick={() => closeModal()}
            />
          </Form>
        </Content>
      </Modal>
    </Container>
  );
}

export default AddPointModal;
