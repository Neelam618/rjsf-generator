import React from 'react'
// import Form from "@rjsf/core";
import { withTheme } from '@rjsf/core';
import { Theme as AntDTheme } from '@rjsf/antd';
import { Theme as FluentUITheme } from '@rjsf/fluent-ui';
import { Theme as MuiTheme } from 'rjsf-material-ui';
import { Theme as SemanticUITheme } from '@rjsf/semantic-ui';
import { Theme as Bootstrap4Theme } from '@rjsf/bootstrap-4';
import 'antd/dist/antd.css';
import './FormViewer.css'

const Form = withTheme(FluentUITheme);

function FormViewer(props) {

    return <div style={{ padding: 30, width: '50%'}}>
        {Object.keys(props.schema.properties).map(function(keyName) {
            let singleFieldSchema = {
                "properties": {
                    [keyName]: props.schema.properties[keyName]
                },
                "required": props.schema.required
            }

            let singleFieldUiSchema = {};
            if(props.uiSchema[keyName]) {
                singleFieldUiSchema[keyName] = props.uiSchema[keyName]
            }

            // console.log(JSON.stringify(singleFieldSchema))
            return (
                <div className="fieldContainer" style={{ position: 'relative', padding: 10}}>   
                    <Form key={keyName} schema={singleFieldSchema} uiSchema={singleFieldUiSchema} liveValidate children={true}>
                        <span onClick={() => props.removeField(keyName)} className="removeField" style={{display: 'none', position: 'absolute', top: 0, right: 0, fontWeight: 700, padding: "0 20px"}}>X</span>
                        <span onClick={() => props.displayTextFieldPanel(keyName)} className="editField" style={{display: 'none', position: 'absolute', top: 0, right: 80}}>Edit</span>
                    </Form>
                </div>
            )
        })}
    </div>
}
    
export default FormViewer
