import React from 'react';

import { useNavigate } from 'react-router-dom';
import { emitKeypressEvents } from 'readline';
import FotoLogo from '../../pages/images/phone-form2.png';


import './style.css';

function Login() {

    return (

        <>
            <main className='bode'>
                <img src={FotoLogo} alt="phone-form" />

                <form action="">
                    <label >Nome</label>
                    <input id="name" type="text" placeholder="Usuário" />

                    <label >Senha</label>
                    <input id="password" type="password" placeholder="********" />

                    <input id="submit" type="submit" value="Entrar" />

                    <div id="buttons">
                        <button><a href="recuperar-senha.html">Esqueceu a senha?</a></button>
                        <button><a href="criar-conta.html">Cadastre-se !</a></button>
                    </div>
                </form>
            </main>

        </>
    );
}

export default Login;