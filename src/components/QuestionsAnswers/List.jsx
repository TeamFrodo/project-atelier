import React, { useState } from 'react';
import Answers from './Answers';

const List = ({ questions }) => {
  //should import Answers for every questionID(imported from Answers)
  //have a add answer(imported from AddAnswer)
  //each question should have a button for helpfulness
  //each question should have a report button(pops up modal)
  //more questions button, loads another 2 questions onto the dom

  const [searchTerm, setSearchTerm] = useState('');

  const filteredQuestions = questions.filter(question => {
    return question.question_body.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

  //each question map out the answer and display 2 at max
  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search for questions here..."
        style={{
          opacity: searchTerm ? 1 : 0.5,
          border: '1px solid black',
          width: '500px',
        }}
      />
      <ul>
        {searchTerm === '' ? (
          questions.slice(0, 4).map(question => (
            <li 
            key={question.question_id} style={{ marginBottom: '10px' }}>Question: {question.question_body}
            <Answers questionId= {question.question_id}/>
            </li>
          ))
        ) : (
          filteredQuestions.slice(0, 4).map(question => (
            <li 
            key={question.question_id} style={{ marginBottom: '10px' }}>Question: {question.question_body}
            <Answers questionId= {question.question_id}/>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default List;
