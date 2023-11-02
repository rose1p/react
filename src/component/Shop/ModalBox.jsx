import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalBox = ({ box, setBox }) => { //show, message, action
    const onclose = () => {
        setBox({
            ...box,
            show: false
        })
    }

    const onConfirm =() => {
        if(box.action) {
            box.action();
        }
        onclose();
    }

    return (
        <>
            <Modal
                show={box.show}
                onHide={onclose}
                backdrop="static"
                keyboard={false}>

                <Modal.Header closeButton>
                    <Modal.Title>{box.action ? '질의' : '알림'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {box.message}
                </Modal.Body>
                <Modal.Footer>
                    {box.action &&
                        <Button variant="secondary" onClick={onclose}>
                            취소
                        </Button>
                    }
                    <Button variant="primary" onClick={onConfirm}>
                        확인
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalBox