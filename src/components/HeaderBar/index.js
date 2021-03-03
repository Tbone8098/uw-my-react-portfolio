import React from 'react'
import './style.css'

import meandkendal from './img/meandkendal.png'
import { Link } from 'react-router-dom'

export default function index(props) {

    const content = () => {
        // let page = localStorage.getItem("page")
        // if (page === "home") {
            return <div className="HeaderBar">
                <div className="row">
                    <div className="my-dflex my-justify-center">
                        <img src={meandkendal} alt="me and kendal" className="meandkendal" />
                    </div>
                </div>
                <div className="row">
                    <div className="my-btns my-dflex my-justify-between my-prl-4">
                        <button className="my-btn" onClick={colorMode}>Light Mode</button>
                        <Link to="/home" className="my-btn">Home</Link>
                        <Link to="contact_me" className="my-btn">Contact Me</Link>
                    </div>
                </div>
            </div>
        // }else {
        //     return <div className="HeaderBar">
        //         <div className="row">
        //             <div className="my-dflex my-justify-center">
        //                 <img src={meandkendal} alt="me and kendal" className="meandkendal" />
        //             </div>
        //         </div>
        //         <div className="row">
        //             <div className="my-btns my-dflex my-justify-between my-prl-4">
        //                 <Link to="/home" className="my-btn">Home</Link>
        //                 <Link to="/contact_me" className="my-btn">Contact Me</Link>
        //             </div>
        //         </div>
        //     </div>
        // }
    }

    const colorMode = () => {
        return props.onReturn()
    }

    return (
        <div>
            {content()}
        </div>
    )
}
