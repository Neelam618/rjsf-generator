import React from 'react'
import Form from "@rjsf/core";

function FormViewer(props) {
    return (
        <div style={{ width: '80%'}}>
            <Form schema={props.schema}/>
        </div>
    )
}

export default FormViewer
