import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from "./pages/Login/index";
import Cadastro from "./pages/Cadastro/index";
import Recu from "./pages/RecuperaSenha/index";
import Chat from "./pages/Chat/index";


function Routers() {
    return (
        <BrowserRouter>
            <Routes>

            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/recuperaSenha" element={<Recu />} />
            <Route path="/chat" element={<Chat />} />

                
            </Routes>
            
        </BrowserRouter>
    );
}
export default Routers;