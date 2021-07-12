import React from 'react'
// import Form from "@rjsf/core";
import { withTheme } from '@rjsf/core';
import { Theme as AntDTheme } from '@rjsf/antd';
import { Theme as FluentUITheme } from '@rjsf/fluent-ui';
import { Theme as MuiTheme } from 'rjsf-material-ui';
import 'antd/dist/antd.css';

const Form = withTheme(FluentUITheme);

function FormViewer(props) {
    return (
        <div style={{ width: '80%', padding: 30}}>
            <Form schema={props.schema} uiSchema={props.uiSchema} />
        </div>
    )
}

export default FormViewer
