import React from 'react';

import { useNavigate } from 'react-router-dom';
import { emitKeypressEvents } from 'readline';
import FotoLogo from '../../pages/images/phone-form2.png';
import Mulher from '../../pages/images/homem.png';
import Homem from '../../pages/images/menina.png';
import Cam from '../../pages/images/cam.png';
import Emoji from '../../pages/images/wow.png';
import Env from '../../pages/images/enviar.png';


import './style.css';

function Chat() {

    return (

        <>
            <div className='cima'>
                <div className="arruma">
                    <div className="esquerda">
                        <img src={Mulher} alt="" />
                    </div>
                    <div className="ctt">
                        <div className="mano">
                            <img src={Homem} alt="" />

                        </div>
                        <div className="mano">
                            <img src={Mulher} alt="" />

                        </div>
                        <div className="mano">
                            <img src={Homem} alt="" />

                        </div>
                    </div>
                </div>
                <div className="arruma">
                    <div className="direita">
                        <img src={Homem} alt="" />

                    </div>
                    <div >
                        <div className="borra">

                        </div>
                        <div className="input">
                            <img src={Emoji} alt="" /> 
                            <img src={Cam} alt="" />
                            <input id='manda' type="text" placeholder='Menssagem' />
                            <img id='env' src={Env} alt="" />

                        </div>

                    </div>
                </div>
            </div>

        </>
    );
}

export default Chat;