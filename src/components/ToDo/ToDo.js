import React from 'react'
import './ToDo.css'
function ToDo() {
    return (
        <div className='main-container'>
            <h1>Task to be completed</h1>
            <div className="to-do-container">
                <div className="to-do-input">
                    <input type="radio" />
                    Start UI
                    <br />
                </div>

                <div className="to-do-input">
                    <input type="radio" />
                    Start UI
                    <br />
                </div>
                <div className="to-do-input">
                    <input type="radio" />
                    Framework Setup
                    <br />
                </div>
                <div className="to-do-input">
                    <input type="radio" />
                    Firebase setup
                    <br />
                </div>
                <div className="to-do-input">
                    <input type="radio" />
                    Content Review
                    <br />
                </div>
                <div className="to-do-input">
                    <input type="radio" />
                    UX implementation
                    <br />
                </div>
                <button>Add todo</button>
            </div>
        </div>
    )
}

export default ToDo