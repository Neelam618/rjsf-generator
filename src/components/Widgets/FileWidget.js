import React from "react";
import FileWidget from "@rjsf/core/dist/cjs/components/widgets/FileWidget";

const BootstrapFileWidget = (props) => {
  return (
    <>
      <label className={props.rawErrors?.length > 0 ? 'text-danger' : ''}>
        {props.label || props.schema.title}
        {(props.label || props.schema.title) && props.required ? '*' : null}
      </label>
      <div className="form-control-file">
        <FileWidget {...props} type="file" />
      </div>
    </>
  );
};

export default BootstrapFileWidget;