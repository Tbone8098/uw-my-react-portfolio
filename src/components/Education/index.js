import React, { useState } from 'react'
import "./style.css"

import CodingDojo from './img/CodingDojo.png'
import Corban from './img/Corban.png'
import UPH from './img/Logo_UPH.png'
import UW from './img/UW.png'

export default function Index() {
    const [currentEducation, setCurrentEducation] = useState('uw')

    const changeEducation = e => {
        console.log(e.target.value);
        setCurrentEducation(e.target.value)
    }

    const educationInfo = e => {

        if(currentEducation === 'uw'){
            return <div className="eduInfoContainer">
                <img src={UW} alt="University of Washington" className="educationImg" />
                <p>I will start going to University of Washington Bootcamp at the end of November this year (2020). It is a three month program and will focus on MERN.</p>
            </div>
        } else if(currentEducation === 'cd') {
            return <div className="eduInfoContainer">
                <img src={CodingDojo} alt="Coding Dojo" className="educationImg" />
                <p>My Experience at the Coding Dojo was excelent. It was an intence 14 week program which covered three different full stacks plus a basic Web fundamentals two week course. Each full stack was three weeks of learning and one week for project week. The first stack we covered was python using Django as a framework and the SQLight database. The second stack was MERN and the third stack was C# using ASP.NET and a SQL database. Even though I was self taught before this program I felt like this program filled in a lot of knowledge I missed when teaching myself.</p>
            </div>
        }else if(currentEducation === 'cu') {
            return <div className="eduInfoContainer">
                <img src={Corban} alt="Corban University" className="educationImg" />
                <p>My Corban and UPH experiences are linked together. While I was living in Indonesia a school became available at the local university there. They offered a teaching degree that was backed up by Corban University. This meant that by graduating from UPH I also graduated from Corban with a bachelors in primary (elementary) education.</p>
            </div>
        }else if(currentEducation === 'uph') {
            return <div className="eduInfoContainer">
                <img src={UPH} alt="Universitas Pelita Harapan" className="educationImg" />
                <p>My Corban and UPH experiences are linked together. While I was living in Indonesia a school became available at the local university there. They offered a teaching degree that was backed up by Corban University. This meant that by graduating from UPH I also graduated from Corban with a bachelors in primary (elementary) education.</p>
            </div>
        }
    }

    return (
        <div className="Education">
            <div className="menu my-dflex my-justify-evenly">
                <button onClick={(e) => changeEducation(e)} className="my-btn" value="uw">UW</button>
                <button onClick={(e) => changeEducation(e)} className="my-btn" value="cd">Coding Dojo</button>
                <button onClick={(e) => changeEducation(e)} className="my-btn" value="cu">Corban University</button>
                <button onClick={(e) => changeEducation(e)} className="my-btn" value="uph">UPH</button>
            </div>
            {educationInfo()}
        </div>
    )
}
