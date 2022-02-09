import styled from "styled-components";

export const Container = styled.div`
  padding: 0 20px;
  width: 100%;
`;
export const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;
export const ContainerTable = styled.div`
  width: 100%;
  overflow-x: auto;
`;
export const Table = styled.table`
  width: 100%;
  background-color: #fff;
  border-radius: 5px;
`;
export const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
  &:hover {
    background-color: #ddd;
  }
`;
export const Th = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #64b5f6;
  color: white;
`;

export const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;
export const ContainerSearch = styled.div``;
export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px auto;
  @media only screen and (min-width: 600px) {
    width: 50%;
  }
`;
export const ContainerActions = styled.div`
  display: flex;
  justify-content: space-around;
`;
