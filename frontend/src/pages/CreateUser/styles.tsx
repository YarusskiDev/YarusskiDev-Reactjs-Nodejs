import styled from "styled-components";

export const Container = styled.div`
  padding: 0 20px;
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
`;
export const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;
export const Form = styled.form`
  width: 100%;
  @media only screen and (min-width: 450px) {
    width: 450px;
  }
`;
export const ContainerInput = styled.div`
  margin: 10px 0;
`;
export const Label = styled.label``;
export const Input = styled.input`
  width: 100%;
  height: 35px;
  border-radius: 5px;
  border: none;
  box-shadow: none;
  padding: 0 5px;
  &:focus {
    border-bottom: none;
    margin: 0;
    box-shadow: none;
    outline: none;
  }

  /* Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
export const LabelFile = styled(Label)``;
export const InputFile = styled(Input)`
  &::-webkit-file-upload-button {
    display: none;
  }

  &::before {
    content: "Selecione um arquivo";
    display: inline-block;
    background: red;
    border: 1px solid #999;
    background-color: #fff;
    margin: 5px 10px 0 0;
    border-radius: 3px;
    padding: 5px 8px;
    outline: none;
    white-space: nowrap;

    cursor: pointer;

    font-weight: 700;
    font-size: 10pt;
  }
`;
export const Button = styled.button`
  padding: 10px;
  cursor: pointer;

  border-radius: 5px;

  background-color: #fff;
  &:hover {
    background-color: #64b5f6;
    color: #fff;
  }
`;
