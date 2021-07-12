import {React, useState } from 'react'
import Toolbox from '../components/Toolbox'
import FormViewer from '../components/FormViewer'

function FormBuilder() {
    const [schema, setSchema] = useState({
        "properties": {}
    })
    const [uiSchema, setUischema] = useState({})

    function addTxtInput() {
        let newSchema= JSON.parse(JSON.stringify(schema));

        newSchema['properties']["Text_" + Math.floor(Math.random() * 899999 + 100000)] = {
            "title": "Text",
            "type": "string",
        }
        setSchema(newSchema);
        // console.log("schema updated")
    }   

    function addNumInput() {
        let newSchema= JSON.parse(JSON.stringify(schema));
        newSchema['properties']["Num_" + Math.floor(Math.random() * 899999 + 100000)] = {
            "type": "number",
            "title": "Number",
        }
        setSchema(newSchema);
    }
    function addDropdownTxt() {
        let newSchema= JSON.parse(JSON.stringify(schema));
        newSchema['properties']["TxtSelect_" + Math.floor(Math.random() * 899999 + 100000)] = {
            "type": "string",
            "title": "Text select",
            "enum": [
                    "option 1",
                    "option 2",
                    "option 3"
            ]
        }
        setSchema(newSchema);
    }
    function addTxtarea() {
        let newSchema= JSON.parse(JSON.stringify(schema));
        let newUischema = JSON.parse(JSON.stringify(uiSchema));
        let randomNumKey = "Textarea_" + Math.floor(Math.random() * 899999 + 100000);

        newSchema['properties'][randomNumKey] = {
            "type": "string",
            "title": "Text"
        }
        setSchema(newSchema);

        newUischema[randomNumKey] = {
                "ui:widget": "textarea",
                "ui:options": {
                    rows: 4,
                    // "label": true,
                  }
        }
        setUischema(newUischema);
    }
    function addCheckbox() {
        let newSchema= JSON.parse(JSON.stringify(schema));
        newSchema['properties']["Checkbox_" + Math.floor(Math.random() * 899999 + 100000)] = {
            "type": "boolean",
            "title": "Done?",
        }
        setSchema(newSchema);
    }
    function addRadioGroup() {
        let newSchema= JSON.parse(JSON.stringify(schema));
        let newUischema = JSON.parse(JSON.stringify(uiSchema));
        let randomNumKey = "RadioGroup_" + Math.floor(Math.random() * 899999 + 100000);
        newSchema['properties'][randomNumKey] = {
            "type": "string",
            "title": "string enum",
            "enum": [
                "yes",
                "no",
              ]
        }
        setSchema(newSchema);
        newUischema[randomNumKey] = {
            "ui:widget": "radio",
            "ui:options": {
                inline: true,
              }
    }
    setUischema(newUischema);
    }

    return (
        
        <div style={{display: 'flex'}}>
            <FormViewer schema={schema} uiSchema={uiSchema} />
            <Toolbox 
            addTxtInput={addTxtInput} addNumInput={addNumInput} addDropdownTxt={addDropdownTxt} addTxtarea={addTxtarea}
            addCheckbox={addCheckbox} addRadioGroup={addRadioGroup}
            />
        </div>
    )
}

export default FormBuilder
