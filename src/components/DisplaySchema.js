import { buttonProperties } from '@fluentui/react'
import React, {useState} from 'react'
import { Modal, Button } from 'antd';

function DisplaySchema(props) {
    // function displaySchema(){
    //     console.log("schema", props.schema)
    //     console.log("uiSchema", props.uiSchema)
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
      };
    
      const handleOk = () => {
        setIsModalVisible(false);
      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
      };

      const schemaObj = {
          schema: props.schema
      };
    return (
        <>
        <Button type="primary" onClick={showModal}>Generate Schema</Button>

        <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <div>
                <pre>
                    {JSON.stringify(schemaObj, null, 2)}
                </pre>
            </div>
        </Modal>
        </>
    )
}

export default DisplaySchema
