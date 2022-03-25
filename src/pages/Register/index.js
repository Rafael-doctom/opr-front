import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import LoginLogo from "../../assets/LoginLogo.png";
import ProjectLogo from "../../assets/ProjectLogo.png";
import { validateCPF, validateEmail } from '../../utils/validators';
import { registerCitizen } from "../../service/citizen.service";
import { registerLegislator } from "../../service/legislator.service";
import { useUser } from "../../contexts/userContext";

import './styles.css';

export default function Register() {
    const [firstStep, setFirstStep] = useState(true);
    const [name, setName] = useState("")
    const [cpf, setCpf] = useState("")
    const [state, setState] = useState("")
    const [city, setCity] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [filiation, setFiliation] = useState("")
    const [isCitizen, setIsCitizen] = useState(true);
    const [isFormCompleted, setIsFormCompleted] = useState(false);
    const { setCurrentUser } = useUser();

    const navigate = useNavigate();

    useEffect(() => {
        if (isCitizen) {
            if (!!name && !!state && !!city && !!email && !!password && !!passwordConfirmation) {
                let isValid = true;
                isValid = validateEmail(email) && validateCPF(cpf) && (password === passwordConfirmation);

                setIsFormCompleted(isValid);
            } else {
                setIsFormCompleted(false);
            }
        } else {
            if (!!name && !!state && !!city && !!email && !!password && !!passwordConfirmation && !!filiation) {
                let isValid = true;
                isValid = validateEmail(email) && validateCPF(cpf) && (password === passwordConfirmation);

                setIsFormCompleted(isValid);
            } else {
                setIsFormCompleted(false);
            }
        }
    }, [name, cpf, state, city, email, password, passwordConfirmation, filiation, isCitizen])

    function changeStep() {
        setFirstStep(!firstStep);
    }

    function changeTypePerson() {
        setIsFormCompleted(false);
        setFirstStep(true);
        setIsCitizen(!isCitizen);
    }

    function makeClientRegister() {
        const citizenData = {
            "cpf": cpf,
            "nome": name,
            "email": email,
            "cidade": city,
            "senha": password
        }

        registerCitizen(citizenData).then((response) => {
            setCurrentUser(response);
            navigate("/home");
        })
    }

    function makeLegislatorRegister() {
        const legislatorData = {
            "cpf": cpf,
            "nome": name,
            "email": email,
            "cidade": city,
            "senha": password,
            "partido": filiation
        }

        registerLegislator(legislatorData).then((response) => {
            setCurrentUser(response);
            navigate("/home")
        })
    }

    return (
        <div className="pageContainer">
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
                                    <input className="inputArea name" type="text" placeholder="Nome"
                                        value={name}
                                        onChange={(event) => setName(event.target.value)}
                                    />
                                    <input className="inputArea cpf" type="text" placeholder="CPF"
                                        onKeyPress={(event) => {
                                            if (!/[0-9]/.test(event.key)) {
                                              event.preventDefault();
                                            }
                                        }}
                                        value={cpf}
                                        onChange={(event) => setCpf(event.target.value)}
                                    />
                                    <div className="location">
                                        <input className="inputArea" id="inLocationOne" type="text" placeholder="Estado"
                                            defaultValue={state}
                                            onChange={(event) => setState(event.target.value)}
                                        />
                                        <input className="inputArea" id="inLocationTwo" type="text" placeholder="Cidade"
                                            defaultValue={city}
                                            onChange={(event) => setCity(event.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="steps">
                                    <div className="blueStep" />
                                    <div className="grayStep" />
                                </div>
                                <button 
                                    className={isFormCompleted ? "blueButton" : "grayButton"} 
                                    onClick={() => changeStep()}
                                >
                                    Continuar
                                </button>
                            </> : <>
                                <div className="inputsArea">
                                    <div className="formTitle">Cadastro de Cidadão</div>
                                    <input className="inputArea email" type="text" placeholder="Email"
                                        value={email}
                                        onChange={(event) => setEmail(event.target.value)}
                                    />
                                    <input className="inputArea password" type="password" placeholder="Senha"
                                        value={password}
                                        onChange={(event) => setPassword(event.target.value)}
                                    />
                                    <input className="inputArea" type="password" placeholder="Confirmação de senha"
                                        defaultValue={passwordConfirmation}
                                        onChange={(event) => setPasswordConfirmation(event.target.value)}
                                    />
                                </div>
                                <div className="steps">
                                    <div className="grayStep" onClick={() => changeStep()} style={{ cursor: 'pointer' }}/>
                                    <div className="blueStep" />
                                </div>
                                <button 
                                    className={isFormCompleted ? "blueButton" : "grayButton"} 
                                    onClick={() => makeClientRegister()}
                                >
                                    Cadastrar
                                </button>
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
                                    <input className="inputArea" type="text" placeholder="Nome"
                                        value={name}
                                        onChange={(event) => setName(event.target.value)}
                                    />
                                    <input className="inputArea" type="text" placeholder="CPF"
                                        value={cpf}
                                        onChange={(event) => setCpf(event.target.value)}
                                    />
                                    <div className="location">
                                        <input className="inputArea" id="inLocationOne" type="text" placeholder="Estado"
                                            value={state}
                                            onChange={(event) => setState(event.target.value)}
                                        />
                                        <input className="inputArea" id="inLocationTwo" type="text" placeholder="Cidade"
                                            value={city}
                                            onChange={(event) => setCity(event.target.value)}
                                        />
                                    </div>
                                    <input className="inputArea" type="text" placeholder="Partido afiliado"
                                        value={filiation}
                                        onChange={(event) => setFiliation(event.target.value)}
                                    />
                                </div>
                                <div className="steps">
                                    <div className="blueStep" />
                                    <div className="grayStep" />
                                </div>
                                <button 
                                    className={isFormCompleted ? "blueButton" : "grayButton"} 
                                    onClick={() => changeStep()}
                                >
                                    Continuar
                                </button>
                            </> : <>
                                <div className="inputsArea">
                                    <div className="formTitle">Cadastro de Legislativo</div>
                                    <input className="inputArea" type="text" placeholder="Email"
                                        value={email}
                                        onChange={(event) => setEmail(event.target.value)}
                                    />
                                    <input className="inputArea" type="password" placeholder="Senha"
                                        value={password}
                                        onChange={(event) => setPassword(event.target.value)}
                                    />
                                    <input className="inputArea" type="password" placeholder="Confirmação de senha"
                                        value={passwordConfirmation}
                                        onChange={(event) => setPasswordConfirmation(event.target.value)}
                                    />
                                </div>
                                <div className="steps">
                                    <div className="grayStep" onClick={() => changeStep()} style={{ cursor: 'pointer' }}/>
                                    <div className="blueStep" />
                                </div>
                                <button 
                                    className={isFormCompleted ? "blueButton" : "grayButton"} 
                                    onClick={() => makeLegislatorRegister()}
                                >
                                    Cadastrar
                                </button>
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