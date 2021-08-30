import React from 'react';
import {Modal, Button, Tab, Tabs} from 'react-bootstrap'

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

                <Tabs defaultActiveKey="schema" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="schema" title="schema">
                        <pre>
                            {JSON.stringify(schemaObj, null, 2)}
                        </pre>
                    </Tab>
                    <Tab eventKey="uiSchema" title="uiSchema">
                        <pre>
                            {JSON.stringify(uiSchemaObj, null, 2)}
                        </pre>
                    </Tab>
                </Tabs>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default MyVerticallyCenteredModal
