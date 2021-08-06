import React from 'react'

function Toolbox(props) {
    return (
        <div style={{width: '30%'}}>
            <div>
                <ul style={{paddingLeft: 0 }}>
                    <li className="tools" onClick={() => props.addTxtInput()} >
                        <span>Text input</span>
                    </li>
                    <li className="tools" onClick={() => props.addNumInput()} >
                        <span>Number input</span>
                    </li>
                    <li className="tools" onClick={() => props.addSelect()} >
                        <span>Select</span>
                    </li>
                    <li className="tools" onClick={() => props.addTxtarea()} >
                        <span>Text area</span>
                    </li>
                    <li className="tools" onClick={() => props.addCheckbox()} >
                        <span>Checkbox</span>
                    </li>
                    <li className="tools" onClick={() => props.addRadioButtons()} >
                        <span>Radio Buttons</span>
                    </li>
                    <li className="tools" onClick={() => props.addIntRange()} >
                        <span>Integer Range</span>
                    </li>
                    <li className="tools" onClick={() => props.addMultipleChoiceList()} >
                        <span>Multiple choice list</span>
                    </li>
                    <li className="tools" onClick={() => props.addDate()} >
                        <span>Date Field</span>
                    </li>
                    <li className="tools" onClick={() => props.addDateTime()} >
                        <span>Date Time Field</span>
                    </li>
                    {/* <li className="tools" onClick={() => props.addAltDate()} >
                        <span>Alternative Date Field</span>
                    </li> */}
                    <li className="tools" onClick={() => props.chooseFile()} >
                        <span>Choose File</span>
                    </li>
                    <li className="tools" onClick={() => props.chooseMultipleFiles()} >
                        <span>Choose Multiple Files</span>
                    </li>
                    </ul>
                </div>
                {/* <MyVerticallyCenteredModal schema={props.schema} uiSchema={props.uiSchema} /> */}
        </div>
    )
}

export default Toolbox
