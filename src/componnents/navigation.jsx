import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../css/navigation.css"
import { CiMenuBurger } from "react-icons/ci";



export default function Navigation() {
    const [isBurgerOpen, setBurgerOpen] = useState(false)

    return (
        <div className='container-fluid'>
            <header className='container-fluid'>
                <div className=''>

                    <div className='row'>
                        <div className='row'>
                             <Link to={"configuration"}>Configuration</Link>
                            <ul className={isBurgerOpen?"":"d-none"}>
                                <li><Link to={"/"}>Home</Link></li>
                                <li><Link to={"email"}>Email</Link></li>
                                <li><Link to={"matrix"}>Matrix</Link></li>
                                <li><Link to={"pacman"}>Pacman</Link></li>
                            </ul>
                        </div>
                        <div className='burger' onClick={() => setBurgerOpen(!isBurgerOpen)}>{<CiMenuBurger />}</div>
                    </div>
                </div>
            </header>
        </div>
    )
}
