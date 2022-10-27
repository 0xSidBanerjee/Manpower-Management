import React, { useState } from "react";
import "./ToDoList.css";
import MoreVertSharp from "@mui/icons-material/MoreVertSharp";
import { Delete } from "@mui/icons-material";

function ToDoList() {
     const [handleForm, setHandleForm] = useState("");

     const [itemList, setItemList] = useState([
          { name: "Start UI", key: Math.random() * 1000 },
          { name: "Framework Setup", key: Math.random() * 1000 },
          { name: "Firebase Setup", key: Math.random() * 1000 },
     ]);

     const addItemToList = () => {
          if (handleForm !== "") {
               setItemList([...itemList, { name: handleForm, key: Date.now() }]);
          }
          setHandleForm("");
     };

     const deleteItem = (id) => {
          setItemList(itemList.filter((item) => item.key !== id));
     };

     return (
          <div className="todo-list-container">
               <h3>Task to be completed</h3>

               <div className="todo-main-section">
                    <div className="list-container">
                         {itemList.map((item) => {
                              return (
                                   <div className="item">
                                        <div className="item-left">
                                             <input type="radio" />
                                             <p>{item.name}</p>
                                        </div>
                                        <button
                                             className="delete-button"
                                             onClick={() => deleteItem(item.key)}
                                        >
                                             <Delete />
                                        </button>
                                   </div>
                              );
                         })}
                    </div>

                    <input
                         type="text"
                         value={handleForm}
                         onChange={(e) => {
                              setHandleForm(e.target.value);
                         }}
                    />
                    <button id="addBtn" onClick={addItemToList}>
                         Add Todo
                    </button>
               </div>
          </div>
     );
}

export default ToDoList;
