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
    // console.log(JSON.stringify(props.schema))
    // console.log(JSON.stringify(props.uiSchema))
    // return (
    //     <div style={{ width: '80%', padding: 30}}>
    //         <Form schema={props.schema} uiSchema={props.uiSchema} />
    //     </div>
    // )
    function removeField(e) {
        e.target.parentElement.parentElement.remove()
        console.log("remove")
    }

    return <div style={{ width: '80%', padding: 30}}>
        {Object.keys(props.schema.properties).map(function(keyName) {
            let newSchema = {"properties": {}}
            newSchema.properties[keyName] = props.schema.properties[keyName];

            let newUiSchema = {};
            if(props.uiSchema[keyName]) {
                newUiSchema[keyName] = props.uiSchema[keyName]
            }
            console.log(JSON.stringify(newSchema))
            return (
                <div className="fieldContainer" style={{width: "80%", position: 'relative', padding: 10}}>   
                    <Form key={keyName} schema={newSchema} uiSchema={newUiSchema} children={true}>
                        <span onClick={removeField} className="removeField" style={{display: 'none', position: 'absolute', top: 0, right: 0, fontWeight: 700, padding: "0 20px"}}>X</span>
                        <span className="editField" style={{display: 'none', position: 'absolute', top: 0, right: 80}}>Edit</span>
                    </Form>
                </div>
            )
        })}
    </div>
}
    
export default FormViewer
