import React from 'react';

import { useNavigate } from 'react-router-dom';
import { emitKeypressEvents } from 'readline';
import FotoLogo from '../../pages/images/phone-form2.png';


import './style.css';

function RecuperaSenha() {

    return (

        <>
            <main  className='forte'>
                <img src={FotoLogo} alt="phone-form" />
                <div id="texts">
                    <h2>Hey!</h2>
                    <h2>Esqueceu sua Senha?</h2>
                </div>
                <form action="">
                    <label >Email</label>
                    <input id="email" type="email" placeholder="user@email.com" />

                    <input id="submit" type="submit" value="Enviar" />
                    <button><a href="index.html">Voltar</a></button>
                </form>
            </main>

        </>
    );
}

export default RecuperaSenha;