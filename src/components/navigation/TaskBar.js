import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCartShopping ,faUser } from '@fortawesome/free-solid-svg-icons'
import React from "react";
import { NavLink } from "react-router-dom"
import changeClass from "../../styles/js/style";
class TaskBar extends React.Component {
    render() {
        return (
            <nav id="taskbar" className="taskbar-box">
                <div className="taskbar-box__container">

                    <NavLink to="mini-store" end className={(navData) => "task-bar-item " + (navData.isActive ? "task-bar-item--active" : "")} onClick={() => changeClass('taskbar','show')} >
                        <FontAwesomeIcon className="task-bar-item__icon" icon={faHome} />
                        <h1 className="task-bar-item__title">Home</h1>
                    </NavLink>


                    <NavLink to="mini-store/cart" end className={(navData) => "task-bar-item " + (navData.isActive ? "task-bar-item--active" : "")} onClick={() => changeClass('taskbar','show')} >
                        <FontAwesomeIcon className="task-bar-item__icon" icon={faCartShopping} />
                        <h1 className="task-bar-item__title">Cart</h1>
                    </NavLink>

                    <NavLink to="mini-store/info" end id="nav-Info" className={(navData) => "task-bar-item " + (navData.isActive ? "task-bar-item--active" : "")} onClick={() => changeClass('taskbar','show')}>
                        <FontAwesomeIcon className="task-bar-item__icon" icon={faUser} />
                        <h1 className="task-bar-item__title">Infomation</h1>
                    </NavLink>



                </div>

            </nav>
        )
    }
}

export default TaskBar