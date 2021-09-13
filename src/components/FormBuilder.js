import { React, useState } from 'react'
import Toolbox from '../components/Toolbox'
import FormViewer from '../components/FormViewer'
import EditPanel from './EditPanel'
import './styles.css'

function FormBuilder() {
    const [schema, setSchema] = useState({
        "title": "A demo form",
        "type": "object",
        "properties": {},
        "required": []
    })
    const [uiSchema, setUischema] = useState({
        "ui:order": []
    })

    const [showEditPanel, setshowEditPanel] = useState(false)

    const [editFieldKeyName, setEditFieldKeyName] = useState()

    function addTxtInput() {
        let newSchema = JSON.parse(JSON.stringify(schema));
        let newUischema = JSON.parse(JSON.stringify(uiSchema));

        let textFieldKey = "text_" + Math.floor(Math.random() * 899999 + 100000)

        newSchema['properties'][textFieldKey] = {
            "title": "Text",
            "type": "string",
            // "maxLength": 5,
            // "description": ""
        }
        // newSchema['required'].push(textFieldKey)

        setSchema(newSchema);

        newUischema[textFieldKey] = {
            // "ui:options": {
                'ui:label': false,
                // "inputType": "text"
            // },
            // classNames: "myClass",
            "ui:autofocus": false,
            "ui:placeholder": "This is a placeholder"
        }
        newUischema["ui:order"] = uiSchema['ui:order'].concat(textFieldKey)
        setUischema(newUischema);
    }

    function addNumInput() {
        let newSchema = JSON.parse(JSON.stringify(schema));
        let newUischema = JSON.parse(JSON.stringify(uiSchema));

        let numFieldKey = "num_" + Math.floor(Math.random() * 899999 + 100000)
        newSchema['properties'][numFieldKey] = {
            "type": "number",
            "title": "Number",
            "multipleOf": 2,
            "minimum": 8,
            "maximum": 10
        }
        setSchema(newSchema);

        newUischema[numFieldKey] = {
            "ui:options": {
                "inputType": "number",
                "label": false
            },
            "ui:autofocus": false,
            "ui:placeholder": "Select Number"
        }
        newUischema["ui:order"] = uiSchema['ui:order'].concat(numFieldKey)
        setUischema(newUischema);
    }

    function addSelect() {
        let newSchema = JSON.parse(JSON.stringify(schema));
        let newUischema = JSON.parse(JSON.stringify(uiSchema));
        let selectFieldKey = "select_" + Math.floor(Math.random() * 899999 + 100000)

        newSchema['properties'][selectFieldKey] = {
            "title": "Custom select widget with options",
            "type": "string",
            "enum": [
                "option1",
                "option2",
            ],
            "enumNames": [
                "Option 1",
                "Option 2"
            ]
        }
        setSchema(newSchema);
        newUischema[selectFieldKey] = {
            "ui:placeholder": "Select options",
            // classNames: "myClass",
            "ui:autofocus": false,
            "ui:options": {
                "inputType": "text",
                "label": true
            }
        }
        newUischema["ui:order"] = uiSchema['ui:order'].concat(selectFieldKey)
        setUischema(newUischema);
    }
    function addTxtarea() {
        let newSchema = JSON.parse(JSON.stringify(schema));
        let newUischema = JSON.parse(JSON.stringify(uiSchema));
        let randomNumKey = "textarea_" + Math.floor(Math.random() * 899999 + 100000);

        newSchema['properties'][randomNumKey] = {
            "type": "string",
            "title": "Text"
        }
        setSchema(newSchema);

        newUischema[randomNumKey] = {
            "ui:options": {
                "label": false,
                rows: 4,
            },
            "ui:widget": "textarea",
            "ui:placeholder": "Write Something..."
        }
        newUischema["ui:order"] = uiSchema['ui:order'].concat(randomNumKey)
        setUischema(newUischema);
    }
    function addCheckboxGroup() {
        let newSchema = JSON.parse(JSON.stringify(schema));
        let newUischema = JSON.parse(JSON.stringify(uiSchema));
        let checkboxGroupKey = "checkboxGroup_" + Math.floor(Math.random() * 899999 + 100000);

        newSchema['properties'][checkboxGroupKey] = {
            "type": "array",
            "title": "A multiple choices list",
            "items": {
              "type": "string",
              "enum": [
                "foo",
                "bar",
                "fuzz",
                "qux"
              ]
            },
            "uniqueItems": true
        }
        setSchema(newSchema);
        newUischema[checkboxGroupKey] = {
            "ui:options": {
                "label": false
            },
            "ui:widget": "checkboxes"
        }
        newUischema["ui:order"] = uiSchema['ui:order'].concat(checkboxGroupKey)
        setUischema(newUischema);
    }
    function addRadioButtons() {
        let newSchema = JSON.parse(JSON.stringify(schema));
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
            "ui:options": {
                "label": false,
                inline: true,
            },
            "ui:widget": "radio"
        }
        newUischema["ui:order"] = uiSchema['ui:order'].concat(radioKey)
        setUischema(newUischema);
    }
    function addIntRange() {
        let newSchema = JSON.parse(JSON.stringify(schema));
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
            "ui:options": {
                "label": false
            },
            "ui:widget": "range"
        }
        newUischema["ui:order"] = uiSchema['ui:order'].concat(intRangeKey)
        setUischema(newUischema);
    }
    function addMultipleChoiceList() {
        let newSchema = JSON.parse(JSON.stringify(schema));
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
            "ui:options": {
                "label": true
            }
        }
        newUischema["ui:order"] = uiSchema['ui:order'].concat(multipleChoiceListKey)
        setUischema(newUischema);
    }
    function addDate() {
        let newSchema = JSON.parse(JSON.stringify(schema));
        let newUischema = JSON.parse(JSON.stringify(uiSchema));
        let dateKey = "date_" + Math.floor(Math.random() * 899999 + 100000)
        newSchema['properties'][dateKey] = {
            "title": "Date",
            "type": "string",
            "format": "date",
            default: new Date().toISOString().slice(0,10)
        }
        setSchema(newSchema);
        newUischema[dateKey] = {
            "ui:options": {
                "label": false
            }
        }
        newUischema["ui:order"] = uiSchema['ui:order'].concat(dateKey)
        setUischema(newUischema);
    }
    function addDateTime() {
        let newSchema = JSON.parse(JSON.stringify(schema));
        let newUischema = JSON.parse(JSON.stringify(uiSchema));
        let datetimeKey = "dateTime_" + Math.floor(Math.random() * 899999 + 100000)
        newSchema['properties'][datetimeKey] = {
            "title": "Date & Time",
            "type": "string",
            "format": "date-time",
            default: new Date().toISOString().slice(0,10)
        }
        setSchema(newSchema);
        newUischema[datetimeKey] = {
            "ui:options": {
                "label": false
            }
        }
        newUischema["ui:order"] = uiSchema['ui:order'].concat(datetimeKey)
        setUischema(newUischema);
    }
    function chooseFile() {
        let newSchema = JSON.parse(JSON.stringify(schema));
        let newUischema = JSON.parse(JSON.stringify(uiSchema));
        let chooseFileKey = "chooseFile_" + Math.floor(Math.random() * 899999 + 100000)
        newSchema['properties'][chooseFileKey] = {
            "title": "Select File",
            "type": "string",
            "format": "data-url",
        }
        setSchema(newSchema);
        newUischema[chooseFileKey] = {
            "ui:options": {
                "accept": ".pdf"
            }
        }
        newUischema["ui:order"] = uiSchema['ui:order'].concat(chooseFileKey)
        setUischema(newUischema);

    }
    function chooseMultipleFiles() {
        let newSchema = JSON.parse(JSON.stringify(schema));
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
        newUischema["ui:order"] = uiSchema['ui:order'].concat(chooseMultipleFilesKey)
        setUischema(newUischema);
    }

    function removeField(keyName) {
        
        setSchema(schema => {
            let newSchema = JSON.parse(JSON.stringify(schema));
            delete newSchema['properties'][keyName];
            return newSchema
        })

        setUischema(uiSchema => {
            let newUischema = JSON.parse(JSON.stringify(uiSchema));

            let orderKeyToDelete = uiSchema['ui:order'].indexOf(keyName)
            newUischema['ui:order'].splice(orderKeyToDelete, 1)
            delete newUischema[keyName]
            console.log(newUischema)
            return newUischema;
            
        });
    }

    function displayTextFieldPanel(editFieldKeyName) {
        setshowEditPanel(true)
        setEditFieldKeyName(editFieldKeyName)
    }
    function closePanel() {
        setshowEditPanel(false)
    }

    function changeOrder(sourceIndex, destinationIndex) {
        setUischema(uiSchema => {
            let newUischema = JSON.parse(JSON.stringify(uiSchema));
            newUischema['ui:order'] = arrayMove(newUischema['ui:order'], sourceIndex, destinationIndex)
            return newUischema;
        });
    }

    function arrayMove(array, from, to) {
        array.splice(to, 0, array.splice(from, 1)[0]);
        return array;
    }

    return (
        <div style={{ display: 'flex', padding: "110px 30px", justifyContent: 'space-evenly' }}>
            <FormViewer schema={schema} uiSchema={uiSchema} removeField={removeField}
                displayTextFieldPanel={displayTextFieldPanel}
                changeOrder={changeOrder}
            />

            {
                showEditPanel ?
                    <EditPanel
                        setSchema={setSchema} setUischema={setUischema} schema={schema} uiSchema={uiSchema} editFieldKeyName={editFieldKeyName}
                        closePanel={closePanel} /> :
                    <Toolbox
                        addTxtInput={addTxtInput} addNumInput={addNumInput} addSelect={addSelect} addTxtarea={addTxtarea}
                        addCheckboxGroup={addCheckboxGroup} addRadioButtons={addRadioButtons} addIntRange={addIntRange}
                        addMultipleChoiceList={addMultipleChoiceList} addDate={addDate} addDateTime={addDateTime}
                        chooseFile={chooseFile} chooseMultipleFiles={chooseMultipleFiles} schema={schema} uiSchema={uiSchema}
                    />
            }
        </div>
    )
}

export default FormBuilder