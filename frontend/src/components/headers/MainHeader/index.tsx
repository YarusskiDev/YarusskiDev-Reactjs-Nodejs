import React from "react";

import { Nav, Ul, Li, NavLink } from "./styles";

const MainHeader: React.FC = () => {
  return (
    <Nav>
      <Ul>
        <Li>
          <NavLink to="/"> Listar usuário</NavLink>
        </Li>

        <Li>
          <NavLink to="/create"> Criar usuário</NavLink>
        </Li>
      </Ul>
    </Nav>
  );
};

export default MainHeader;
