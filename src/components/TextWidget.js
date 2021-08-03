const MyCustomWidget = (props) => {
    console.log(props)
    return (
      <input type="text"
        className={props.inputClass}
        value={props.value}
        required={props.required}
        onChange={(event) => props.onChange(event.target.value)} />
    );
  };
  
  export default MyCustomWidget