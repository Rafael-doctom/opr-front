import React, { useState } from 'react';
import { Link } from "react-router-dom";

import LoginLogo from "../../assets/LoginLogo.png";
import ProjectLogo from "../../assets/ProjectLogo.png";

import './styles.css';

export default function Register() {
    const [nextStep, setNextStep] = useState(4);
    const [firstStep, setFirstStep] = useState(true);
    const [isCitizen, setIsCitizen] = useState(true);

    function changeStep() {
        setFirstStep(!firstStep);
    }

    function changeTypePerson() {
        setFirstStep(true);
        setIsCitizen(!isCitizen);
    }

    return (
        <div class="pageContainer">
            <div className="formContainer">
                <div className="formLogo">
                    <img className="formLogo" src={ProjectLogo} alt="Project Logo" />
                </div>
                { isCitizen ?
                    <>
                        { firstStep ?
                            <>
                                <div className="inputsArea">
                                    <div className="formTitle">Cadastro de Cidadão</div>
                                    <input className="inputArea" type="text" placeholder="Nome" />
                                    <input className="inputArea" type="text" placeholder="CPF" />
                                    <div className="location">
                                        <input className="inputArea" id="inLocationOne" type="text" placeholder="Estado" />
                                        <input className="inputArea" id="inLocationTwo" type="text" placeholder="Cidade" />
                                    </div>
                                </div>
                                <div className="steps">
                                    <div className="blueStep" />
                                    <div className="grayStep" />
                                </div>
                                {
                                    nextStep === 4 ?
                                        <button className="blueButton" onClick={() => changeStep()}>Continuar</button> :
                                        <button className="grayButton">Continuar</button>
                                } 
                            </> : <>
                                <div className="inputsArea">
                                    <div className="formTitle">Cadastro de Cidadão</div>
                                    <input className="inputArea" type="text" placeholder="Email" />
                                    <input className="inputArea" type="text" placeholder="Senha" />
                                    <input className="inputArea" type="text" placeholder="Confirmação de senha" />
                                </div>
                                <div className="steps">
                                    <div className="grayStep" onClick={() => changeStep()} style={{ cursor: 'pointer' }}/>
                                    <div className="blueStep" />
                                </div>
                                <button className="blueButton">Cadastrar</button>
                            </>
                        }
                        <div className="links">
                            <Link className="forgot_my_password_link" to="/login">
                                Já tenho um cadastro
                            </Link>
                            <Link className="register_link" to="#" onClick={() => changeTypePerson()}>
                                Fazer cadastro de legislativo
                            </Link>
                        </div>
                    </> : <>
                        { firstStep ?
                            <>
                                <div className="inputsArea">
                                    <div className="formTitle">Cadastro de Legislativo</div>
                                    <input className="inputArea" type="text" placeholder="Nome" />
                                    <input className="inputArea" type="text" placeholder="CPF" />
                                    <div className="location">
                                        <input className="inputArea" id="inLocationOne" type="text" placeholder="Estado" />
                                        <input className="inputArea" id="inLocationTwo" type="text" placeholder="Cidade" />
                                    </div>
                                    <input className="inputArea" type="text" placeholder="Partido afiliado" />
                                </div>
                                <div className="steps">
                                    <div className="blueStep" />
                                    <div className="grayStep" />
                                </div>
                                {
                                    nextStep === 4 ?
                                        <button className="blueButton" onClick={() => changeStep()}>Continuar</button> :
                                        <button className="grayButton">Continuar</button>
                                } 
                            </> : <>
                                <div className="inputsArea">
                                    <div className="formTitle">Cadastro de Legislativo</div>
                                    <input className="inputArea" type="text" placeholder="Email" />
                                    <input className="inputArea" type="text" placeholder="Senha" />
                                    <input className="inputArea" type="text" placeholder="Confirmação de senha" />
                                </div>
                                <div className="steps">
                                    <div className="grayStep" onClick={() => changeStep()} style={{ cursor: 'pointer' }}/>
                                    <div className="blueStep" />
                                </div>
                                <button className="blueButton">Cadastrar</button>
                            </>
                        }
                        <div className="links">
                            <Link className="forgot_my_password_link" to="/login">
                                Já tenho um cadastro
                            </Link>
                            <Link className="register_link" to="#" onClick={() => changeTypePerson()}>
                                Fazer cadastro de cidadão
                            </Link>
                        </div>
                    </>
                }
            </div>
            <div>
                <img className="pageLogo" src={LoginLogo} alt="Register Logo" />
            </div>
        </div>
    )
}