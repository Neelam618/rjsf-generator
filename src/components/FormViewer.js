import React from 'react'
// import Form from "@rjsf/core";
import { withTheme } from '@rjsf/core';
import { Theme as AntDTheme } from '@rjsf/antd';
import { Theme as FluentUITheme } from '@rjsf/fluent-ui';
import { Theme as MuiTheme } from 'rjsf-material-ui';
import { Theme as SemanticUITheme } from '@rjsf/semantic-ui';
import { Theme as Bootstrap4Theme } from '@rjsf/bootstrap-4';
import 'antd/dist/antd.css';

const Form = withTheme(FluentUITheme);

function FormViewer(props) {
    // console.log(JSON.stringify(props.schema))
    // console.log(JSON.stringify(props.uiSchema))
    // return (
    //     <div style={{ width: '80%', padding: 30}}>
    //         <Form schema={props.schema} uiSchema={props.uiSchema} />
    //     </div>
    // )

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
                <Form key={keyName} schema={newSchema} uiSchema={newUiSchema} children={true}></Form>
            )
        })}
    </div>
}
    
export default FormViewer
