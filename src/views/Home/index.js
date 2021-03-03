import React, { useEffect } from 'react'
import Tech from '../../components/Tech'
import AboutMe from '../../components/AboutMe'
import Education from '../../components/Education'
import Projects from '../../components/Projects'

import './style.css'

export default function Index(props) {
    useEffect(()=>{
        localStorage.setItem("page", "home")
    },[])
    return (
        <div className="Home container">
                <div className="row my-mt-4 row1">
                    <div className="col s12 m6">
                        <Tech />
                    </div>
                    <div className="col s12 m6">
                        <AboutMe />
                    </div>
                </div>
                <div className="row row2">
                    <div className="col s12 m6">
                        <h4 className="label" id="education">Education</h4>
                        <Education />
                    </div>
                    <div className="col s12 m6">
                        <h4 className="label" id="projects">Projects</h4>
                        <Projects />
                    </div>
                </div>
            
            {/* <div className="row my-mt-4">
                <Tech />
            </div>
            <div className="row">
                <AboutMe />
            </div>
            <div className="row label">
                <h4 id="education">Education</h4>
            </div>
            <div className="row">
                <Education />
            </div>
            <div className="row label">
                <h4 id="projects">Projects</h4>
            </div>
            <div className="row">
                <Projects />
            </div> */}
        </div>
    )
}
