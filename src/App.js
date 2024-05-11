import React, { useRef, useState } from 'react';
import './App.css';
import List from './components/List/List';

function App() {

  const initialItems = ['Hello', 'Pavel', 'in', 'It'];

  const [items, setItems] = useState(initialItems);

  

  const textInput = useRef(null);


  const focusInput = () => {
    textInput.current.focus()
  };


  const addItems = (event) => {
    if (event.key === 'Enter') {
      const newItem = event.target.value.trim();
      if (newItem !== '') {
        setItems((prevState) => [...prevState, newItem]);
        event.target.value = '';
      }
    }
  };

  return (
    <div className="App">
      <input type='text' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
       focus:ring-blue-500 focus:border-blue-500 block mx-auto p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"' ref={textInput} onKeyDown={addItems} />
      <button className="bg-blue-500 hover:bg-blue-700
       text-white font-bold py-2 px-4 rounded"
        onClick={() => focusInput()}

      >
        focusClick
      </button>
      <List items={items} />
    </div>
  );
}

export default App;
