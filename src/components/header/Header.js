import React from 'react'
import './Header.css'
import {StarSharp, AddSharp, DescriptionSharp} from '@mui/icons-material';

function Header() {
    return (
        <div>
            <div className="lower-header">


                <div className="tasks">
                    <div className="update">
                        <div className="info-1">
                            <h2>Hello user!</h2>
                            <h3>You've got N <br/>tasks today</h3>
                        </div>

                    </div>
                    <div className="task">
                        <div className="box">
                            <DescriptionSharp/>
                            <h1>05</h1>
                            <h3>Current tasks</h3>
                        </div>

                    </div>
                    <div className="task">
                        <div className="box">
                            <StarSharp/>
                            <h1>03</h1>
                            <h3>Upcoming tasks</h3>
                        </div>

                    </div>
                    <div className="create-task">
                        <div className="box">
                            <AddSharp/>
                            <h1>Create tasks</h1>
                            <h3>Create a new task</h3>
                        </div>

                    </div>
                </div>



            </div>
        </div>
    )
}

export default Header