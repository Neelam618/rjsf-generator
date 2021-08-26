import React from 'react'
import { withTheme } from '@rjsf/core';
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

function DateTimeFieldPanel(props) {
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
        "classNames": props.uiSchema[props.editFieldKeyName].classNames,
        "help": props.uiSchema[props.editFieldKeyName]["ui:help"],
        "disabledCheckbox": props.uiSchema[props.editFieldKeyName]["ui:disabled"],
        "readonlyCheckbox": props.uiSchema[props.editFieldKeyName]["ui:readonly"],
    }
    let yourForm;
    return (
        <div className="panel">
            <div onClick={props.closePanel} style={{ textAlign: 'end' }}><img src="img/close.png" alt="" /></div>
            <Form schema={schema} onSubmit={onSubmit} ref={(form) => { yourForm = form; }}
                formData={formData}
            >
                <div><button type="submit" className="btn btn-primary">Save</button></div>
            </Form>
        </div>
    )
}

export default DateTimeFieldPanel