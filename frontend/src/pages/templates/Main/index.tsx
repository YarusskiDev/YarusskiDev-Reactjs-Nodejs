import MainHeader from "components/headers/MainHeader";
import React from "react";

import { Container, MainContent } from "./styles";

const Main: React.FC = ({ children }) => {
  return (
    <Container>
      <MainHeader />
      <MainContent>{children}</MainContent>
    </Container>
  );
};

export default Main;
