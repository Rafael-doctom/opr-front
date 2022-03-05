import React from 'react';
import { CloseOutlined } from '@material-ui/icons';

import './styles.css'

export default function Modal({ children, closeModal }) {
    return (
        <div className="modal_container">
            <div className="modal">
                <button className="close_modal_button" onClick={closeModal}>
                    <CloseOutlined style={{ color: "#000000" }}/> 
                </button>
                {children}
            </div>
        </div>
    )
}