import React, { useRef } from 'react';
import moment from 'moment';

import './styles.css';

import Modal from '../Modal';

export default function Requirement({requirement}) {
    const showReqModalRef = useRef();
    const requirementUser = requirement.user;

    function renderRequirementStatus() {
        console.log(requirement)
        if (requirement.status) {
            return (
                <div className="requirement_status finished">
                    <span>Concluído</span>
                </div>
            )
        } else {
            return (
                <div className="requirement_status closed">
                    <span>Não aceito</span>    
                </div>
            )
        }
    }

    function getDateFormated() {
        return moment.unix(requirement.creationDate).format("DD/MM/YYYY");
    }

    return (
        <>
            <div className="requirement_container" onClick={() => showReqModalRef.current.openModal()}>
                {renderRequirementStatus()}

                <section className="requirement_user">
                    <div className="user_image">
                        <img src="/profile.png" alt="user-image" />
                    </div>
                    <div className="user_infos">
                        <span>{requirementUser.name}</span>
                        <span>{requirementUser.location}</span>
                    </div>
                </section>

                <section className="requirement_infos">
                    <strong>{requirement.title}</strong>
                    <p>{requirement.description}</p>
                </section>

                <section className="requirement_date">
                    <label>Data de publicação:</label>
                    <br />
                    <span>{getDateFormated()}</span>
                </section>

            </div>
            <Modal ref={showReqModalRef}>
                <h1>Visualizar requerimento</h1>    
            </Modal>
        </>
    )
}