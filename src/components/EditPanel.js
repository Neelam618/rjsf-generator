import React from 'react'
import TextFieldPanel from './Panels/TextFieldPanel';
import NumberFieldPanel from './Panels/NumberFieldPanel';
import SelectFieldPanel from './Panels/SelectFieldPanel';
import TextareaPanel from './Panels/TextareaPanel';
import CheckboxGroupPanel from './Panels/CheckboxGroupPanel'
import RadioButtonsPanel from './Panels/RadioButtonsPanel';
import IntRangePanel from './Panels/IntRangePanel'
import MultipleChoiceListPanel from './Panels/MultipleChoiceListPanel';
import DateFieldPanel from './Panels/DateFieldPanel'
import DateTimeFieldPanel from './Panels/DateTimeFieldPanel' 
import ChooseFilePanel from './Panels/ChooseFilePanel';
import ChooseMultipleFilesPanel from './Panels/ChooseMultipleFilesPanel'

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

            case "intRange": return <IntRangePanel
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

            case "chooseFile": return <ChooseFilePanel
                setSchema={props.setSchema} setUischema={props.setUischema} schema={props.schema} uiSchema={props.uiSchema}
                editFieldKeyName={props.editFieldKeyName}
                closePanel={props.closePanel} />

            case "chooseMultipleFiles": return <ChooseMultipleFilesPanel
                setSchema={props.setSchema} setUischema={props.setUischema} schema={props.schema} uiSchema={props.uiSchema}
                editFieldKeyName={props.editFieldKeyName}
                closePanel={props.closePanel} />

        }
    }

}

export default EditPanel
