import React from "react";
import PropTypes from "prop-types";
import "./styles/Main.css";
import List from "./components/List";
import Banner1 from "./components/Banner1";
import Header from "./components/Header";
import Banner2 from "./components/Banner2";
import Footer from "./components/Footer";

const Main = () => {
  const texto = "Desarrollo de aplicaciones para dispositivos moviles";
  const date = "08/octubre/2021";
  const temas = [
    "Tipos de componentes",
    "Contenedores",
    "Usar mas de un componente",
    "Funciones",
    "Props",
    "Prop-Types",
    "DefaultProps",
  ];
  return (
    <>
      <Banner1 Texto={texto} />
      <Header />
      <Banner2 Date={date} />
      <List List={temas} />
      <Footer />
    </>
  );
};

export default Main;
