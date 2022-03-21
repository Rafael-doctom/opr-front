import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeaderBar from '../../components/HeaderBar';
import Menu from '../../components/Menu';
import { Search } from "@material-ui/icons";

import './styles.css';

export default function Requirements(props) {
    const [searchKeyword, setSearchKeyword] = useState("");
    const [requirements, setRequirements] = useState([]);
    const { state } = useLocation()
    const searchKeywordRecieved = state ? state.searchKeyword: "";

    useEffect(() => {
        if (searchKeywordRecieved) {
            // TODO: Fazer busca de requerimentos a partir de palavra chave recebida
            return setRequirements([]);
        }
    }, [searchKeywordRecieved])

    function searchRequirements() {
        // TODO: Busca de requerimentos
    }

    return (
        <div className="requirement_page_container">
            <Menu />
            <HeaderBar />
            
            <section className="requirement_page_content">
                <h1>Lista de Requerimentos</h1>

                {requirements.length > 0 ?
                    <strong>Requerimentos</strong>
                    :
                    <div className="without_requirement">
                        <strong>Qual tipo de requerimento você está buscando encontrar?</strong>
                        <div className="search_input_container">
                            <input
                                placeholder="Palavra chave" 
                                defaultValue={searchKeyword}
                                onChange={(event) => setSearchKeyword(event.target.value)}
                            />
                            <button onClick={() => searchRequirements()}>
                                <Search style={{ color: "#0A68F4"}}/>
                            </button>
                        </div>
                    </div>
                }
            </section>
        </div>
    )
}