import {React, useState } from 'react'
import Toolbox from '../components/Toolbox'
import FormViewer from '../components/FormViewer'

function FormBuilder() {
    const [schema, setSchema] =useState({
        "properties": {
            "number": {
                "title": "Number",
                "type": "number"
             },
        }
    })
    return (
        <div style={{display: 'flex'}}>
            <FormViewer schema={schema}/>
            <Toolbox />
        </div>
    )
}

export default FormBuilder
