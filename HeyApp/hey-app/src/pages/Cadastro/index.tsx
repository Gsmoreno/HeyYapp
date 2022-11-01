import React from 'react';

import { useNavigate } from 'react-router-dom';
import { emitKeypressEvents } from 'readline';
import Forma2 from '../images/phone-form2.png';


import './style.css';

function Cadastro() {

    return (

        <>
            <main className='astro'>
                <img src={Forma2} alt="phone-form" />
                <div id="texts">
                    <h2>Hey!</h2>
                    <h2>Crie sua conta</h2>
                    <p>Já é Registrado? <a href="index.html">Faça seu Login</a></p>
                </div>
                <form action="">
                    <label >Nome</label>
                    <input id="name" type="text" placeholder="Usuário" />

                    <label >Email</label>
                    <input id="email" type="email" placeholder="user@email.com" />

                    <label >Senha</label>
                    <input id="password" type="password" placeholder="********" />

                    <label >Repita sua Senha</label>
                    <input id="repeat-password" type="password" placeholder="********" />

                    <input id="submit" type="submit" value="Cadastrar" />
                </form>
            </main>

        </>
    );
}

export default Cadastro;