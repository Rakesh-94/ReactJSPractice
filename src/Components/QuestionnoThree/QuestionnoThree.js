import React from "react";

const items = ["item1", "item2", "item3", "item4"];

const QuestionnoThree = () => {
    
  return (
    <div>
      <h1>List of Items</h1>
      <ul>
        {items.map((item, index) => (
          <li style={{ listStyle: "none" }} key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionnoThree;
