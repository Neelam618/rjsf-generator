const MultipleChoiceWidget = (props) => {
    console.log(props)
    return (
      <>
        <label className='form-label'>{props.label}</label>
        <select type="text"
          className='form-select'
          abc='76567'
          value={props.value}
          required={props.required}
          onChange={(event) => props.onChange(event.target.value)} >
            <option value="">BIG BAD BUG</option>
          {props.schema.items.enum.map(x => <option>{x}</option>)}
        </select>
      </>
    );
  };
  
  export default MultipleChoiceWidget;