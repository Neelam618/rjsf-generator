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
    "type": "object",
    "properties": {
      "name": {
        "type": "string"
      }
    },
    "additionalProperties": {
        "type": "string",
    },
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
    }
}

const uiSchema= {
    "ui:widget": (props) => {
        return (
          <input type="text"
            className="custom"
            value={props.value}
            required={props.required}
            onChange={(event) => props.onChange(event.target.value)} />
        );
      },
}


function SelectFieldPanel(props) {
    const onSubmit = ({formData}) => {
        console.log("Data submitted: ",  formData)
        props.closePanel()

        let newSchema= JSON.parse(JSON.stringify(props.schema));
        let newUischema = JSON.parse(JSON.stringify(props.uiSchema));

        //For Label
        newSchema["properties"][props.editFieldKeyName]["title"] = formData["label"]

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

        // help text
        if(formData.help) {
            newUischema[props.editFieldKeyName]["ui:help"] = formData.help
        }
        else {
            delete newUischema[props.editFieldKeyName]["ui:help"]
        }
         
         //classNames
         if(formData.classNames) {
            newUischema[props.editFieldKeyName].classNames = formData.classNames
         }
         else {
            delete newUischema[props.editFieldKeyName].classNames
         }
                        
        props.setSchema(newSchema)
        props.setUischema(newUischema)

        //additional properties
        let enumKeys = Object.keys(formData)
        .filter(k => !["label", "requiredCheckbox", "autofocusCheckbox", "classNames", "help"].includes(k));
        let enumValues = enumKeys.map(k => formData[k])
        newSchema["properties"][props.editFieldKeyName]["enum"] = enumKeys
        newSchema["properties"][props.editFieldKeyName]["enumNames"] = enumValues
        console.log( newSchema["properties"][props.editFieldKeyName]);
     }

    let formData = {
        "label":props.schema["properties"][props.editFieldKeyName]["title"],
        "requiredCheckbox": props.schema["required"] && props.schema["required"].includes(props.editFieldKeyName),
        "autofocusCheckbox": props.uiSchema[props.editFieldKeyName] && props.uiSchema[props.editFieldKeyName]["ui:autofocus"],
        "classNames": props.uiSchema[props.editFieldKeyName].classNames,
        "help": props.uiSchema[props.editFieldKeyName]["ui:help"],
    }
    
    //additional properties
    let formDataSchema = JSON.parse(JSON.stringify(props.schema));
    let formDataEnum = formDataSchema["properties"][props.editFieldKeyName]["enum"] || [];
    let formDataEnumNames = formDataSchema["properties"][props.editFieldKeyName]["enumNames"] || [];

    for (let i = 0; i < formDataEnum.length; i++) {
        formData[formDataEnum[i]] = formDataEnumNames[i];
    }

    let yourForm;
    return (
        <div style={{width: '30%'}}>
            <div onClick={props.closePanel} style={{textAlign: 'end'}}>Close</div>
            <Form schema={schema} uiSchema={uiSchema} onSubmit={onSubmit} ref={(form) => {yourForm = form;}}
            formData= {formData}
            />
        </div>
    )
}

export default SelectFieldPanel
