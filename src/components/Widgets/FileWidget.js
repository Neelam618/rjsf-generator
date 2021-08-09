import React from "react";
import FileWidget from "@rjsf/core/dist/cjs/components/widgets/FileWidget";

const BootstrapFileWidget = (props) => {
  return (
    <>
      {/* <label className={props.rawErrors?.length > 0 ? 'text-danger' : ''}> */}
      <label className={props.rawErrors?.length > 0 ? 'text-danger' : 'form-label'}>
        {props.label || props.schema.title}
        {(props.label || props.schema.title) && props.required ? '*' : null}
      </label>
      {/* <div className="form-control-file">
        <FileWidget {...props} type="file" />
      </div> */}
      <input type="file"
          className='form-control'
          value={props.value}
          required={props.required}
          onChange={(event) => props.onChange(event.target.value)} >
      </input>
    </>
  );
};

export default BootstrapFileWidget;