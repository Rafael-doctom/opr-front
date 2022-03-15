import React, { useRef } from 'react';
import Modal from '../../components/ModalRequirements';

import './styles.css';

import { mockRequirement } from '../../service/api';

export default function FAQ() {
    const modalRef = useRef();
    return (
        <div>
            <h1>FAQ Page</h1>
            <Modal ref={modalRef} requirement={mockRequirement} />
            <button onClick={() => modalRef.current.openModal()}>Clica aqui</button>
        </div>
    )
}