import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { CloseOutlined } from '@material-ui/icons';
import Box from '@material-ui/core/Box';
import Modal from '@material-ui/core/Modal';

import './styles.css'

const ModalComponent = forwardRef(({children}, ref) => {
    const [modalStatus, setModalStatus] = useState(false);

    useImperativeHandle(ref, () => ({
        openModal() {
            setModalStatus(true);
        }
    }));

    return (
        <Modal className="modal_container" open={modalStatus} onClose={() => setModalStatus(false)}>
            <Box className="modal">
                <button className="close_modal_button" onClick={() => setModalStatus(false)}>
                    <CloseOutlined style={{ color: "#000000" }}/> 
                </button>
                {children}
            </Box>
        </Modal>
    )
})

export default ModalComponent;