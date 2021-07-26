import { buttonProperties } from '@fluentui/react'
import React from 'react'

function DisplaySchema(props) {
    function displaySchema(){
        console.log("schema", props.schema)
        console.log("uiSchema", props.uiSchema)
    }
    return (
        <button onClick={displaySchema}>Generate Schema</button>
        
    )
}

export default DisplaySchema
