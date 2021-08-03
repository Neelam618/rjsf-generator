const TextWidget = (props) => {
  console.log(props)
  return (
    <input type="text"
      className={'form-control ' + props.inputClass}
      abc='76567'
      value={props.value}
      required={props.required}
      onChange={(event) => props.onChange(event.target.value)} />
  );
};
  
export default TextWidget;