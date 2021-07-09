import {React, useState } from 'react'
import Toolbox from '../components/Toolbox'
import FormViewer from '../components/FormViewer'

function FormBuilder() {
    const [schema, setSchema] = useState({
        "properties": {}
    })

    function addTxtInput() {
        let newSchema= JSON.parse(JSON.stringify(schema));
        newSchema['properties']['Text'] = {
            "title": "Text",
            "type": "string"
        }

        setSchema(newSchema);
    }   
    return (
        <div style={{display: 'flex'}}>
            <FormViewer schema={schema}/>
            <Toolbox addTxtInput={addTxtInput}/>
        </div>
    )
}

export default FormBuilder
