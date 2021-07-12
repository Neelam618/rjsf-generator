import React from 'react'

function Toolbox(props) {
    return (
        <div>
            <div>
                <ul style={{paddingLeft: 0, border: "1px solid gray", width: '350px'}}>
                    <li onClick={() => props.addTxtInput()} style={{padding: 10, borderBottom: "1px solid black", listStyleType: 'none'}}>
                        <span>Text input</span>
                    </li>
                    <li onClick={() => props.addNumInput()} style={{padding: 10, borderBottom: "1px solid black", listStyleType: 'none'}}>
                        <span>Number input</span>
                    </li>
                    <li onClick={() => props.addDropdownTxt()} style={{padding: 10, borderBottom: "1px solid black", listStyleType: 'none'}}>
                        <span>Dropdown text</span>
                    </li>
                    <li onClick={() => props.addTxtarea()} style={{padding: 10, borderBottom: "1px solid black", listStyleType: 'none'}}>
                        <span>Text area</span>
                    </li>
                    <li onClick={() => props.addCheckbox()} style={{padding: 10, borderBottom: "1px solid black", listStyleType: 'none'}}>
                        <span>Checkbox</span>
                    </li>
                    <li onClick={() => props.addRadioGroup()} style={{padding: 10, borderBottom: "1px solid black", listStyleType: 'none'}}>
                        <span>Radio Group</span>
                    </li>
                    <li onClick={() => props.addIntRange()} style={{padding: 10, borderBottom: "1px solid black", listStyleType: 'none'}}>
                        <span>Integer Range</span>
                    </li>
                    <li onClick={() => props.addIntRangeSteps()} style={{padding: 10, borderBottom: "1px solid black", listStyleType: 'none'}}>
                        <span>Integer Range by Steps</span>
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
                    <li onClick={() => props.addAltDate()} style={{padding: 10, borderBottom: "1px solid black", listStyleType: 'none'}}>
                        <span>Alternative Date Field</span>
                    </li>
                    </ul>
                </div>
        </div>
    )
}

export default Toolbox
