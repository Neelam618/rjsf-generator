import { React, useState } from 'react'
import { withTheme } from '@rjsf/core';
import { Theme as Bootstrap4Theme } from '@rjsf/bootstrap-4';
import SelectWidget from './Widgets/SelectWidget'
import FileWidget from './Widgets/FileWidget'
import RangeWidget from './Widgets/RangeWidget'
import CheckboxGroupWidget from './Widgets/CheckboxGroupWidget'
import Modal from './Modal'
import Button from 'react-bootstrap/Button';
import './styles.css'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const Form = withTheme(Bootstrap4Theme);


function FormViewer(props) {

    const [modalShow, setModalShow] = useState(false);


    const onDragEnd = (result) => {
        if (!result.destination) return;
        console.log(`source: ${result.source.index}, destination: ${result.destination.index}`)
        props.changeOrder(result.source.index, result.destination.index)
    }

    return <><DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="fieldWrapper">
            {(provided) => (
                <div className="formViewer" style={{ width: '50%' }} {...provided.droppableProps} ref={provided.innerRef}>
                    {provided.placeholder}
                    {
                        props.uiSchema['ui:order'].map(function (key, index) {
                            let singleFieldSchema = {
                                "properties": {
                                    [key]: props.schema.properties[key],
                                },
                                "required": props.schema["required"].filter(k => k === key),
                            }

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

                            return <>
                                <Draggable key={key} draggableId={key} index={index} disableInteractiveElementBlocking={true}>
                                    {(provided) => (
                                        <div className='fieldContainer' style={{ position: 'relative', padding: '10px 30px 0px 30px' }}>
                                            <div {...provided.draggableProps} ref={provided.innerRef} className="field">
                                                <Form schema={singleFieldSchema} uiSchema={singleFieldUiSchema} liveValidate children={true} widgets={widgets} >
                                                    <div className="hover-options">
                                                        <div className="dragField" {...provided.dragHandleProps} ref={provided.innerRef}><img src="img/scrolling.png"/></div>
                                                        <div onClick={() => props.displayTextFieldPanel(key)} className="editField"><img src="img/edit.png" /></div>
                                                        <div onClick={() => props.removeField(key)} className="removeField"><img src="img/close.png" /></div>                                                    
                                                    </div>
                                                </Form>
                                            </div>
                                        </div>
                                    )}
                                </Draggable>
                            </>
                        })
                    }
                    {provided.placeholder}
                    {Object.keys(props.schema['properties']).length > 0 ?
                        <Button variant="primary" onClick={() => setModalShow(true)} className="schema-btn">
                            Generate Schema
                        </Button>
                        : <div style={{ margin: '2em 1em' }}>
                            Select a form element from the list
                        </div>
                    }
                </div>
            )}
        </Droppable>
    </DragDropContext>

    <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        schema={props.schema}
        uiSchema={props.uiSchema}
    />
    </>

}

export default FormViewer