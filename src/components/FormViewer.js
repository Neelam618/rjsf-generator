import { React, useState } from 'react'
// import Form from "@rjsf/core";
import { withTheme } from '@rjsf/core';
// import { Theme as AntDTheme } from '@rjsf/antd';
// import { Theme as FluentUITheme } from '@rjsf/fluent-ui';
// import { Theme as MuiTheme } from 'rjsf-material-ui';
// import { Theme as SemanticUITheme } from '@rjsf/semantic-ui';
import { Theme as Bootstrap4Theme } from '@rjsf/bootstrap-4';
import SelectWidget from './Widgets/SelectWidget'
import MultipleChoiceWidget from './Widgets/MultipleChoiceWidget'
import FileWidget from './Widgets/FileWidget'
import RangeWidget from './Widgets/RangeWidget'
import CheckboxGroupWidget from './Widgets/CheckboxGroupWidget'
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal'
import Button from 'react-bootstrap/Button';
import './styles.css'

const Form = withTheme(Bootstrap4Theme);


function FormViewer(props) {

    const [modalShow, setModalShow] = useState(false);

    return <div className="formViewer" style={{ width: '50%' }}>
        {Object.entries(props.schema.properties).map(function ([key, value]) {
            let singleFieldSchema = {
                "properties": {
                    [key]: value,
                },
                "required": props.schema["required"].filter(k => k === key),
            }
            console.log("required array", props.schema["required"]);
            const widgets = {
                // TextWidget: TextWidget,
                SelectWidget: SelectWidget,
                // MultipleChoiceWidget: MultipleChoiceWidget,
                FileWidget: FileWidget,
                RangeWidget: RangeWidget,
                CheckboxesWidget: CheckboxGroupWidget
            };

            let singleFieldUiSchema = {
                // "ui:widget": "CheckboxGroupWidget"
            };

            if (props.uiSchema[key]) {
                singleFieldUiSchema[key] = props.uiSchema[key]
            }
            console.log(props.schema.properties[key]);
            return (
                <div key={key} className='fieldContainer' style={{ position: 'relative', padding: '10px 30px 0px 30px' }}>                        
                        <Form schema={singleFieldSchema} uiSchema={singleFieldUiSchema} liveValidate children={true} widgets={widgets} >
                            <span onClick={() => props.removeField(key)} className="removeField"><img style={{ width: 12 }} src="img/close.png" /></span>
                            <span onClick={() => props.displayTextFieldPanel(key)} className="editField"><img style={{ width: 20 }} src="img/edit.png" /></span>
                        </Form>

                    <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        schema={props.schema}
                        uiSchema={props.uiSchema}
                    />
                </div>
            )
        })}
        {Object.keys(props.schema['properties']).length > 0 ?
            <Button variant="primary" onClick={() => setModalShow(true)} style={{ margin: '40px 0 0 30px' }}>
                Generate Schema
            </Button>
            : <div style={{margin: '2em 1em'}}>
                Select a form element from the list
            </div>
        }
    </div>
}

export default FormViewer
