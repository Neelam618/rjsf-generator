import React from 'react';
import FormBuilder from "./components/FormBuilder";
// import Button from 'react-bootstrap/Button';
// import MyVerticallyCenteredModal from "./components/MyVerticallyCenteredModal";

function App() {
  // const [modalShow, setModalShow] = React.useState(false);

  return (
    <div >
      <FormBuilder />
      {/* <Button variant="primary" onClick={() => setModalShow(true)}>
        Generate Schema
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />     */}
    </div>
  );
}

export default App;
