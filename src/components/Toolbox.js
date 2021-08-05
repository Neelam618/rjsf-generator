import React from 'react'
import DisplaySchema from './DisplaySchema'

function Toolbox(props) {
    return (
        <div style={{width: '30%'}}>
            <div>
                <ul style={{paddingLeft: 0, border: "1px solid gray"}}>
                    <li onClick={() => props.addTxtInput()} style={{padding: 10, borderBottom: "1px solid black", listStyleType: 'none'}}>
                        <span>Text input</span>
                    </li>
                    <li onClick={() => props.addNumInput()} style={{padding: 10, borderBottom: "1px solid black", listStyleType: 'none'}}>
                        <span>Number input</span>
                    </li>
                    <li onClick={() => props.addSelect()} style={{padding: 10, borderBottom: "1px solid black", listStyleType: 'none'}}>
                        <span>Select</span>
                    </li>
                    <li onClick={() => props.addTxtarea()} style={{padding: 10, borderBottom: "1px solid black", listStyleType: 'none'}}>
                        <span>Text area</span>
                    </li>
                    <li onClick={() => props.addCheckbox()} style={{padding: 10, borderBottom: "1px solid black", listStyleType: 'none'}}>
                        <span>Checkbox</span>
                    </li>
                    <li onClick={() => props.addRadioButtons()} style={{padding: 10, borderBottom: "1px solid black", listStyleType: 'none'}}>
                        <span>Radio Buttons</span>
                    </li>
                    <li onClick={() => props.addIntRange()} style={{padding: 10, borderBottom: "1px solid black", listStyleType: 'none'}}>
                        <span>Integer Range</span>
                    </li>
                    <li onClick={() => props.addMultipleChoiceList()} style={{padding: 10, borderBottom: "1px solid black", listStyleType: 'none'}}>
                        <span>Multiple choice list</span>
                    </li>
                    <li onClick={() => props.addDate()} style={{padding: 10, borderBottom: "1px solid black", listStyleType: 'none'}}>
                        <span>Date Field</span>
                    </li>
                    <li onClick={() => props.addDateTime()} style={{padding: 10, borderBottom: "1px solid black", listStyleType: 'none'}}>
                        <span>Date Time Field</span>
                    </li>
                    {/* <li onClick={() => props.addAltDate()} style={{padding: 10, borderBottom: "1px solid black", listStyleType: 'none'}}>
                        <span>Alternative Date Field</span>
                    </li> */}
                    <li onClick={() => props.chooseFile()} style={{padding: 10, borderBottom: "1px solid black", listStyleType: 'none'}}>
                        <span>Choose File</span>
                    </li>
                    <li onClick={() => props.chooseMultipleFiles()} style={{padding: 10, borderBottom: "1px solid black", listStyleType: 'none'}}>
                        <span>Choose Multiple Files</span>
                    </li>
                    </ul>
                </div>
                <DisplaySchema schema={props.schema} uiSchema={props.uiSchema} />
        </div>
    )
}

export default Toolbox
