import {React, useState } from 'react'
import Toolbox from '../components/Toolbox'
import FormViewer from '../components/FormViewer'
import EditPanel from './EditPanel'

function FormBuilder() {
    const [schema, setSchema] = useState({
        "properties": {}
    })
    const [uiSchema, setUischema] = useState({})

    const [showEditPanel, setShowEditPanel] = useState(false)

    const [editFieldKeyName, setEditFieldKeyName] =useState()

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
    function addIntRange() {
        let newSchema= JSON.parse(JSON.stringify(schema));
        let newUischema = JSON.parse(JSON.stringify(uiSchema));
        let randomNumKey = "IntRange_" + Math.floor(Math.random() * 899999 + 100000);
        newSchema['properties'][randomNumKey] = {
            "title": "Integer range",
            "type": "integer",
            "minimum": 42,
            "maximum": 100
        }
        setSchema(newSchema);
        newUischema[randomNumKey] = {
            "ui:widget": "range",
        }
        setUischema(newUischema);
    }
    function addIntRangeSteps() {
        let newSchema= JSON.parse(JSON.stringify(schema));
        let newUischema = JSON.parse(JSON.stringify(uiSchema));
        let randomNumKey = "IntRangeSteps_" + Math.floor(Math.random() * 899999 + 100000);
        newSchema['properties'][randomNumKey] = {
            "title": "Integer range (by steps)",
            "type": "integer",
            "minimum": 10,
            "maximum": 100,
            "multipleOf": 10
        }
        setSchema(newSchema);
        newUischema[randomNumKey] = {
            "ui:widget": "range",
        }
        setUischema(newUischema);
    }
    function addMultipleChoiceList() {
        let newSchema= JSON.parse(JSON.stringify(schema));
        newSchema['properties']["multipleChoiceList_" + Math.floor(Math.random() * 899999 + 100000)] = {
            "type": "array",
            "title": "Pick max two items",
            "uniqueItems": true,
            "maxItems": 2,
            "items": {
              "type": "string",
              "enum": [
                "foo",
                "bar",
                "fuzz"
              ]
            }
        }
        setSchema(newSchema);
    }
    // function addDate() {
    //     let newSchema= JSON.parse(JSON.stringify(schema));
    //     newSchema['properties']["date_" + Math.floor(Math.random() * 899999 + 100000)] = {
    //         "title": "Date",
    //         "type": "string",
    //         "format": "date"
    //     }
    //     setSchema(newSchema);
    // }
    // function addDateTime() {
    //     let newSchema= JSON.parse(JSON.stringify(schema));
    //     newSchema['properties']["dateTime_" + Math.floor(Math.random() * 899999 + 100000)] = {
    //         "title": "Date & Time",
    //         "type": "string",
    //         "format": "date-time"
    //     }
    //     setSchema(newSchema);
    // }
    function addAltDate() {
        let newSchema= JSON.parse(JSON.stringify(schema));
        let newUischema = JSON.parse(JSON.stringify(uiSchema));
        let randomNumKey = "altDate_" + Math.floor(Math.random() * 899999 + 100000);
        newSchema["properties"][randomNumKey]= {
            "title": "Alternative date",
            "type": "string",
            "format": "date"
        }
        newUischema[randomNumKey] = {
            "ui:widget": "alt-date",
            "ui:options": {
                "yearsRange": [
                1980,
                2030
                ]
            }
        }
        setUischema(newUischema);
        setSchema(newSchema);
    }
    function chooseSingleFile() {
        let newSchema= JSON.parse(JSON.stringify(schema));
        newSchema['properties']["chooseSingleFile_" + Math.floor(Math.random() * 899999 + 100000)] = {
            "type": "string",
            "format": "data-url",
            "title": "Single file"
        }
        setSchema(newSchema);
    }
    function chooseMultipleFiles() {
        let newSchema= JSON.parse(JSON.stringify(schema));
        newSchema['properties']["chooseMultipleFiles_" + Math.floor(Math.random() * 899999 + 100000)] = {
            "type": "array",
            "title": "Multiple files",
            "items": {
              "type": "string",
              "format": "data-url"
            }
        }
        setSchema(newSchema);
    }

    function removeField(keyName) {
        let newSchema= JSON.parse(JSON.stringify(schema));
        delete newSchema['properties'][keyName];
        setSchema(newSchema);
    }

    function displayEditPanel(editFieldKeyName) {
        setShowEditPanel(true)
        setEditFieldKeyName(editFieldKeyName)
    }
    function closeEditPanel() {
        setShowEditPanel(false)
    }

    return (
        
        <div style={{display: 'flex', padding: 30, justifyContent: 'space-evenly'}}>
            <FormViewer schema={schema} uiSchema={uiSchema} removeField={removeField} 
            displayEditPanel={displayEditPanel} 
            />
            {
            showEditPanel? <EditPanel editFieldKeyName={editFieldKeyName} closeEditPanel={closeEditPanel}/> :
            <Toolbox 
            addTxtInput={addTxtInput} addNumInput={addNumInput} addDropdownTxt={addDropdownTxt} addTxtarea={addTxtarea}
            addCheckbox={addCheckbox} addRadioGroup={addRadioGroup} addIntRange={addIntRange} addIntRangeSteps={addIntRangeSteps}
            addMultipleChoiceList={addMultipleChoiceList} addAltDate={addAltDate}
            chooseSingleFile={chooseSingleFile} chooseMultipleFiles={chooseMultipleFiles}
            />
            }
        </div>
    )
}

export default FormBuilder
