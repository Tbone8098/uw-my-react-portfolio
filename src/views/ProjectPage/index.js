import React, { useEffect, useState } from 'react'
import SlideShow from '../../components/SlideShow'
import HeaderBar from '../../components/HeaderBar'

export default function Index(props) {
    const { project } = props.location.aboutProps
    const [contentType, setContentType] = useState('bullets')

    useEffect(() => {
        localStorage.setItem("page", "projectPage")
    },[])

    const content = () => {
        if (contentType === "bullets") {

            return <div className="my-color-white my-p-4 my-m-4">
                <ul>
                    {project.bullets.map(bullet => {
                        return <li>{'>'}- {bullet}</li>
                    })}
                </ul>
            </div>
        } else {
            return <div>
                <SlideShow album={project.imgs}/>
            </div>
        }
    }

    return (
        <div className="ProjectPage container">
            <h1 className="my-color-3 my-ptb-2 my-dflex my-justify-center">{project.title}</h1>
            <div className="menu my-width-100 my-dflex my-justify-evenly my-mtb-4 my-color-5 my-ptb-4">
                <button className="my-btn" onClick={() => setContentType("bullets")}>What,How,Why</button>
                <button className="my-btn" onClick={() => setContentType("slideshow")}>SlideShow</button>
            </div>
            {content()}
            <div className="projectMenu my-width-100 my-dflex my-justify-evenly my-mtb-4 my-color-5 my-ptb-4">
                <a href={project.links.gitHub} className="my-btn" rel="noreferrer" target="_blank">GitHub</a>
                {project.links.deployed.status === false?
                 <button className="my-btn disabled" disabled >Deployed Site</button>
                 : 
                 <a href={project.links.deployed.link} className="my-btn" rel="noreferrer" target="_blank">Deployed Site</a>
                 }
            </div>
        </div>
    )
}
