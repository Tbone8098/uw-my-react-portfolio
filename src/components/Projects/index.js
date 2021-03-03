import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// Import Materialize
import M from "materialize-css";

export default function Index() {
    const [project, setProject] = useState()
    const [allProjects, setAllProjects] = useState({
        klaxonKitchen: {
            title: "Klaxon Kitchen",
            desc: "Klaxon Kitchen was developed for a client over in Indonesia who runs a food court. They needed a system to display orders and their status to the customers in the waiting area.",
            bullets: [
                "Developed to keep track of the orders that were being processed in a food court in Jakarta Indonesia.",
                "Used Skeleton css framework CDN to organize the information on the HTML page.",
                "Used the Python language with Django as a framework. Keeping things orderly and modular for future implementation.",
                "Utilized bcrypt when comparing and storing user passwords in a hash form.",
                "Implemented a login and registration page.",
                "Technologies used: JavaScript, HTML, CSS, Skeleton CSS Framework, Django, Bcrypt, Python"
            ],
            imgs: [
                "/img/projects/klaxonKitchen/klaxonKitchen1.png",
                "/img/projects/klaxonKitchen/klaxonKitchen2.png",
                "/img/projects/klaxonKitchen/klaxonKitchen3.png",
                "/img/projects/klaxonKitchen/klaxonKitchen4.png",
                "/img/projects/klaxonKitchen/klaxonKitchen5.png",
                "/img/projects/klaxonKitchen/klaxonKitchen6.png",
                "/img/projects/klaxonKitchen/klaxonKitchen7.png",
                "/img/projects/klaxonKitchen/klaxonKitchen8.png",
                "/img/projects/klaxonKitchen/klaxonKitchen9.png",
                "/img/projects/klaxonKitchen/klaxonKitchen10.png",
            ],
            type: "free-lancing",
            disabled: false,
            links: {
                gitHub: 'https://github.com/Tbone8098/klaxon-kitchen-django',
                deployed: {
                    status: false,
                    msg: "currently under development",
                    link: ''
                },
            }
        },
        Meets: {
            title: "Mee+s",
            desc: "It is hard to keep track of what everyone is doing and sometimes you would like to know with out having to be a burden to them. That is where 'meets' comes into play. Meets is an application that allows you connect with the people you know while at the same time giving you your very own personal assistant (an AI we developed) that let you know the status of your connections (how they are doing, what was the last thing they did, etc). Your AI will pull the data from your connections to help you get the information you need to know, when you need to know it. ",
            type: "School Project",
            bullets: [
                "Developed to help people keep in touch while also allowing them to plan their own life.",
                "Used Materialize as a css framework to organize the frontend as well as a custom framework that we built.",
                "Utilized bcrypt to create secure encrypted hashes for passwords.",
                "Utilized bcrypt when comparing and storing user passwords in a hash form.",
                "Implemented a login and registration page.",
                "Technologies Used: MySQL, express, express-Handlebars, Nodejs, JavaScript, HTML, CSS, Materialize, Dialog flow, bcrypt"
            ],
            imgs: [
                "/img/projects/Meets/Meets1.png",
                "/img/projects/Meets/Meets2.png",
                "/img/projects/Meets/Meets3.png",
                "/img/projects/Meets/Meets4.png",
                "/img/projects/Meets/Meets5.png",
                "/img/projects/Meets/Meets6.png",
            ],
            disabled: false,
            links: {
                gitHub: 'https://github.com/chomieu/Meets',
                deployed: {
                    status: true,
                    msg: "",
                    link: 'https://uw-meets.herokuapp.com/'
                },
            }
        },
        JourneyJounal: {
            title: "Journey Journal",
            desc: "Sometimes it is so hard to keep track of where you have come from while you are in the middle of it. Journey Journal will keep track of where you have been so that you can see where you are going. Helping you keep the big picture in mind.",
            type: "School Project",
            bullets: [
                "Trello style project manager that is designed to help keep track of what tasks in a project are active and what tasks are completed, as well as where the tasks are in the process.",
                "Utilized Jquery UI in order to add visual effects when clicking, dragging and dropping an item into different columns.",
                "Developed on the Django framework in order to keep tasks modular and easy to manage.",
                "Designed with AJAX and JavaScript to perform quick and easy communications between the front-end and back-end.",
                "Implements a login and registration system that utilizes Bcrypt and displays client-side validations.",
                "Deployed on an AWS server.",
                "Technologies used: Python, Django, Jquery UI, AJAX, Bcrypt,  JavaScript"
            ],
            disabled: false,
            links: {
                gitHub: 'https://github.com/Tbone8098/Journey-Journal',
                deployed: {
                    status: false,
                    msg: "Sorry this app is no longer being deployed",
                    link: ''
                },
            }
        },
        COACH: {
            title: "COACH",
            desc: "Need support to keep motivated to stay healthy? With COACH you can use your friends and family to meet this need. With the idea of a race in mind, you can compete with those around you in order to keep track of your eating, sleeping, exercise, and water intake.",
            type: "School Project",
            bullets: [
                "Trello style project manager that is designed to help keep track of what tasks in a project are active and what tasks are completed, as well as where the tasks are in the process.",
                "Utilized Jquery UI in order to add visual effects when clicking, dragging and dropping an item into different columns.",
                "Developed on the Django framework in order to keep tasks modular and easy to manage.",
                "Designed with AJAX and JavaScript to perform quick and easy communications between the front-end and back-end.",
                "Implements a login and registration system that utilizes Bcrypt and displays client-side validations.",
                "Deployed on an AWS server.",
                "Technologies used: Python, Django, Jquery UI, AJAX, Bcrypt,  JavaScript"
            ],
            disabled: true,
            links: {
                gitHub: 'https://github.com/Tbone8098/MERN-Project-COACH',
                deployed: {
                    status: false,
                    msg: "Sorry this app is no longer being deployed",
                    link: ''
                },
            }
        },
        TAZKR: {
            title: "TAZKR",
            desc: " A Trello style project manager that is designed to help keep track of what tasks in a project are active and what tasks are completed. As well as where the tasks are along the way.",
            type: "School Project",
            imgs: [
                "/img/projects/Tazkr/Tazkr1.png",
                "/img/projects/Tazkr/Tazkr2.png",
                "/img/projects/Tazkr/Tazkr3.png",
                "/img/projects/Tazkr/Tazkr4.png",
                "/img/projects/Tazkr/Tazkr5.png",
                "/img/projects/Tazkr/Tazkr6.png",
            ],
            bullets: [
                "Trello style project manager that is designed to help keep track of what tasks in a project are active and what tasks are completed, as well as where the tasks are in the process.",
                "Utilized Jquery UI in order to add visual effects when clicking, dragging and dropping an item into different columns.",
                "Developed on the Django framework in order to keep tasks modular and easy to manage.",
                "Designed with AJAX and JavaScript to perform quick and easy communications between the front-end and back-end.",
                "Implements a login and registration system that utilizes Bcrypt and displays client-side validations.",
                "Deployed on an AWS server.",
                "Technologies used: Python, Django, Jquery UI, AJAX, Bcrypt,  JavaScript"
            ],
            disabled: false,
            links: {
                gitHub: 'https://github.com/Tbone8098/CodingDojo-Tazkr',
                deployed: {
                    status: false,
                    msg: "Sorry this app is no longer being deployed",
                    link: ''
                },
            }
        },
        MoodTunes: {
            title: "Mood Tunes",
            desc: "Mood Tunes was designed to be a fully front-end application. The Idea is the user would put in their mood and how much time they had to listen to a playlist and Mood Tunes would generate a playlist to fit their needs.",
            type: "School Project",
            imgs: [
                "/img/projects/MoodTunes/MoodTunes1.png",
                "/img/projects/MoodTunes/MoodTunes2.png",
                "/img/projects/MoodTunes/MoodTunes3.png",
                "/img/projects/MoodTunes/MoodTunes4.png",
                "/img/projects/MoodTunes/MoodTunes5.png",
            ],
            bullets: [
                "Purely a front-end application that will take a user’s mood as well as the length of time the user has available and create a youtube based playlist of songs.",
                "Used Skeleton css framework CDN to organize the information on the HTML page.",
                "Utilized google sheets API, YouTube API, and unsplash API.",
                "Implemented localStorage to store and retrieve data pertinent for the application.",
                "Implements a login and registration system that utilizes Bcrypt and displays client-side validations.",
                "Deployed using github pages.",
                "Technologies used: HTML, JavaScript, CSS, Skeleton CSS Framework, Jquery"
            ],
            disabled: false,
            links: {
                gitHub: 'https://github.com/Tbone8098/uw-jagged-little-pill',
                deployed: {
                    status: false,
                    msg: "",
                    link: 'https://tbone8098.github.io/uw-jagged-little-pill/'
                },
            }
        }
    })

    const allProjectsKeys = Object.keys(allProjects)

    useEffect(() => {
        M.AutoInit();
    }, [])

    const loadProjects = (e) => {
        e.preventDefault()
        setProject(e.target.projectTitle.value)
    }

    useEffect(() => {
        let project = `test`
    }, [project])

    return (
        <div>
            <form className="my-color-2 my-dflex my-justify-between my-align-center" onSubmit={(e) => loadProjects(e)}>
                <select name="projectTitle" className="my-ml-4">
                    {allProjectsKeys.map(projectKey => {
                        return <option value={projectKey}>{allProjects[projectKey]["title"]}</option>
                    })}
                </select>
                <button className="btn my-mr-4">Submit</button>
            </form>
            <div className="projectBox my-color-white my-p-4 my-dflex my-justify-center">
                {project === undefined ?
                    <div>
                        Please Select a Project.
                    </div>
                    :
                    <div>
                        <div className="title my-dflex my-align-center my-justify-between">
                            <h4>{allProjects[project]["title"]}</h4>
                            <h5 className="my-txt-right">{allProjects[project]["type"]}</h5>
                        </div>
                        <h5>Description: </h5> {allProjects[project]["desc"]}
                        <div className="my-mt-4 my-width-100 my-dflex my-justify-end">
                            {allProjects[project].disabled === false ?
                                <Link to={{
                                    pathname: '/projectPage',
                                    aboutProps: { project: allProjects[project] }
                                }} className="my-btn">See More</Link>
                                :
                                <Link to={{
                                    pathname: '/projectPage',
                                    aboutProps: { project: allProjects[project] }
                                }} className="my-btn" disabled>See More</Link>
                            }
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}
