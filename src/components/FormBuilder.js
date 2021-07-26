import {React, useState } from 'react'
import Toolbox from '../components/Toolbox'
import FormViewer from '../components/FormViewer'
import EditPanel from './EditPanel'

function FormBuilder() {
    const [schema, setSchema] = useState({
        "title": "A demo form",
        "type": "object",
        "properties": {},
        "required": []
    })
    const [uiSchema, setUischema] = useState({})

    const [showEditPanel, setshowEditPanel] = useState(false)

    const [editFieldKeyName, setEditFieldKeyName] =useState()

    function addTxtInput() {
        let newSchema= JSON.parse(JSON.stringify(schema));
        let newUischema = JSON.parse(JSON.stringify(uiSchema));

        let textFieldKey = "Text_" + Math.floor(Math.random() * 899999 + 100000)

        newSchema['properties'][textFieldKey] = {
            "title": "Text",
            "type": "string",
            // "maxLength": 5,
            // "description": ""
        }
        // newSchema['required'].push(textFieldKey)

        setSchema(newSchema);
        
        newUischema[textFieldKey] = {
            // classNames: "myClass",
            "ui:autofocus": false,
            "ui:options": {
                "inputType": "text",
                // "label": false
              },
            "ui:placeholder": "This is a placeholder",
            // "ui:help": "Hint: Make it strong!",
            // "ui:disabled": false,
            // "ui:readonly": false,
        }
        setUischema(newUischema);
    }   

    function addNumInput() {
        let newSchema= JSON.parse(JSON.stringify(schema));
        let newUischema = JSON.parse(JSON.stringify(uiSchema));

        let numFieldKey = "Num_" + Math.floor(Math.random() * 899999 + 100000)
        newSchema['properties'][numFieldKey] = {
            "type": "number",
            "title": "Number",
            "multipleOf": 2,
            "minimum": 8,
            "maximum": 10
        }
        setSchema(newSchema);

        newUischema[numFieldKey] = {
            "ui:autofocus": false,
            "ui:options": {
                "inputType": "number",
                // "label": false
              },
        }
        setUischema(newUischema);
    }

    function addSelect() {
        let newSchema= JSON.parse(JSON.stringify(schema));
        let newUischema = JSON.parse(JSON.stringify(uiSchema));
        let selectFieldKey = "select_" + Math.floor(Math.random() * 899999 + 100000)

        newSchema['properties'][selectFieldKey] = {
            "title": "Custom select widget with options",
            "type": "string",
            "enum": [
                "option1",
                "option2", 
                "option3"
              ],
              "enumNames": [
                "Option1",
                "Option2",
                "Option3"
              ]
        }
        setSchema(newSchema);
        newUischema[selectFieldKey] = {
           // classNames: "myClass",
           "ui:autofocus": false,
           "ui:options": {
               "inputType": "text",
               // "label": false
             },
        //    "ui:placeholder": "This is a placeholder",
           // "ui:help": "Hint: Make it strong!",
           // "ui:disabled": false,
           // "ui:readonly": false,
        }
        setUischema(newUischema);
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
                  }
        }
        setUischema(newUischema);
    }
    function addCheckbox() {
        let newSchema= JSON.parse(JSON.stringify(schema));
        let newUischema = JSON.parse(JSON.stringify(uiSchema));
        let checkboxKey = "Checkbox_" + Math.floor(Math.random() * 899999 + 100000);

        newSchema['properties'][checkboxKey] = {
            "type": "boolean",
            "title": "Done?",
        }
        setSchema(newSchema);
        newUischema[checkboxKey] = {
            
        }
        setUischema(newUischema);
    }
    function addRadioButtons() {
        let newSchema= JSON.parse(JSON.stringify(schema));
        let newUischema = JSON.parse(JSON.stringify(uiSchema));
        let radioKey = "radioSwitch_" + Math.floor(Math.random() * 899999 + 100000);
        newSchema['properties'][radioKey] = {
            "type": "string",
            "title": "string enum",
            "enum": [
                "yes",
                "no",
                "not sure"   
              ]
        }
        setSchema(newSchema);
        newUischema[radioKey] = {
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
        let intRangeKey = "intRange_" + Math.floor(Math.random() * 899999 + 100000);
        newSchema['properties'][intRangeKey] = {
            "title": "Integer range",
            "type": "integer",
            "minimum": 42,
            "maximum": 100,
            "multipleOf": 10
        }
        setSchema(newSchema);
        newUischema[intRangeKey] = {
            "ui:widget": "range",
        }
        setUischema(newUischema);
    }
    function addMultipleChoiceList() {
        let newSchema= JSON.parse(JSON.stringify(schema));
        let newUischema = JSON.parse(JSON.stringify(uiSchema));
        let multipleChoiceListKey = "multipleChoiceList_" + Math.floor(Math.random() * 899999 + 100000)
        newSchema['properties'][multipleChoiceListKey] = {
            "type": "array",
            "title": "Pick items",
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
        newUischema[multipleChoiceListKey] = {

        }
        setUischema(newUischema);
    }
    function addDate() {
        let newSchema= JSON.parse(JSON.stringify(schema));
        let newUischema = JSON.parse(JSON.stringify(uiSchema));
        let dateKey = "date_" + Math.floor(Math.random() * 899999 + 100000)
        newSchema['properties'][dateKey] = {
            "title": "Date",
            "type": "string",
            "format": "date"
        }
        setSchema(newSchema);
        newUischema[dateKey] = {

        }
        setUischema(newUischema);
    }
    function addDateTime() {
        let newSchema= JSON.parse(JSON.stringify(schema));
        newSchema['properties']["dateTime_" + Math.floor(Math.random() * 899999 + 100000)] = {
            "title": "Date & Time",
            "type": "string",
            "format": "date-time"
        }
        setSchema(newSchema);
    }
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
    function chooseFile() {
        let newSchema= JSON.parse(JSON.stringify(schema));
        let newUischema = JSON.parse(JSON.stringify(uiSchema));
        let chooseFileKey = "chooseFile_" + Math.floor(Math.random() * 899999 + 100000)
        newSchema['properties'][chooseFileKey] = {
            "title": "Select File/Files",
            "type": "string",
            "format": "data-url",
        }
        setSchema(newSchema);
        newUischema[chooseFileKey] = {
            "ui:options": {
                "accept": ".pdf"
              }
        }
        setUischema(newUischema);

    }
    function chooseMultipleFiles() {
        let newSchema= JSON.parse(JSON.stringify(schema));
        let newUischema = JSON.parse(JSON.stringify(uiSchema));
        let chooseMultipleFilesKey = "chooseMultipleFiles_" + Math.floor(Math.random() * 899999 + 100000)
        newSchema['properties'][chooseMultipleFilesKey] = {
            "type": "array",
            "title": "Multiple files",
            "items": {
              "type": "string",
              "format": "data-url"
            }
        }
        setSchema(newSchema);
        newUischema[chooseMultipleFilesKey] = {
            "ui:options": {
                "accept": ".pdf"
            }
        }
        setUischema(newUischema);
    }

    function removeField(keyName) {
        let newSchema= JSON.parse(JSON.stringify(schema));
        delete newSchema['properties'][keyName];
        setSchema(newSchema);
    }

    function displayTextFieldPanel(editFieldKeyName) {
        setshowEditPanel(true)
        setEditFieldKeyName(editFieldKeyName)
    }
    function closePanel() {
        setshowEditPanel(false)
    }

    return (
        
        <div style={{display: 'flex', padding: 30, justifyContent: 'space-evenly'}}>
            <FormViewer schema={schema} uiSchema={uiSchema} removeField={removeField} 
            displayTextFieldPanel={displayTextFieldPanel}
            />

            {
            showEditPanel? 
            <EditPanel 
            setSchema={setSchema} setUischema={setUischema} schema={schema} uiSchema={uiSchema} editFieldKeyName={editFieldKeyName} 
            closePanel={closePanel} /> :
            <Toolbox 
            addTxtInput={addTxtInput} addNumInput={addNumInput} addSelect={addSelect} addTxtarea={addTxtarea}
            addCheckbox={addCheckbox} addRadioButtons={addRadioButtons} addIntRange={addIntRange}
            addMultipleChoiceList={addMultipleChoiceList} addAltDate={addAltDate} addDate={addDate} addDateTime={addDateTime}
            chooseFile={chooseFile} chooseMultipleFiles={chooseMultipleFiles}
            />
            }

            
        </div>
    )
}

export default FormBuilder
