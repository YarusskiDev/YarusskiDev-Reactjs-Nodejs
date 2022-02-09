import Main from "pages/templates/Main";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
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
} from "../CreateUser/styles";

const UpdateUserContent: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    const getUser = async () => {
      try {
        let res: any = await fetch("http://localhost:3333/users/" + id, {
          method: "GET",
        });
        res = await res.json();

        setName(res.user.name);
        setEmail(res.user.email);
        setPassword(res.user.password);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [id]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:3333/users/" + id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      res = await res.json();
      alert("Usuário atualizado com sucesso");
    } catch (error) {
      alert("Erro ao atualizar usuário");
      console.log(error);
    }
  };
  return (
    <Container>
      <Title>Atualizar usuário</Title>
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
        <ContainerInput
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Button onClick={() => navigate(-1)}>Cancelar</Button>
          <Button type="submit">Atualizar</Button>
        </ContainerInput>
      </Form>
    </Container>
  );
};

const UpdateUser: React.FC = () => {
  return (
    <Main>
      <UpdateUserContent />
    </Main>
  );
};

export default UpdateUser;
