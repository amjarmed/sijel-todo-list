import { useRef, useState } from 'react';
import Completed from './Completed';
const TodosSearch = (mydata = []) => {
  const [data, usedata] = useState([]);
  const [search, useSearch] = useState('');
  const inputRef = useRef([]);
  // search clicked hide input search and replaced with search input .
  usedata([...mydata]);

  const enterClick = (event) => {
    if (event.key === 'Enter') {
      todosfiletr(inputRef.current.values, data);
      inputRef.current.value = '';
    }
  };

  //
  const todosfiletr = (term, todos) => {
    const terms = term.toLocaleLowerCase();
    const dataobj = [...todos];

    const s = dataobj.filter((item) => item.todo.includes(terms));
    return s;
  };

  return (
    <input
      type='saerch'
      className='w-full p-2 block border rounded mb-5 focus:border-none focus:outline-none'
      placeholder='Search for a Todo...'
      ref={inputRef}
      onKeyDown={(e) => enterClick(e)}
    />
  );
};

export default TodosSearch;
