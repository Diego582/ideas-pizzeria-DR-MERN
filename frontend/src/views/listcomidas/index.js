import React from "react";
import HeaderBanner from "./headerbanner";
import About from "./about";
import Promociones from "./promociones";
import Comentarios from "./comentarios";
import Footer from "./footer";
import Menu from "./menu";



const ListadoComidas = () => {
    return (
        <>
        <HeaderBanner/>
        <About/>
        <Menu/>
        <Promociones/>
        <Comentarios/>
        <Footer/>
        </>
    )
}

export default ListadoComidas