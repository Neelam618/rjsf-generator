import React from 'react'
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal'

function Toolbox(props) {
    return (
        <div style={{width: '30%'}}>
            <div>
                <ul style={{paddingLeft: 0, border: "1px solid gray"}}>
                    <li className="tools" onClick={() => props.addTxtInput()} style={{padding: 10, borderBottom: "1px solid black", listStyleType: 'none'}}>
                        <span>Text input</span>
                    </li>
                    <li className="tools" onClick={() => props.addNumInput()} style={{padding: 10, borderBottom: "1px solid black", listStyleType: 'none'}}>
                        <span>Number input</span>
                    </li>
                    <li className="tools" onClick={() => props.addSelect()} style={{padding: 10, borderBottom: "1px solid black", listStyleType: 'none'}}>
                        <span>Select</span>
                    </li>
                    <li className="tools" onClick={() => props.addTxtarea()} style={{padding: 10, borderBottom: "1px solid black", listStyleType: 'none'}}>
                        <span>Text area</span>
                    </li>
                    <li className="tools" onClick={() => props.addCheckbox()} style={{padding: 10, borderBottom: "1px solid black", listStyleType: 'none'}}>
                        <span>Checkbox</span>
                    </li>
                    <li className="tools" onClick={() => props.addRadioButtons()} style={{padding: 10, borderBottom: "1px solid black", listStyleType: 'none'}}>
                        <span>Radio Buttons</span>
                    </li>
                    <li className="tools" onClick={() => props.addIntRange()} style={{padding: 10, borderBottom: "1px solid black", listStyleType: 'none'}}>
                        <span>Integer Range</span>
                    </li>
                    <li className="tools" onClick={() => props.addMultipleChoiceList()} style={{padding: 10, borderBottom: "1px solid black", listStyleType: 'none'}}>
                        <span>Multiple choice list</span>
                    </li>
                    <li className="tools" onClick={() => props.addDate()} style={{padding: 10, borderBottom: "1px solid black", listStyleType: 'none'}}>
                        <span>Date Field</span>
                    </li>
                    <li className="tools" onClick={() => props.addDateTime()} style={{padding: 10, borderBottom: "1px solid black", listStyleType: 'none'}}>
                        <span>Date Time Field</span>
                    </li>
                    {/* <li className="tools" onClick={() => props.addAltDate()} style={{padding: 10, borderBottom: "1px solid black", listStyleType: 'none'}}>
                        <span>Alternative Date Field</span>
                    </li> */}
                    <li className="tools" onClick={() => props.chooseFile()} style={{padding: 10, borderBottom: "1px solid black", listStyleType: 'none'}}>
                        <span>Choose File</span>
                    </li>
                    <li className="tools" onClick={() => props.chooseMultipleFiles()} style={{padding: 10, borderBottom: "1px solid black", listStyleType: 'none'}}>
                        <span>Choose Multiple Files</span>
                    </li>
                    </ul>
                </div>
                <MyVerticallyCenteredModal schema={props.schema} uiSchema={props.uiSchema} />
        </div>
    )
}

export default Toolbox
