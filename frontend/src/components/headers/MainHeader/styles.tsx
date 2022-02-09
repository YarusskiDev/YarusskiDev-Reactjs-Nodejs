import styled from "styled-components";
import { NavLink as NavLinkRoute } from "react-router-dom";

export const Nav = styled.nav`
  width: 100%;
  height: 56px;
  @media only screen and (min-width: 992px) {
    height: 64px;
  }
  margin-bottom: 20px;
`;
export const Ul = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style-type: none;
`;
export const Li = styled.li`
  text-decoration: none;
  width: 100%;
`;
export const NavLink = styled(NavLinkRoute)`
  color: #000;
  background-color: #fff;

  &:hover {
    background-color: #64b5f6;
    color: #fff;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: 100%;
  height: 56px;
  font-weight: 600;
  @media only screen and (min-width: 992px) {
    height: 64px;
  }
`;
