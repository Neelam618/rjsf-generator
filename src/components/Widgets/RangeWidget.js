const RangeWidget = (props) => {
    console.log(props)
    return (
      <>
        <label className='form-label'>{props.label}{props.label && props.required ? '*' : null}</label>
        <input type="range"
          className='form-range'
          value={props.value}
          required={props.required}
          disabled={props.disabled || props.readonly}
          onChange={(event) => props.onChange(event.target.value)} >
          </input>
      </>
    );
  };
  
  export default RangeWidget;