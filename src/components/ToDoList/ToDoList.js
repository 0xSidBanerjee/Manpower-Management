import React from 'react';
import './ToDoList.css';
import { useState } from 'react';
import ListItem from './ListItem/ListItem';

function ToDoList() {

  const [currentItem, setCurrentItem] = useState(null);
  const [itemList, updateItemList] = useState([{item: "Start UI", key: Math.random()*1000},{item: "Framework Setup", key: Math.random()*1000}, {item: "Firebase Setup", key: Math.random()*1000}]);

  const onChangeHandler = e => {
    setCurrentItem(e.target.value);
  }

  const addItemToList = () => {
    updateItemList([...itemList, { item: currentItem, key: Date.now() }]);
    setCurrentItem("");
  }


  return (
    <div className='to-do-list-container'>
      <h3>Task to be completed</h3>
      <div className='to-do-container'>
        {/* <div className='input-container'>
          <input value={currentItem} onChange={onChangeHandler} />
        </div> */}
        <ListItem itemList={itemList} updateItemList={updateItemList} />
        <button id='addBtn' onClick={addItemToList}>Add Todo</button>
      </div>
    </div>
  )
}

export default ToDoList;