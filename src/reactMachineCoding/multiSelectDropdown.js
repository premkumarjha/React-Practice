import React from "react";

const MultiSelectDropdown = () => {
  const options = [
    { value: "apple", label: "Apple", checked: false },
    { value: "banana", label: "Banana", checked: false },
    { value: "orange", label: "Orange", checked: false },
    { value: "kivi", label: "Banana", checked: false },
  ];
  const [optionsState, setOptionsState] = React.useState(options);
  const handleChange = (value) => {
    console.log("value", value);
    const res = optionsState.map((option) => {
      if (option?.value === value) {
        return { ...option, checked: !option?.checked };
      } else {
        return option; ///else must do else page break and will not work.
      }
    });
    setOptionsState(res);
  };
  return (
    <>
      {optionsState.map((option) => (
        <label key={option.value}>
          <input
            type="checkbox"
            value={option?.value}
            name={option?.value}
            checked={option?.checked}
            onChange={(e) => handleChange(e.target.value)}
          />
          {option?.label}
        </label>
      ))}
    </>
  );
};
export default MultiSelectDropdown;
