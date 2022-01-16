import React from "react";
import NavBarComponent from "./NavBarComponent";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";

const Layout = () => {
  return <Outlet />;
};

export default Layout;
