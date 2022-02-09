import { Button, Input } from "pages/CreateUser/styles";
import Main from "pages/templates/Main";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Title,
  Table,
  Tr,
  Th,
  Td,
  ContainerSearch,
  Form,
  ContainerActions,
  ContainerTable,
} from "./styles";

const ListUserContent: React.FC = () => {
  const [users, setUsers] = useState<any>([]);
  const [search, setSearch] = useState("");
  const [updateUsers, setUpdateUsers] = useState<boolean>(false);
  const navigate = useNavigate();
  useEffect(() => {
    const getUsers = async () => {
      try {
        let res: any = await fetch("http://localhost:3333/users", {
          method: "GET",
        });
        res = await res.json();
        console.log(res);

        setUsers(res.users);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, [updateUsers]);
  const handleDelete = async (id) => {
    try {
      let res = await fetch("http://localhost:3333/users/" + id, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      res = await res.json();
      setUpdateUsers(!updateUsers);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      let res: any = await fetch(
        "http://localhost:3333/users?search=" + search,
        {
          method: "GET",
        }
      );
      res = await res.json();
      console.log(res);

      setUsers(res.users);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <Title>Usuários</Title>
      <ContainerSearch>
        <Form onSubmit={handleSearch}>
          <Input
            type="search"
            placeholder="Pesquise por um nome ou email"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button>Pesquisar</Button>
        </Form>
      </ContainerSearch>
      <ContainerTable>
        <Table>
          <colgroup>
            <col span={1} style={{ width: "10%" }} />
            <col span={1} style={{ width: "25%" }} />
            <col span={1} style={{ width: "25%" }} />
            <col span={1} style={{ width: "25%" }} />
            <col span={1} style={{ width: "25%" }} />
          </colgroup>
          <thead>
            <Tr>
              <Th>ID</Th>
              <Th>Avatar</Th>
              <Th>Nome</Th>
              <Th>E-mail</Th>
              <Th>Ações</Th>
            </Tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <Tr key={idx}>
                <Td>{user.id}</Td>
                <Td>{user.avatar}</Td>
                <Td>{user.name}</Td>
                <Td>{user.email}</Td>
                <Td>
                  <ContainerActions>
                    <Button
                      onClick={() =>
                        navigate(`/update/${user.id}`, { replace: false })
                      }
                    >
                      editar
                    </Button>
                    <Button onClick={() => handleDelete(user.id)}>
                      apagar
                    </Button>
                  </ContainerActions>
                </Td>
              </Tr>
            ))}
          </tbody>
        </Table>
      </ContainerTable>
    </Container>
  );
};

const ListUser: React.FC = () => {
  return (
    <Main>
      <ListUserContent />
    </Main>
  );
};

export default ListUser;
