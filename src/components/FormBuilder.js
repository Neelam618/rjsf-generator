import {React, useState } from 'react'
import Toolbox from '../components/Toolbox'
import FormViewer from '../components/FormViewer'

function FormBuilder() {
    const [schema, setSchema] = useState({
        "properties": {}
    })

    function addTxtInput() {
        let newSchema= JSON.parse(JSON.stringify(schema));

        newSchema['properties']["Text_" + Math.floor(Math.random() * 899999 + 100000)] = {
            "title": "Text",
            "type": "string"
        }
        setSchema(newSchema);
        console.log("schema updated")
    }   

    function addNumInput() {
        let newSchema= JSON.parse(JSON.stringify(schema));
        newSchema['properties']["Num" + Math.floor(Math.random() * 899999 + 100000)] = {
            "title": "Number",
            "type": "number"
        }
        setSchema(newSchema);
    }
    return (
        <div style={{display: 'flex'}}>
            <FormViewer schema={schema}/>
            <Toolbox addTxtInput={addTxtInput} addNumInput={addNumInput}/>
        </div>
    )
}

export default FormBuilder
