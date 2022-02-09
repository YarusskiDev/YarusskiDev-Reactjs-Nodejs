import Main from "pages/templates/Main";
import React from "react";
import { useState } from "react";

import {
  Container,
  Title,
  Form,
  Input,
  Button,
  ContainerInput,
  Label,
  InputFile,
  LabelFile,
} from "./styles";

const CreateUserContent: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:3333/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      res = await res.json();
      console.log(res);

      alert("Usuário criado com sucesso!");
      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      alert("Erro ao cadastrar usuário");
      console.log(error);
    }
  };
  return (
    <Container>
      <Title>Cadastar usuário</Title>
      <Form onSubmit={handleSubmit}>
        <ContainerInput>
          <Label htmlFor="name">Nome</Label>
          <Input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </ContainerInput>
        <ContainerInput>
          <Label htmlFor="email">E-mail</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </ContainerInput>
        <ContainerInput>
          <Label htmlFor="password">Senha</Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </ContainerInput>
        <ContainerInput>
          <LabelFile htmlFor="file">Avatar</LabelFile>
          <InputFile id="file" type="file" accept="image/*" />
        </ContainerInput>
        <ContainerInput>
          <Button type="submit">Cadastrar</Button>
        </ContainerInput>
      </Form>
    </Container>
  );
};

const CreateUser: React.FC = () => {
  return (
    <Main>
      <CreateUserContent />
    </Main>
  );
};

export default CreateUser;
