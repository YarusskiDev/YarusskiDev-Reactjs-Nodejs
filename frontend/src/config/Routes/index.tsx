import CreateUser from "pages/CreateUser";
import ListUser from "pages/ListUser";
import UpdateUser from "pages/UpdateUser";
import React from "react";

import { BrowserRouter, Routes as RoutesDom, Route } from "react-router-dom";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <RoutesDom>
        <Route path="/" element={<ListUser />} />
        <Route path="/create" element={<CreateUser />} />
        <Route path="/update/:id" element={<UpdateUser />} />
      </RoutesDom>
    </BrowserRouter>
  );
};

export default Routes;
