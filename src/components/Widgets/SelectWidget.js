
import { asNumber, guessType } from "@rjsf/core/lib/utils.js";

const nums = new Set(["number", "integer"]);

/**
 * This is a silly limitation in the DOM where option change event values are
 * always retrieved as strings.
 */
function processValue(schema, value) {
  // "enum" is a reserved word, so only "type" and "items" can be destructured
  const { type, items } = schema;
  if (value === "") {
    return undefined;
  } else if (type === "array" && items && nums.has(items.type)) {
    return value.map(asNumber);
  } else if (type === "boolean") {
    return value === "true";
  } else if (type === "number") {
    return asNumber(value);
  }

  // If type is undefined, but an enum is present, try and infer the type from
  // the enum values
  if (schema.enum) {
    if (schema.enum.every(x => guessType(x) === "number")) {
      return asNumber(value);
    } else if (schema.enum.every(x => guessType(x) === "boolean")) {
      return value === "true";
    }
  }

  return value;
}

function getValue(event, multiple) {
  if (multiple) {
    return [].slice
      .call(event.target.options)
      .filter(o => o.selected)
      .map(o => o.value);
  } else {
    return event.target.value;
  }
}

const SelectWidget = (props) => {
  const {
    schema,
    label,
    id,
    options,
    value,
    required,
    disabled,
    readonly,
    multiple,
    autofocus,
    onChange,
    onBlur,
    onFocus,
    placeholder,
    editFieldKeyName
  } = props;
  const { enumOptions, enumDisabled } = options;
  const emptyValue = multiple ? [] : "";
  console.log(props.schema)
  return (
    <>
      <label className='form-label'>{typeof label === "undefined" ? schema.title : label}{required ? "*" : null}</label>
      <select type="text" multiple={multiple}
        className='form-select'
        value={value}
        required={required}
        disabled={disabled}
        readonly={readonly}
        onChange={(event) => props.onChange(event.target.value)}
        onChange={event => {
          const newValue = getValue(event, multiple);
          onChange(processValue(schema, newValue));
        }}
      >
        {!multiple && schema.default === undefined && (
          <option value="">{placeholder}</option>
        )}
        {enumOptions.map(({ value, label }, i) => {
          const disabled = enumDisabled && enumDisabled.indexOf(value) !== -1;
          return (
            <option key={i} value={value} disabled={disabled}>
              {label}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default SelectWidget;