import React, { useEffect, useState } from 'react'
import global_styles from '../style.module.css'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
    const [day, setDay] = useState("");
    const [time, setTime] = useState("");
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    useEffect(()=>{
        let i = setInterval(()=>{
            let current = new Date();
            setDay(weekDays[current.getDay()]);
            setTime(`${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`);
            console.log("sdf"
            )
        }, 1000);
    }, [])


    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">World Today</a>
                    <div>|&nbsp;&nbsp;</div>
                    <div>{`${time} ${day}`}</div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        </ul>
                     
                    </div>
                </div>
            </nav>
            <div className={global_styles.navbar_options_container}>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <ul style={{ display: 'flex', color: 'white', listStyle: 'none', margin: '0' }}>
                        <li className={global_styles.navbar_option}><NavLink to="/" className={({ isActive }) =>
                            isActive ? `${global_styles.navbar_option_selected}` : `${global_styles.navbar_option_unselected}`
                        }>Home</NavLink></li>
                        <li className={global_styles.navbar_option}><NavLink to="/new" className={({ isActive }) =>
                            isActive ? `${global_styles.navbar_option_selected}` : `${global_styles.navbar_option_unselected}`
                        }>New</NavLink></li>
                        
                        
                    </ul>
                </div>

            </div>
        </div>
    )
}
