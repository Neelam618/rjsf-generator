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
                        <span>Radio</span>
                    </li>
                    <li style={{padding: 10, borderBottom: "1px solid black", listStyleType: 'none'}}>
                        <span>Select</span>
                    </li>
                    <li style={{padding: 10, borderBottom: "1px solid black", listStyleType: 'none'}}>
                        <span>Text area</span>
                    </li>
                    <li style={{padding: 10, listStyleType: 'none'}}>
                        <span>Date Field</span>
                    </li>
                    </ul>
                </div>
        </div>
    )
}

export default Toolbox
