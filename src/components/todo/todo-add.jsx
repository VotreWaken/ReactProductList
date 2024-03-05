import React from 'react';
import { useState } from 'react';
import imageNotes from '../../assets/Notes.svg';
import imageAccept from '../../assets/Accept.svg';
const TodoAdd = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [titleError, setTitleError] = useState(null);


  const clickHandler = () => { 
    if (title.trim().length === 0) { 
      setTitleError('Field is required');
      return;
    }
    addTask(title);
    setTitle('');
    setTitleError(null);
  }

  return (
    <div className="input-container">
      <img className='image-preview' src={imageNotes} alt="Button" />
      <input
        className='todo__input'
        type="text"
        placeholder='Enter your next task'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={(e) => { if( e.code === 'Enter') clickHandler() }}
      />
      <button className='input__createbtn' onClick={clickHandler}>
      <img className='todo__input__createbtn' src={imageAccept} alt="Button" />
      </button>

      {titleError && <div>{titleError}</div>}
    </div>
  );
};

export default TodoAdd;
