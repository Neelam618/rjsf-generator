import React from 'react'
import { withTheme } from '@rjsf/core';
// import { Theme as AntDTheme } from '@rjsf/antd';
import { Theme as FluentUITheme } from '@rjsf/fluent-ui';
import { Theme as MuiTheme } from 'rjsf-material-ui';
import { Theme as SemanticUITheme } from '@rjsf/semantic-ui';
import { Theme as Bootstrap4Theme } from '@rjsf/bootstrap-4';
// import 'antd/dist/antd.css';

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
        "minimum": {
            "type": "number",
            "title": "Minimum value"
        },
        "maximum": {
            "type": "number",
            "title": "Maximum value"
        },
        "multipleOf": {
            "type": "number",
            "title": "Steps"
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

function IntRangePanel(props) {
    
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

        //minimum
        if(formData.minimum) {
            newSchema["properties"][props.editFieldKeyName]["minimum"] = formData.minimum
        }
        else {
            delete newSchema["properties"][props.editFieldKeyName]["minimum"]
        }

        //maximum
        if(formData.maximum) {
            newSchema["properties"][props.editFieldKeyName]["maximum"] = formData.maximum
        }
        else {
            delete newSchema["properties"][props.editFieldKeyName]["maximum"]
        }

        //multipleOf
         if(formData.multipleOf) {
            newSchema["properties"][props.editFieldKeyName]["multipleOf"] = formData.multipleOf
        }
        else {
            delete newSchema["properties"][props.editFieldKeyName]["multipleOf"]
        }

        //For autofocus
        if (formData.autofocusCheckbox) {
            newUischema[props.editFieldKeyName]["ui:autofocus"] = true
        }
        else {
            newUischema[props.editFieldKeyName]["ui:autofocus"] = false   
        }

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
         
        // classNames
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
        "requiredCheckbox": props.schema["required"] && props.schema["required"].includes(props.editFieldKeyName),
        "minimum": props.schema["properties"][props.editFieldKeyName]["minimum"],
        "maximum": props.schema["properties"][props.editFieldKeyName]["maximum"],
        "multipleOf": props.schema["properties"][props.editFieldKeyName]["multipleOf"],
        "autofocusCheckbox": props.uiSchema[props.editFieldKeyName] && props.uiSchema[props.editFieldKeyName]["ui:autofocus"],
        "classNames": props.uiSchema[props.editFieldKeyName].classNames,
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

export default IntRangePanel