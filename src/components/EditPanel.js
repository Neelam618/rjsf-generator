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
            "type": "string"
        },
        "dropdown": {
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
            ]
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
        "number": {
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
        "disabledCheckbox": {
            "type": "boolean",
            "title": "Disabled",
        },
        "readonlyCheckbox": {
            "type": "boolean",
            "title": "Read only",
        },
        "labelCheckbox": {
            "type": "boolean",
            "title": "Hide Label",
        },        

    }
}

function EditPanel(props) {
    return (
        <div style={{width: '30%'}}>
            {/* {props.editFieldKeyName} */}
            <Form schema={schema} children={true} />
        </div>
    )
}

export default EditPanel
