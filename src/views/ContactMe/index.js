import React, { useEffect } from 'react'
import HeaderBar from '../../components/HeaderBar'
import { Link } from 'react-router-dom'

import './style.css'

export default function Index() {
    useEffect(() => {
        localStorage.setItem("page", "ContactMe")
    },[])
    return (
        <div className="ContactMe container">
            <h1 className="my-color-2 my-p-1 my-dflex my-justify-center my-border-2">Contact Me</h1>
            <div className="box my-dflex my-justify-center my-ptb-4">
                Email Address: tyler.thibault@protonmail.com
            </div>
            <div className="box my-mt-4 my-p-3 my-dflex my-justify-evenly">
                <a href="https://github.com/Tbone8098" className="my-btn">GitHub</a>
                <a href="https://www.linkedin.com/in/tyler-thibault-a4404178/" className="my-btn">LinkedIn</a>
                <a href="https://docs.google.com/document/d/1ZRIBsqjAE5r1NFZkgL2sc_7lBOcqxr7mUmlHU4M3H3Y/edit?usp=sharing" className="my-btn">My Resume</a>
            </div>
        </div>
    )
}
