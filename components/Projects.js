import React from 'react'
import Title from './Title'
import Timeline from './ProjectsTimelineItem'

export default class Projects extends React.Component {
    render() {
        return (
            <section className="hero wrapper has-text-centered" id="projects">
                <Title title="Projects" color='#2c3e50'/>
                <div className="container">
                    <Timeline side="left" time="July 2021" color="#e67e22">
                        <h4 style={{'color': '#e67e22'}}>Resume</h4>
                        <p>
                            <i className="position">Next.JS, HTML, CSS</i><br/>
                            <a>Link to the website</a>
                        </p>
                    </Timeline>
                </div>

                <style jsx>{`
                    .wrapper {
                        padding-top: 50px;
                        padding-bottom: 50px;
                        background: #bdc3c7;
                        color: #333333;
                        font-size: 1.3em;
                    }
                    h4 {
                        font-size: 1.2em;
                        font-weight: bold;
                    }
                    p {
                        font-size: 0.8em;
                    }
                    i.position {
                        color: #c0392b;
                    }
                `}</style>
            </section>
        )
    }
}