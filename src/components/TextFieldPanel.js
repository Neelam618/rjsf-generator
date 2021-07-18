import React from 'react'
import { withTheme } from '@rjsf/core';
import { Theme as AntDTheme } from '@rjsf/antd';
import { Theme as FluentUITheme } from '@rjsf/fluent-ui';
import { Theme as MuiTheme } from 'rjsf-material-ui';
import { Theme as SemanticUITheme } from '@rjsf/semantic-ui';
import { Theme as Bootstrap4Theme } from '@rjsf/bootstrap-4';
import 'antd/dist/antd.css';

const Form = withTheme(MuiTheme);
const schema = {
    "properties": {
        "label": {
            "title": "Label",
            "type": "string",
        },
        "inputType": {
            "type": "string",
            "title": "Type",
            "enum": [
                    "text",
                    "email",
                    "password",
                    "tel",
                    "uri",
                    "date",
                    "date-time",
                    "color"
            ],
        },
        "requiredCheckbox": {
            "type": "boolean",
            "title": "Required",
        },
        "autofocusCheckbox": {
            "type": "boolean",
            "title": "Autofocus",
        },
        "placeholder": {
            "title": "Placeholder",
            "type": "string"
        },
        "maxLength": {
            "type": "number",
            "title": "Max length",
        },
        "classname": {
            "title": "ClassName",
            "type": "string"
        },
        "description": {
            "title": "Description",
            "type": "string"
        },
        // "help text": {
        //     "title": "Help text",
        //     "type": "string"
        // },
        "disabledCheckbox": {
            "type": "boolean",
            "title": "Disabled",
        },
        "readonlyCheckbox": {
            "type": "boolean",
            "title": "Read only",
        },
        // "label checkbox": {
        //     "type": "boolean",
        //     "title": "Hide Label",
        // },          

    }
}

function TextFieldPanel(props) {
    const onSubmit = ({formData}) => {
        console.log("Data submitted: ",  formData)
        props.closeTextFieldPanel()

        let newSchema= JSON.parse(JSON.stringify(props.schema));
        let newUischema = JSON.parse(JSON.stringify(props.uiSchema));

        //For Label
        newSchema["properties"][props.editFieldKeyName]["title"] = formData["label"]
        props.setSchema(newSchema)

        //For required
        if (formData.requiredCheckbox && !newSchema["required"].includes(props.editFieldKeyName)) {
            newSchema["required"].push(props.editFieldKeyName)
        }
        else {
            const index =  newSchema["required"].indexOf(props.editFieldKeyName);
            if (index > -1) {
                newSchema["required"].splice(index, 1);
            }
        }
        props.setSchema(newSchema)

        //For autofocus
        if (formData.autofocusCheckbox) {
            newUischema[props.editFieldKeyName]["ui:autofocus"] = true
        }
        else {
            newUischema[props.editFieldKeyName]["ui:autofocus"] = false   
        }
        props.setUischema(newUischema)

    }

    let yourForm;
    let formData = {
        "label":props.schema["properties"][props.editFieldKeyName]["title"],
        "inputType": props.uiSchema[props.editFieldKeyName]["ui:options"]["inputType"],
        "requiredCheckbox": props.schema["required"] && props.schema["required"].includes(props.editFieldKeyName),
        "autofocusCheckbox": props.uiSchema[props.editFieldKeyName] && props.uiSchema[props.editFieldKeyName]["ui:autofocus"],
        "placeholder": props.uiSchema[props.editFieldKeyName]["ui:placeholder"],
        "maxLength": props.schema["properties"][props.editFieldKeyName]["maxLength"],
        "description":  props.schema["properties"][props.editFieldKeyName]["description"],
        // "help text": props.uiSchema[props.editFieldKeyName]["ui:help"],
        "disabledCheckbox": props.uiSchema[props.editFieldKeyName]["ui:disabled"],
        "readonlyCheckbox": props.uiSchema[props.editFieldKeyName]["ui:readonly"],

    }
    return (
        <div style={{width: '30%'}}>
            <div onClick={props.closeTextFieldPanel} style={{textAlign: 'end'}}>Close</div>
            <Form schema={schema} onSubmit={onSubmit} ref={(form) => {yourForm = form;}}
            formData= {formData}
            />
        </div>
    )
}

export default TextFieldPanel