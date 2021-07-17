import React from 'react'
import { withTheme } from '@rjsf/core';
import { Theme as AntDTheme } from '@rjsf/antd';
import { Theme as FluentUITheme } from '@rjsf/fluent-ui';
import { Theme as MuiTheme } from 'rjsf-material-ui';
import { Theme as SemanticUITheme } from '@rjsf/semantic-ui';
import { Theme as Bootstrap4Theme } from '@rjsf/bootstrap-4';
import 'antd/dist/antd.css';

const Form = withTheme(FluentUITheme);
const schema = {
    "properties": {
        "label": {
            "title": "Label",
            "type": "string",
        },
        "input type": {
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
        "required checkbox": {
            "type": "boolean",
            "title": "Required",
        },
        "autofocus checkbox": {
            "type": "boolean",
            "title": "Autofocus",
        },
        "placeholder": {
            "title": "Placeholder",
            "type": "string"
        },
        "max length": {
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
        "helpText": {
            "title": "Help text",
            "type": "string"
        },
        "disabled checkbox": {
            "type": "boolean",
            "title": "Disabled",
        },
        "readonly checkbox": {
            "type": "boolean",
            "title": "Read only",
        },
        "label checkbox": {
            "type": "boolean",
            "title": "Hide Label",
        },          

    }
}

function EditPanel(props) {
    const onSubmit = ({formData}) => console.log("Data submitted: ",  formData);
    let yourForm;
    // if (!props.schema["required"]) {
    // //     props.schema["required"] = []
    // // }

    let formData = {
        "label":props.schema["properties"][props.editFieldKeyName]["title"],
        "input type": props.uiSchema[props.editFieldKeyName]["ui:options"]["inputType"],
        "required checkbox": props.schema["required"] && props.schema["required"].includes(props.editFieldKeyName),
        "autofocus checkbox": props.uiSchema[props.editFieldKeyName] && props.uiSchema[props.editFieldKeyName]["ui:autofocus"],
        "placeholder": props.uiSchema[props.editFieldKeyName]["ui:placeholder"]
    }
    return (
        <div style={{width: '30%'}}>
            <div onClick={props.closeEditPanel} style={{textAlign: 'end'}}>Close</div>
            <Form schema={schema} onSubmit={onSubmit} ref={(form) => {yourForm = form;}}
            formData= {formData}
            />
        </div>
    )
}

export default EditPanel