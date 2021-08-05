const SelectWidget = (props) => {
    // console.log(props)
    return (
      <>
        <label className='form-label'>{props.label}</label>
        <select type="text"
          className='form-select'
          abc='76567'
          value={props.value}
          required={props.required}
          onChange={(event) => props.onChange(event.target.value)} >
          <option>{props.schema.enumNames[0]}</option>
          <option>{props.schema['enumNames'][1]}</option>
          </select>
      </>
    );
  };
  
  export default SelectWidget;