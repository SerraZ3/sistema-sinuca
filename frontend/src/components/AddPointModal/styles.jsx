import styled from "styled-components";
import colors from "../../config/colors";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00000088;
`;
export const Modal = styled.div`
  background-color: ${colors.background1};
  height: 60%;
  width: 60%;
  border-radius: 5px;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  body {
    overflow: hidden;
  }
`;
export const Content = styled.div``;
export const Title = styled.h1`
  padding: 20px 0;
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
  width: 100%;
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
