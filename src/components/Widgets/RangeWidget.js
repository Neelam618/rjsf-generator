const RangeWidget = (props) => {
    console.log(props)
    return (
      <>
        <label className='form-label'>{props.label}</label>
        <input type="range"
          className='form-range'
          abc='76567'
          value={props.value}
          required={props.required}
          onChange={(event) => props.onChange(event.target.value)} >
          </input>
      </>
    );
  };
  
  export default RangeWidget;