import React from 'react'
// import Form from "@rjsf/core";
import { withTheme } from '@rjsf/core';
// import { Theme as AntDTheme } from '@rjsf/antd';
// import { Theme as FluentUITheme } from '@rjsf/fluent-ui';
// import { Theme as MuiTheme } from 'rjsf-material-ui';
// import { Theme as SemanticUITheme } from '@rjsf/semantic-ui';
import { Theme as Bootstrap4Theme } from '@rjsf/bootstrap-4';
import TextWidget from './Widgets/TextWidget'
import SelectWidget from './Widgets/SelectWidget'
import MultipleChoiceWidget from './Widgets/MultipleChoiceWidget'
import FileWidget from './Widgets/FileWidget'
import RangeWidget from './Widgets/RangeWidget'
// import 'antd/dist/antd.css';
import './FormViewer.css'

const Form = withTheme(Bootstrap4Theme);

function FormViewer(props) {
    console.log(props.schema.properties)

    return <div style={{ padding: 30, width: '50%'}}>
        {Object.entries(props.schema.properties).map(function([key, value]) {
             let singleFieldSchema = {
                "properties": {
                    [key]: value,
                },
                "required": props.schema["required"],
            }
            const widgets = {
                TextWidget: TextWidget,
                SelectWidget: SelectWidget,
                // MultipleChoiceWidget: MultipleChoiceWidget,
                FileWidget: FileWidget,
                RangeWidget: RangeWidget
            };

            let singleFieldUiSchema = {
                // "ui:widget": "SelectWidget"
            };

            if(props.uiSchema[key]) {
                singleFieldUiSchema[key] = props.uiSchema[key]
            } 
            
            // let className ="";
            // if(props.schema["properties"][key]["type"]=="string") {
            //     className = "txtClass"
            // }
            // if(props.schema["properties"][key]["type"]=="number") {
            //     className = "numberClass"
            // }
            // if(props.schema["properties"][key]["type"]=="string" && props.uiSchema[key]["ui:widget"]=="textarea") {
            //     className = "textareaClass"
            // }
            // if(props.schema["properties"][key]["type"]=="string" && props.schema["properties"][key].hasOwnProperty("enum")) {
            //     className = "selectClass"
            // }
            // if(props.schema["properties"][key]["type"]=="integer") {
            //     className = "intrangeClass"
            // }
            // if(props.schema["properties"][key]["type"]=="boolean") {
            //     className = "checkboxClass"
            // }
            // if(props.uiSchema[key]["ui:widget"]=="radio") {
            //     className = "radioClass"
            // }
            // if(props.schema["properties"][key]["type"]=="array" && props.schema["properties"][key].hasOwnProperty("items")) {
            //     className = "multiChoiceClass"
            // }

            return (
                <div className='fieldContainer' style={{ position: 'relative', padding: 10}}>   
                    <Form key={key} schema={singleFieldSchema} uiSchema={singleFieldUiSchema} liveValidate children={true} widgets={widgets} >
                        <span onClick={() => props.removeField(key)} className="removeField" style={{display: 'none', position: 'absolute', top: 0, right: 0, fontWeight: 700, padding: "0 20px"}}>X</span>
                        <span onClick={() => props.displayTextFieldPanel(key)} className="editField" style={{display: 'none', position: 'absolute', top: 0, right: 80}}>Edit</span>
                    </Form>
                </div>
            )
        })}
    </div>
}
    
export default FormViewer
