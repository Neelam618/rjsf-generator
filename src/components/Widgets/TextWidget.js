const TextWidget = (props) => {
  console.log(props)
  return (
    <>
      <label className={"form-label " + props.uiSchema["labelClass"]}>{props.label}</label>
      <input type="text"
        className={'form-control ' + props.uiSchema["inputClass"]}
        abc='76567'
        value={props.value}
        required={props.required}
        onChange={(event) => props.onChange(event.target.value)} />
    </>
  );
};

export default TextWidget;