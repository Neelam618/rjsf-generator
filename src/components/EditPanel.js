import React from 'react'
import TextFieldPanel from './Panels/TextFieldPanel';
import NumberFieldPanel from './Panels/NumberFieldPanel';

function EditPanel(props) {
    let newSchema = JSON.parse(JSON.stringify(props.schema));

        switch (newSchema['properties'][props.editFieldKeyName]["type"]) {
            case "string": return <TextFieldPanel 
            setSchema={props.setSchema} setUischema={props.setUischema} schema={props.schema} uiSchema={props.uiSchema} 
            editFieldKeyName={props.editFieldKeyName} 
            closeTextFieldPanel={props.closeTextFieldPanel} />

            case "number": return <NumberFieldPanel 
            setSchema={props.setSchema} setUischema={props.setUischema} schema={props.schema} uiSchema={props.uiSchema} 
            editFieldKeyName={props.editFieldKeyName} 
            closeTextFieldPanel={props.closeTextFieldPanel}
            />
            // case "blue":  return "#0000FF";
            // default:      return "#FFFFFF";
        }
   }

export default EditPanel
