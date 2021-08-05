import React from 'react';
import FormBuilder from "./components/FormBuilder";
import Button from 'react-bootstrap/Button';
import DisplaySchema from "./components/DisplaySchema";

function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div >
      <FormBuilder />
      <Button variant="primary" onClick={() => setModalShow(true)}>
               Generate Schema
            </Button>

            <DisplaySchema
                show={modalShow}
                onHide={() => setModalShow(false)}
            />    </div>
  );
}

export default App;
