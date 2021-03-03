import React from 'react'
import { Link } from 'react-router-dom'
import LandingPageAnimation from '../../components/LandingPageAnimation'

import './style.css'

export default function index() {
    return (
        <div className="LandingPage my-dflex my-justify-center my-align-center">
            <Link to="/home" className="my-no-aTag">
                <LandingPageAnimation />
            </Link>
        </div>
    )
}
