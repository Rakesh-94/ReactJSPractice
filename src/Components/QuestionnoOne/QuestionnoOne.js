import React, { useState } from 'react';

const QuestionnoOne = () => {
    const [searchTerm, setSearchTerm] = useState('');
    // const [list, setList] = useState(['banana','apple', 'orange', 'Mango', 'Pineapple']);
    const list = ['banana','apple', 'orange', 'Mango', 'Pineapple'];

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };
  
  const filteredList = list.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log(filteredList)
    return (
        <div>
      <input type="text" placeholder="Search" value={searchTerm} onChange={handleSearch} />
      <ul>
        {filteredList.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
export default QuestionnoOne;



