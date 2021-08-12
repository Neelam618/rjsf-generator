import React from 'react'
import { withTheme } from '@rjsf/core';
// import { Theme as AntDTheme } from '@rjsf/antd';
import { Theme as FluentUITheme } from '@rjsf/fluent-ui';
import { Theme as MuiTheme } from 'rjsf-material-ui';
import { Theme as SemanticUITheme } from '@rjsf/semantic-ui';
import { Theme as Bootstrap4Theme } from '@rjsf/bootstrap-4';
import '../styles.css'

const Form = withTheme(Bootstrap4Theme);
const schema = {
    "properties": {
        "label": {
            "title": "Label",
            "type": "string",
        },
        "requiredCheckbox": {
            "type": "boolean",
            "title": "Required",
        },
        "autofocusCheckbox": {
            "type": "boolean",
            "title": "Autofocus",
        },
        "enum": {
            "type": "array",
            "title": "List options",
            "items": {
                "type": "string",
                "minLength": 2,
            }
        },
        "inline": {
            "type": "boolean",
            "title": "Inline",
        },
        "classNames": {
            "title": "ClassName",
            "type": "string"
        },
        "help": {
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

    }
}

function RadioSwitchPanel(props) {

    const onSubmit = ({ formData }) => {
        console.log("Data submitted: ", formData)
        props.closePanel()

        let newSchema = JSON.parse(JSON.stringify(props.schema));
        let newUischema = JSON.parse(JSON.stringify(props.uiSchema));

        //For Label
        newSchema["properties"][props.editFieldKeyName]["title"] = formData["label"]

        //For required
        if (formData.requiredCheckbox && !newSchema["required"].includes(props.editFieldKeyName)) {
            newSchema["required"].push(props.editFieldKeyName)
        }
        else {
            const index = newSchema["required"].indexOf(props.editFieldKeyName);
            if (index > -1) {
                newSchema["required"].splice(index, 1);
            }
        }

        //For autofocus
        if (formData.autofocusCheckbox) {
            newUischema[props.editFieldKeyName]["ui:autofocus"] = true
        }
        else {
            newUischema[props.editFieldKeyName]["ui:autofocus"] = false
        }

        //list options
        if (formData.enum) {
            newSchema["properties"][props.editFieldKeyName]["enum"] = formData.enum
        }

        //inline
        if (formData.inline) {
            newUischema[props.editFieldKeyName]["ui:options"].inline = formData.inline
        }
        else {
            delete newUischema[props.editFieldKeyName]["ui:options"].inline
        }

        // For placeholder
        if (formData.placeholder) {
            newUischema[props.editFieldKeyName]["ui:placeholder"] = formData.placeholder
        }
        else {
            delete newUischema[props.editFieldKeyName]["ui:placeholder"]
        }

        //For maxLength
        if (formData.maxLength) {
            newSchema["properties"][props.editFieldKeyName]["maxLength"] = formData.maxLength
        }
        else {
            delete newSchema["properties"][props.editFieldKeyName]["maxLength"]
        }

        //help text
        if (formData.help) {
            newUischema[props.editFieldKeyName]["ui:help"] = formData.help
        }
        else {
            delete newUischema[props.editFieldKeyName]["ui:help"]
        }

        //Disabled
        if (formData.disabledCheckbox) {
            newUischema[props.editFieldKeyName]["ui:disabled"] = formData.disabledCheckbox
            console.log(formData.disabledCheckbox)
        }
        else {
            delete newUischema[props.editFieldKeyName]["ui:disabled"]
        }

        //readonly
        if (formData.readonlyCheckbox) {
            newUischema[props.editFieldKeyName]["ui:readonly"] = formData.readonlyCheckbox
        }
        else {
            delete newUischema[props.editFieldKeyName]["ui:readonly"]
        }

        //  classNames
        if (formData.classNames) {
            newUischema[props.editFieldKeyName].classNames = formData.classNames
        }
        else {
            delete newUischema[props.editFieldKeyName].classNames
        }

        props.setSchema(newSchema)
        props.setUischema(newUischema)

    }

    let formData = {
        "label": props.schema["properties"][props.editFieldKeyName]["title"],
        "requiredCheckbox": props.schema["required"] && props.schema["required"].includes(props.editFieldKeyName),
        "autofocusCheckbox": props.uiSchema[props.editFieldKeyName] && props.uiSchema[props.editFieldKeyName]["ui:autofocus"],
        "enum": props.schema["properties"][props.editFieldKeyName]["enum"],
        "inline": props.uiSchema[props.editFieldKeyName]["ui:options"].inline,
        "placeholder": props.uiSchema[props.editFieldKeyName]["ui:placeholder"],
        "maxLength": props.schema["properties"][props.editFieldKeyName]["maxLength"],
        "classNames": props.uiSchema[props.editFieldKeyName].classNames,
        "help": props.uiSchema[props.editFieldKeyName]["ui:help"],
        "disabledCheckbox": props.uiSchema[props.editFieldKeyName]["ui:disabled"],
        "readonlyCheckbox": props.uiSchema[props.editFieldKeyName]["ui:readonly"],

    }
    let yourForm;
    return (
        <div className="panel">
            <div onClick={props.closePanel} style={{ textAlign: 'end' }}><img src="img/close.png" /></div>
            <Form schema={schema} onSubmit={onSubmit} ref={(form) => {yourForm = form;}}
            formData= {formData}
            >
                <div><button type="button" className="btn btn-primary">Save</button></div>
            </Form>
        </div>
    )
}

export default RadioSwitchPanel