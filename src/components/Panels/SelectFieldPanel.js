import React from 'react'
import { withTheme } from '@rjsf/core';
import { Theme as Bootstrap4Theme } from '@rjsf/bootstrap-4';
import '../styles.css'

const Form = withTheme(Bootstrap4Theme);

const schema = {
    "type": "object",
    "properties": {
        "label": {
            "title": "Label",
            "type": "string",
        },
        "hideLabel": {
            "type": "boolean",
            "title": "Hide Label"
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
    },
    "additionalProperties": {
        type: "array",
        items: {
            type: "object",
            properties: {
                "key": {
                    "type": "string",
                },
                "value": {
                    "type": "string",
                }
            }
        }
    },
}

function SelectFieldPanel(props) {
    const onSubmit = ({ formData }) => {
        // console.log("Data submitted: ",  formData)
        props.closePanel()

        let newSchema = JSON.parse(JSON.stringify(props.schema));
        let newUischema = JSON.parse(JSON.stringify(props.uiSchema));

        //For Label
        newSchema["properties"][props.editFieldKeyName]["title"] = formData["label"]

        //hide label
        if (formData.hideLabel === false) {
            newUischema[props.editFieldKeyName]["ui:options"]["label"] = true;
        }
        else {
            newUischema[props.editFieldKeyName]["ui:options"]["label"] = false;
        }

        //For required
        if (formData.requiredCheckbox && !newSchema["required"].includes(props.editFieldKeyName)) {
            newSchema["required"].push(props.editFieldKeyName)
        }
        // else {
        //     const index =  newSchema["required"].indexOf(props.editFieldKeyName);
        //     if (index > -1) {
        //         newSchema["required"].splice(index, 1);
        //     }
        // }

        //For autofocus
        if (formData.autofocusCheckbox) {
            newUischema[props.editFieldKeyName]["ui:autofocus"] = true
        }
        else {
            newUischema[props.editFieldKeyName]["ui:autofocus"] = false
        }

        //For maxLength
        if (formData.maxLength) {
            newSchema["properties"][props.editFieldKeyName]["maxLength"] = formData.maxLength
        }
        else {
            delete newSchema["properties"][props.editFieldKeyName]["maxLength"]
        }

        // help text
        if (formData.help) {
            newUischema[props.editFieldKeyName]["ui:help"] = formData.help
        }
        else {
            delete newUischema[props.editFieldKeyName]["ui:help"]
        }
        // For placeholder
        if (formData.placeholder) {
            newUischema[props.editFieldKeyName]["ui:placeholder"] = formData.placeholder
        }
        else {
            delete newUischema[props.editFieldKeyName]["ui:placeholder"]
        }
        //classNames
        if (formData.classNames) {
            newUischema[props.editFieldKeyName].classNames = formData.classNames
        }
        else {
            delete newUischema[props.editFieldKeyName].classNames
        }

        props.setSchema(newSchema)
        props.setUischema(newUischema)

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

        //additional properties
        // console.log(Object.values(formData.options));
        let enumKeys = [];
        let enumNames = [];
        Object.values(formData.options).forEach(option => {
            enumKeys.push(option.key)
            enumNames.push(option.value)
        })

        newSchema["properties"][props.editFieldKeyName]["enum"] = enumKeys
        newSchema["properties"][props.editFieldKeyName]["enumNames"] = enumNames
    }
    let formData = {
        "label": props.schema["properties"][props.editFieldKeyName]["title"],
        "hideLabel": !props.uiSchema[props.editFieldKeyName]["ui:options"]["label"],
        "requiredCheckbox": props.schema["required"] && props.schema["required"].includes(props.editFieldKeyName),
        "autofocusCheckbox": props.uiSchema[props.editFieldKeyName] && props.uiSchema[props.editFieldKeyName]["ui:autofocus"],
        "placeholder": props.uiSchema[props.editFieldKeyName]["ui:placeholder"],
        "classNames": props.uiSchema[props.editFieldKeyName].classNames,
        "help": props.uiSchema[props.editFieldKeyName]["ui:help"],
        "disabledCheckbox": props.uiSchema[props.editFieldKeyName]["ui:disabled"],
        "readonlyCheckbox": props.uiSchema[props.editFieldKeyName]["ui:readonly"],
    }

    //additional properties
    let formDataSchema = JSON.parse(JSON.stringify(props.schema));
    // console.log(formDataSchema["properties"][props.editFieldKeyName]);
    let formDataEnum = formDataSchema["properties"][props.editFieldKeyName]["enum"] || [];
    let formDataEnumNames = formDataSchema["properties"][props.editFieldKeyName]["enumNames"] || [];
    formData.options = []
    for (let i = 0; i < formDataEnum.length; i++) {
        formData.options.push({ key: formDataEnum[i], value: formDataEnumNames[i] });
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

export default SelectFieldPanel
