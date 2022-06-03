import React from 'react'
import {NavLink} from 'react-router-dom'


function Menu(){
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container">
                <NavLink to={`/`} className="navbar-brand">Redux Crud</NavLink>


                <buntton className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#Menu">
                    <span className="navbar-toggle-icon"></span>

                </buntton>


                <div className="collapse navbar-collapse" id="menu">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to={`/home`} className="nav-link">Home</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to={`/create`} className="nav-link">Create</NavLink>
                            </li>
                        </ul>

                </div>
            </div>
        </nav>
    )
}

export default Menu