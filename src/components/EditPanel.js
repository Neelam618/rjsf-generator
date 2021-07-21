import React from 'react'
import TextFieldPanel from './Panels/TextFieldPanel';
import NumberFieldPanel from './Panels/NumberFieldPanel';
import SelectFieldPanel from './Panels/SelectFieldPanel';
import TextareaPanel from './Panels/TextareaPanel';
import CheckboxPanel from './Panels/CheckboxPanel'

function EditPanel(props) {
    let newSchema = JSON.parse(JSON.stringify(props.schema));
    let schemaConfigForKey = newSchema['properties'][props.editFieldKeyName];

    if (schemaConfigForKey) {

        switch (props.editFieldKeyName.split("_")[0]) {
            case "Text": return <TextFieldPanel
                setSchema={props.setSchema} setUischema={props.setUischema} schema={props.schema} uiSchema={props.uiSchema}
                editFieldKeyName={props.editFieldKeyName}
                closePanel={props.closePanel} />

            case "Num": return <NumberFieldPanel
                setSchema={props.setSchema} setUischema={props.setUischema} schema={props.schema} uiSchema={props.uiSchema}
                editFieldKeyName={props.editFieldKeyName}
                closePanel={props.closePanel} />

            case "select": return <SelectFieldPanel
                setSchema={props.setSchema} setUischema={props.setUischema} schema={props.schema} uiSchema={props.uiSchema}
                editFieldKeyName={props.editFieldKeyName}
                closePanel={props.closePanel} />

            case "Textarea": return <TextareaPanel
                setSchema={props.setSchema} setUischema={props.setUischema} schema={props.schema} uiSchema={props.uiSchema}
                editFieldKeyName={props.editFieldKeyName}
                closePanel={props.closePanel} />

            case "Checkbox": return <CheckboxPanel
            setSchema={props.setSchema} setUischema={props.setUischema} schema={props.schema} uiSchema={props.uiSchema}
            editFieldKeyName={props.editFieldKeyName}
            closePanel={props.closePanel} />
        }
    }

}

export default EditPanel
