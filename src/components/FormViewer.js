import { React, useState } from 'react'
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
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal'
import Button from 'react-bootstrap/Button';

// import 'antd/dist/antd.css';
import './styles.css'

const Form = withTheme(Bootstrap4Theme);


function FormViewer(props) {
    console.log(props.schema.properties)
    const [modalShow, setModalShow] = useState(false);

    return <div style={{ width: '50%', padding: "10px 30px 0px 30px" }}>
        {Object.entries(props.schema.properties).map(function ([key, value]) {
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

            if (props.uiSchema[key]) {
                singleFieldUiSchema[key] = props.uiSchema[key]
            }

            return (
                <div className='fieldContainer' style={{ position: 'relative' }}>
                    <Form key={key} schema={singleFieldSchema} uiSchema={singleFieldUiSchema} liveValidate children={true} widgets={widgets} >
                        <span onClick={() => props.removeField(key)} className="removeField" style={{ display: 'none', position: 'absolute', top: 0, right: 0, fontWeight: 700, padding: "0 20px" }}>X</span>
                        <span onClick={() => props.displayTextFieldPanel(key)} className="editField" style={{ display: 'none', position: 'absolute', top: 0, right: 80 }}>Edit</span>
                    </Form>

                    <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </div>
            )
        })}
        <Button variant="primary" onClick={() => setModalShow(true)} style={{marginTop: 10}}>
            Generate Schema
        </Button>
    </div >
}

export default FormViewer
