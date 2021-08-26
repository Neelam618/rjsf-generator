import React from 'react'
import TextFieldPanel from './Panels/TextFieldPanel';
import NumberFieldPanel from './Panels/NumberFieldPanel';
import SelectFieldPanel from './Panels/SelectFieldPanel';
import TextareaPanel from './Panels/TextareaPanel';
import CheckboxGroupPanel from './Panels/CheckboxGroupPanel'
import RadioButtonsPanel from './Panels/RadioButtonsPanel';
import RangePanel from './Panels/RangePanel'
import MultipleChoiceListPanel from './Panels/MultipleChoiceListPanel';
import DateFieldPanel from './Panels/DateFieldPanel'
import DateTimeFieldPanel from './Panels/DateTimeFieldPanel'
import FilePanel from './Panels/FilePanel';
import MultipleFilesPanel from './Panels/MultipleFilesPanel';

function EditPanel(props) {
    let newSchema = JSON.parse(JSON.stringify(props.schema));
    let schemaConfigForKey = newSchema['properties'][props.editFieldKeyName];

    if (schemaConfigForKey) {

        switch (props.editFieldKeyName.split("_")[0]) {
            case "text": return <TextFieldPanel
                setSchema={props.setSchema} setUischema={props.setUischema} schema={props.schema} uiSchema={props.uiSchema}
                editFieldKeyName={props.editFieldKeyName}
                closePanel={props.closePanel} />

            case "num": return <NumberFieldPanel
                setSchema={props.setSchema} setUischema={props.setUischema} schema={props.schema} uiSchema={props.uiSchema}
                editFieldKeyName={props.editFieldKeyName}
                closePanel={props.closePanel} />

            case "select": return <SelectFieldPanel
                setSchema={props.setSchema} setUischema={props.setUischema} schema={props.schema} uiSchema={props.uiSchema}
                editFieldKeyName={props.editFieldKeyName}
                closePanel={props.closePanel} />

            case "textarea": return <TextareaPanel
                setSchema={props.setSchema} setUischema={props.setUischema} schema={props.schema} uiSchema={props.uiSchema}
                editFieldKeyName={props.editFieldKeyName}
                closePanel={props.closePanel} />

            case "checkboxGroup": return <CheckboxGroupPanel
                setSchema={props.setSchema} setUischema={props.setUischema} schema={props.schema} uiSchema={props.uiSchema}
                editFieldKeyName={props.editFieldKeyName}
                closePanel={props.closePanel} />

            case "radioSwitch": return <RadioButtonsPanel
                setSchema={props.setSchema} setUischema={props.setUischema} schema={props.schema} uiSchema={props.uiSchema}
                editFieldKeyName={props.editFieldKeyName}
                closePanel={props.closePanel} />

            case "intRange": return <RangePanel
                setSchema={props.setSchema} setUischema={props.setUischema} schema={props.schema} uiSchema={props.uiSchema}
                editFieldKeyName={props.editFieldKeyName}
                closePanel={props.closePanel} />

            case "date": return <DateFieldPanel
                setSchema={props.setSchema} setUischema={props.setUischema} schema={props.schema} uiSchema={props.uiSchema}
                editFieldKeyName={props.editFieldKeyName}
                closePanel={props.closePanel} />

            case "dateTime": return <DateTimeFieldPanel
                setSchema={props.setSchema} setUischema={props.setUischema} schema={props.schema} uiSchema={props.uiSchema}
                editFieldKeyName={props.editFieldKeyName}
                closePanel={props.closePanel} />

            case "multipleChoiceList": return <MultipleChoiceListPanel
                setSchema={props.setSchema} setUischema={props.setUischema} schema={props.schema} uiSchema={props.uiSchema}
                editFieldKeyName={props.editFieldKeyName}
                closePanel={props.closePanel} />

            case "chooseFile": return <FilePanel
                setSchema={props.setSchema} setUischema={props.setUischema} schema={props.schema} uiSchema={props.uiSchema}
                editFieldKeyName={props.editFieldKeyName}
                closePanel={props.closePanel} />

            case "chooseMultipleFiles": return <MultipleFilesPanel
                setSchema={props.setSchema} setUischema={props.setUischema} schema={props.schema} uiSchema={props.uiSchema}
                editFieldKeyName={props.editFieldKeyName}
                closePanel={props.closePanel} />
                
            // skip default case
        }
    }

}

export default EditPanel
