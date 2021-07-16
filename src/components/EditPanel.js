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
            "default": "Text"
        },
        "input type": {
            "type": "string",
            "title": "Type",
            "enum": [
                    "Text field",
                    "Email",
                    "Password",
                    "tel",
                    "uri",
                    "date",
                    "date-time",
                    "color"
            ],
            "default": "Text field"
        },
        "required checkbox": {
            "type": "boolean",
            "title": "Required",
            "default": true
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
    return (
        <div style={{width: '30%'}}>
            <div onClick={props.closeEditPanel} style={{textAlign: 'end'}}>Close</div>
            {/* {props.editFieldKeyName} */}
            <Form schema={schema} onSubmit={onSubmit} ref={(form) => {yourForm = form;}} />
        </div>
    )
}

export default EditPanel
