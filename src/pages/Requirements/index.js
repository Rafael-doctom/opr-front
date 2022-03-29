import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeaderBar from '../../components/HeaderBar';
import Menu from '../../components/Menu';
import { Search } from "@material-ui/icons";

import ListRequirements from '../../components/InitialComponents/ListRequirements';

import './styles.css';

export default function Requirements(props) {
    const [searchKeyword, setSearchKeyword] = useState("");
    const { state } = useLocation()
    const searchKeywordRecieved = state ? state.searchKeyword: "";
    const [searchRequirementsStatus, setSearchRequirementsStatus] = useState(false);

    useEffect(() => {
        if (searchKeywordRecieved) {
            return setSearchRequirementsStatus(true);
        }
    }, [searchKeywordRecieved])

    function searchRequirements() {
        setSearchRequirementsStatus(true);
    }

    return (
        <div className="requirement_page_container">
            <Menu />
            <HeaderBar />
            
            {searchRequirementsStatus ?
                <ListRequirements keyword={searchKeywordRecieved ? searchKeywordRecieved : searchKeyword} />
                :
                <section className="requirement_page_content">
                    <h1>Lista de Requerimentos</h1>
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
                </section>
            }
        </div>
    )
}