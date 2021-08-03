import React from 'react'
import { withTheme } from '@rjsf/core';
// import { Theme as AntDTheme } from '@rjsf/antd';
// import { Theme as FluentUITheme } from '@rjsf/fluent-ui';
// import { Theme as MuiTheme } from 'rjsf-material-ui';
// import { Theme as SemanticUITheme } from '@rjsf/semantic-ui';
import { Theme as Bootstrap4Theme } from '@rjsf/bootstrap-4';
// import 'antd/dist/antd.css';

const Form = withTheme(Bootstrap4Theme);
const schema = {
    "properties": {
        "label": {
            "title": "Label",
            "type": "string",
        },
        "acceptFileFormat": {
            "title": "Accepts File format",
            "type": "string",
            "enum": [
                ".pdf",
                ".txt", 
                ".jpg",
                ".png",
                "all files"
              ],
              "enumNames": [
                "pdf",
                "txt",
                "jpg",
                "png",
                "all files"
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
        "classNames": {
            "title": "ClassName",
            "type": "string"
        },
        "description": {
            "title": "Description",
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
        // "label checkbox": {
        //     "type": "boolean",
        //     "title": "Hide Label",
        // },          

    }
}

function chooseMultipleFilesPanel(props) {
    const onSubmit = ({formData}) => {
        console.log("Data submitted: ",  formData)
        props.closePanel()

        let newSchema= JSON.parse(JSON.stringify(props.schema));
        let newUischema = JSON.parse(JSON.stringify(props.uiSchema));

        //For Label
        newSchema["properties"][props.editFieldKeyName]["title"] = formData["label"]

        //accept file format
        if(formData.acceptFileFormat && newUischema[props.editFieldKeyName]["ui:options"]["accept"] !== "all files") {
            newUischema[props.editFieldKeyName]["ui:options"]["accept"] = formData["acceptFileFormat"]
        }

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

        //For autofocus
        if (formData.autofocusCheckbox) {
            newUischema[props.editFieldKeyName]["ui:autofocus"] = true
        }
        else {
            newUischema[props.editFieldKeyName]["ui:autofocus"] = false   
        }

        //For maxLength
        if(formData.maxLength) {
            newSchema["properties"][props.editFieldKeyName]["maxLength"] = formData.maxLength
        }
        else {
            delete newSchema["properties"][props.editFieldKeyName]["maxLength"]
        }

        //Description
        // if(formData.description) {
        //     newSchema["properties"][props.editFieldKeyName]["description"] = formData.description
        // }
        // else {
        //     delete newSchema["properties"][props.editFieldKeyName]["description"]
        // }

        //help text
        if(formData.help) {
            newUischema[props.editFieldKeyName]["ui:help"] = formData.help
        }
        else {
            delete newUischema[props.editFieldKeyName]["ui:help"]
        }

        //Disabled
        if(formData.disabledCheckbox) {
            newUischema[props.editFieldKeyName]["ui:disabled"] = formData.disabledCheckbox
            console.log(formData.disabledCheckbox)
        }
        else {
           delete newUischema[props.editFieldKeyName]["ui:disabled"]
        }

        //readonly
        if(formData.readonlyCheckbox) {
            newUischema[props.editFieldKeyName]["ui:readonly"] = formData.readonlyCheckbox
        }
        else {
            delete newUischema[props.editFieldKeyName]["ui:readonly"]
         }
         
        //  classNames
         if(formData.classNames) {
            newUischema[props.editFieldKeyName].classNames = formData.classNames
         }
         else {
            delete newUischema[props.editFieldKeyName].classNames
         }
        
        props.setSchema(newSchema)
        props.setUischema(newUischema)

    }

    let formData = {
        "label":props.schema["properties"][props.editFieldKeyName]["title"],
        "acceptFileFormat": props.uiSchema[props.editFieldKeyName]["ui:options"]["accept"],
        "requiredCheckbox": props.schema["required"] && props.schema["required"].includes(props.editFieldKeyName),
        "autofocusCheckbox": props.uiSchema[props.editFieldKeyName] && props.uiSchema[props.editFieldKeyName]["ui:autofocus"],
        "classNames": props.uiSchema[props.editFieldKeyName].classNames,
        // "description":  props.schema["properties"][props.editFieldKeyName]["description"],
        "help": props.uiSchema[props.editFieldKeyName]["ui:help"],
        "disabledCheckbox": props.uiSchema[props.editFieldKeyName]["ui:disabled"],
        "readonlyCheckbox": props.uiSchema[props.editFieldKeyName]["ui:readonly"],
    }
    let yourForm;
    return (
        <div style={{width: '30%'}}>
            <div onClick={props.closePanel} style={{textAlign: 'end'}}>Close</div>
            <Form schema={schema} onSubmit={onSubmit} ref={(form) => {yourForm = form;}}
            formData= {formData}
            />
        </div>
    )
}

export default chooseMultipleFilesPanel