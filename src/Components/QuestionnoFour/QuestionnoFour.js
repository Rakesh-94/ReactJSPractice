import React, { useState } from 'react';

function QuestionnoFour() {
  const accordionData = [
    { title: 'Accordion 1', content: 'Content 1' },
    { title: 'Accordion 2', content: 'Content 2' },
    { title: 'Accordion 3', content: 'Content 3' }
  ];

  const [accordionVisibility, setAccordionVisibility] = useState(
    accordionData.map(() => false)
  );

  const toggleAccordion = (index) => {
    setAccordionVisibility((prevState) => {
      const updatedVisibility = [...prevState];
      updatedVisibility[index] = !prevState[index];
      return updatedVisibility;
    });
  };

  return (
    <div>
      {accordionData.map((item, index) => (
        <div key={index}>
          <button onClick={() => toggleAccordion(index)}>
            {item.title}
          </button>
          {accordionVisibility[index] && <p>{item.content}</p>}
        </div>
      ))}
    </div>
  );
}

export default QuestionnoFour;
