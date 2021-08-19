import styled from "styled-components";
import colors from "../../config/colors";
export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.background1};
`;
export const Title = styled.h1`
  color: ${colors.primary};
  font-weight: 700;
`;
export const Subtitle = styled.h2`
  color: ${colors.background2};
  font-weight: 500;
`;
export const ButtonsContainer = styled.div`
  margin-top: 20px;
`;
export const ButtonRedirect = styled.div`
  cursor: pointer;
  background-color: ${colors.background2};
  padding: 5px 10px;
  border-radius: 5px;
  margin: 10px auto;
  width: 50%;
  text-align: center;
  &:hover {
    background-color: ${colors.primary};
  }
`;
