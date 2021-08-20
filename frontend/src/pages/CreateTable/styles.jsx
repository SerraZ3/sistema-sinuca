import styled from "styled-components";
import colors from "../../config/colors";
export const Container = styled.div`
  height: 100vh;
  padding: 20px;
  text-align: center;
  background-color: ${colors.background1};
`;
export const Title = styled.h1`
  color: ${colors.primary};
  font-weight: 700;
`;
export const ContainerForm = styled.div`
  display: grid;
  text-align: left;
`;
export const LabelInput = styled.label`
  color: ${colors.background2};
  font-weight: 700;
  padding: 5px 5px;
`;
export const Form = styled.form`
  width: 30%;
  margin: 0 auto;
`;
export const Input = styled.input`
  border-radius: 5px;
  border: transparent;
  min-height: 20px;
  padding: 5px 10px;
  &:focus {
    outline: none;
  }
`;
export const ButtonSubmit = styled.input`
  width: 100%;
  margin: 20px 0 0 0;
  padding: 10px 0;
  border-radius: 5px;
  border: transparent;
  background-color: ${colors.background2};
  text-align: center;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: ${colors.background1};
    border: 2px solid ${colors.background2};
    color: ${colors.background2};
    font-weight: 700;
  }
`;
