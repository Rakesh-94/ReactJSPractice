import React, { useState } from 'react';

function QuestionnoSix() {
  const [options, setOptions] = useState([]);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setOptions((prevOptions) => [...prevOptions, value]);
    } else {
      setOptions((prevOptions) => prevOptions.filter((option) => option !== value));
    }
  };

  return (
    <div>
      <h3>Checklist</h3>
      <label>
        <input
          type="checkbox"
          value="Option 1"
          onChange={handleCheckboxChange}
        />
        Option 1
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          value="Option 2"
          onChange={handleCheckboxChange}
        />
        Option 2
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          value="Option 3"
          onChange={handleCheckboxChange}
        />
        Option 3
      </label>
      <br />
      <h4>Selected options:</h4>
      {options.map((option, index) => (
        <p key={index}>{option}</p>
      ))}
    </div>
  );
}

export default QuestionnoSix;
