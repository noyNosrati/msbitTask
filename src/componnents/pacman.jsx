import React from 'react'
import "../css/pacman.css"

export default function Pacman() {
    return (
        <>
            <div className='container-fluid'>
                <div style={{minHeight:"70vh"}} className='container'>
                    <h1>Pacman!</h1>
                        <div className='pacBtn'>
                            <div className="pacman-container">
                                <div className="pacman-mouth"></div>
                                <div className="pacman-eye"></div>
                            </div>
                            <div className='ready'>
                                <h2 className='btn-ready'>Ready!</h2>
                            </div>

                        </div>
                </div>
            </div>
        </>
    );
}
