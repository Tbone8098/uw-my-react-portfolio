import React from 'react'
import { Link } from 'react-router-dom'

export default function index() {
    return (
        <div className="AboutMe my-color-2 my-border-2 my-p-2 my-pb-4">
            <h3 className="my-dflex my-justify-center">About Me</h3>
            <p className="my-m-3">A bit about me, I grew up in Cashmere WA, the youngest of 3 children. When I was a child my family moved over to Indonesia to work as teachers at an international school there. Living there for 3 years layed some fundamentals of who I am today. For instance, my willingness to travel and explore the world as well as my intercultural understanding.
            </p>
            <div className="btns my-dflex my-justify-end">  
                <Link to="/about_me" className="my-btn">Read More</Link>
            </div>
        </div>
    )
}
