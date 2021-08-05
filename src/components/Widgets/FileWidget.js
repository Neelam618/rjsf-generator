const FileWidget = (props) => {
    console.log(props)
    return (
      <>
        <label className='form-label'>{props.label}</label>
        <input type="file"
          className='form-control'
          abc='76567'
          value={props.value}
          required={props.required}
          onChange={(event) => props.onChange(event.target.value)} >
          </input>
      </>
    );
  };
  
  export default FileWidget;