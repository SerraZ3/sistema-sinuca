import React from "react";
import { useHistory } from "react-router-dom";
import {
  Container,
  ButtonsContainer,
  ButtonRedirect,
  Title,
  Subtitle,
} from "./styles";

const Home = () => {
  const history = useHistory();
  const handleRedirect = (url) => history.push(url);

  return (
    <Container>
      <div>
        <Title>Bem-vindo ao sistema de sinuca!</Title>
        <Subtitle>Escolha a opção desejada</Subtitle>
        <ButtonsContainer>
          <ButtonRedirect onClick={() => handleRedirect("/create-table")}>
            Criar tabela
          </ButtonRedirect>
          <ButtonRedirect onClick={() => handleRedirect("/create-team")}>
            Criar time
          </ButtonRedirect>
          <ButtonRedirect onClick={() => handleRedirect("/insert-team")}>
            Inserir time na tabela
          </ButtonRedirect>
          <ButtonRedirect onClick={() => handleRedirect("/add-points")}>
            Adicionar pontuação a um time
          </ButtonRedirect>
        </ButtonsContainer>
      </div>
    </Container>
  );
};

export default Home;
