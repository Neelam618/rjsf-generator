import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';

function MyVerticallyCenteredModal(props) {
    const schemaObj = {
        schema: props.schema
    };
    const uiSchemaObj = {
        uiSchema: props.uiSchema
    };
    return (
        <>
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Schema
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <pre>
                    {JSON.stringify(schemaObj, null, 2)}<br />
                    {JSON.stringify(uiSchemaObj, null, 2)}
                </pre>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}

export default MyVerticallyCenteredModal
