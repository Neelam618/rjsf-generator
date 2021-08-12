import React from 'react'
import './styles.css'

function Toolbox(props) {
    return (
        <div style={{width: '30%'}} id="toolbox">
            <div className="icons">
                <ul style={{paddingLeft: 0 }}>
                    <li className="tools text" onClick={() => props.addTxtInput()} >
                        <span><img src="img/text_fields_black_24dp.svg" />Text input</span>
                    </li>
                    <li className="tools" onClick={() => props.addNumInput()} >
                        <span><img src="img/pin_black_24dp.svg" />Number input</span>
                    </li>
                    <li className="tools" onClick={() => props.addSelect()} >
                        <span><img src="img/arrow_drop_down_circle_black_24dp.svg" />Select</span>
                    </li>
                    <li className="tools" onClick={() => props.addTxtarea()} >
                        <span><img src="img/crop_landscape_black_24dp.svg" />Text area</span>
                    </li>
                    <li className="tools" onClick={() => props.addCheckbox()} >
                        <span><img src="img/check_box_black_24dp.svg" />Checkbox</span>
                    </li>
                    <li className="tools" onClick={() => props.addCheckboxGroup()} >
                        <span><img src="img/checklist_black_24dp.svg" />Checkbox Group</span>
                    </li>
                    <li className="tools" onClick={() => props.addRadioButtons()} >
                        <span><img src="img/radio_button_checked_black_24dp.svg" />Radio Buttons</span>
                    </li>
                    <li className="tools" onClick={() => props.addIntRange()} >
                        <span><img src="img/linear_scale_black_24dp.svg" />Integer Range</span>
                    </li>
                    <li className="tools" onClick={() => props.addMultipleChoiceList()} >
                        <span><img src="img/format_list_numbered_black_24dp.svg" />Multiple choice list</span>
                    </li>
                    <li className="tools" onClick={() => props.addDate()} >
                        <span><img src="img/date_range_black_24dp.svg" />Date Field</span>
                    </li>
                    <li className="tools" onClick={() => props.addDateTime()} >
                        <span><img src="img/event_note_black_24dp.svg" />Date Time Field</span>
                    </li>
                    {/* <li className="tools" onClick={() => props.addAltDate()} >
                        <span>Alternative Date Field</span>
                    </li> */}
                    <li className="tools" onClick={() => props.chooseFile()} >
                        <span><img src="img/file_present_black_24dp.svg" />Attach File</span>
                    </li>
                    <li className="tools" onClick={() => props.chooseMultipleFiles()} >
                        <span><img src="img/perm_media_black_24dp.svg" />Attach Multiple Files</span>
                    </li>
                    </ul>
                </div>
                {/* <MyVerticallyCenteredModal schema={props.schema} uiSchema={props.uiSchema} /> */}
        </div>
    )
}

export default Toolbox
