import styled from "styled-components";
import colors from "../../config/colors";
export const Title = styled.h1`
  color: ${colors.primary};
  font-weight: 700;
`;
export const Table = styled.table`
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  color: white;
  text-align: left;

  width: 60%;
  margin: 10px auto;
`;
export const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;
export const Th = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: #00acc1;
`;
export const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
  &:hover {
    background-color: #ddd;
  }
`;
