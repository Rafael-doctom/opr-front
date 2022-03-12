import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { CloseOutlined } from '@material-ui/icons';
import Box from '@material-ui/core/Box';
import Modal from '@material-ui/core/Modal';

import './styles.css'

const ModalComponent = forwardRef(({children, additionalClass}, ref) => {
    const [modalStatus, setModalStatus] = useState(false);
    console.log(modalStatus)

    useImperativeHandle(ref, () => {
        return {
            openModal: () => {
                setModalStatus(true);
            },
            closeModal: () => {
                setModalStatus(false);
            }
        }
    }, [ref]);

    return (
        <Modal className="modal_container" open={modalStatus} onClose={() => setModalStatus(false)}>
            <Box className={`modal ${additionalClass}`} >
                <button className="close_modal_button" onClick={() => setModalStatus(false)}>
                    <CloseOutlined style={{ color: "#000000" }}/> 
                </button>
                {children}
            </Box>
        </Modal>
    )
})

export default ModalComponent;