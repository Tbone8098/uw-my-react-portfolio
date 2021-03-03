import React from 'react'
import SlideShow from '../../components/SlideShow'

export default function Index() {

    const album = [
        "/img/Misc/thefam.png",
        "/img/Misc/hiking.png",
    ]

    return (
        <div className="AboutMe container">
            <div className="my-color-3 my-dflex my-justify-center my-mt-4 my-border-2">
                <h1>About Me</h1>
            </div>
            <div className="content">
                <div className="slideshow my-mtb-3 my-p-4 my-border-2 my-color-5">
                    <SlideShow album={album} />
                </div>
                <div className="box my-p-3">
                    <p>
                        A bit about me, I grew up in Cashmere WA, the youngest of 3 children. When I was a child my family moved over to Indonesia to work as teachers at an international school there. Living there for 3 years layed some fundamentals of who I am today. For instance, my willingness to travel and explore the world as well as my intercultural understanding. After the 3 years in Indonesia my family moved back to the US.
                    </p> <br/>
                    <p>
                        Following High School I joined the US Navy and served my country for 5 years as a Logistic specialist. Doing 3 deployments in the persian gulf from 2008 to 2013. During my time in the Navy I reconnected with a friend from my childhood in Indonesia and after my time in the service I persued her and moved over to Indonesia for a second time. We got married shortly after and now have two amazing boys.
                    </p> <br/>
                    <p>
                        While in Indonesia for the second time I went to UPH (Universitas Pelita Harapan) and earned my teaching degree. After my schooling was over I taught 4th grade at SPH (Sekolah Pelita Harapan) for 3 years. Interesting fact: this was the same internation school my parents taught at 17 years earlier. While teaching has its own benefits I found that I was always learning new code to try and create different applications to assist me in whatever I was doing, whether that be for my job or for recreational purposes.
                    </p> <br/>
                    <p>
                        I eventually came to the conclusion that I wanted to have a career change and pursue software development as a full time job. This lead me to the Coding Dojo bootcamp and then to another bootcamp at University of Washington.
                    </p>
                </div>
            </div>
        </div>
    )
}
