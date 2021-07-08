import React from 'react'

function Toolbox() {
    return (
        <div>
            <div>
                <ul style={{paddingLeft: 0, border: "1px solid gray", width: '350px'}}>
                    <li style={{padding: 10, borderBottom: "1px solid black", listStyleType: 'none'}}>
                        <span>Text input</span>
                    </li>
                    <li style={{padding: 10, borderBottom: "1px solid black", listStyleType: 'none'}}>
                        <span>Number input</span>
                    </li>
                    <li style={{padding: 10, borderBottom: "1px solid black", listStyleType: 'none'}}>
                        <span>Dropdown text</span>
                    </li>
                    <li style={{padding: 10, borderBottom: "1px solid black", listStyleType: 'none'}}>
                        <span>Text area</span>
                    </li>
                    <li style={{padding: 10, borderBottom: "1px solid black", listStyleType: 'none'}}>
                        <span>File Upload</span>
                    </li>
                    <li style={{padding: 10, borderBottom: "1px solid black", listStyleType: 'none'}}>
                        <span>Header</span>
                    </li>
                    <li style={{padding: 10, borderBottom: "1px solid black", listStyleType: 'none'}}>
                        <span>Checkbox</span>
                    </li>
                    <li style={{padding: 10, borderBottom: "1px solid black", listStyleType: 'none'}}>
                        <span>Number</span>
                    </li>
                    <li style={{padding: 10, borderBottom: "1px solid black", listStyleType: 'none'}}>
                        <span>Paragraph</span>
                    </li>
                    <li style={{padding: 10, borderBottom: "1px solid black", listStyleType: 'none'}}>
                        <span>Radio Group</span>
                    </li>
                    <li style={{padding: 10, borderBottom: "1px solid black", listStyleType: 'none'}}>
                        <span>Select</span>
                    </li>
                    <li style={{padding: 10, borderBottom: "1px solid black", listStyleType: 'none'}}>
                        <span>Text Field</span>
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
