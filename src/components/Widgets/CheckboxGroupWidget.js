const CheckboxGroupWidget = (props) => {
    function selectValue(value, selected, all) {
        const at = all.indexOf(value);
        const updated = selected.slice(0, at).concat(value, selected.slice(at));
        // As inserting values at predefined index positions doesn't work with empty
        // arrays, we need to reorder the updated selection to match the initial order
        return updated.sort((a, b) => all.indexOf(a) > all.indexOf(b));
      }
      
      function deselectValue(value, selected) {
        return selected.filter(v => v !== value);
      }

    const { id, disabled, options, value, autofocus, readonly, onChange } = props;
    const { enumOptions, enumDisabled, inline } = options;
    return (
        <div className="checkboxes" id={id}>
            {enumOptions.map((option, index) => {
                const checked = value.indexOf(option.value) !== -1;
                const itemDisabled =
                    enumDisabled && enumDisabled.indexOf(option.value) != -1;
                const disabledCls =
                    disabled || itemDisabled || readonly ? "disabled" : "";
                const checkbox = (
                    <span className="form-check">
                        <input
                            type="checkbox"
                            id={`${id}_${index}`}
                            className="form-check-input"
                            checked={checked}
                            disabled={disabled || itemDisabled || readonly}
                            autoFocus={autofocus && index === 0}
                            onChange={event => {
                                const all = enumOptions.map(({ value }) => value);
                                if (event.target.checked) {
                                    onChange(selectValue(option.value, value, all));
                                } else {
                                    onChange(deselectValue(option.value, value));
                                }
                            }}
                        />
                        <span className="form-check-label">{option.label}</span>
                    </span>
                );
                return inline ? (
                    <label key={index} className={`checkbox-inline ${disabledCls}`}>
                        {checkbox}
                    </label>
                ) : (
                    <div key={index} className={`checkbox ${disabledCls}`}>
                        <label>{checkbox}</label>
                    </div>
                );
            })}
        </div>
    );
  };
  
  export default CheckboxGroupWidget;