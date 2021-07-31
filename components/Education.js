import React from 'react'
import Title from './Title'
import Item from './EducationItem'

export default class Education extends React.Component {
    render() {
        return (
            <section className="hero wrapper has-text-centered">
                <Title title="Education" color='#ffffff'/>
                <div className="container">
                    <Item
                        time="2021 - 2023 (MBA)"
                        name="ILAC International College"
                        gpa="N/A"
                        color="#3498db"
                    />
                    <Item
                        time="2013 - 2018 (B.Sc.)"
                        name="Yaşar University"
                        major="International Trade and Finance"
                        gpa="3.82"
                        color="#2ecc71"
                    />
                </div>

                <style jsx>{`
                    .wrapper {
                        padding-top: 50px;
                        padding-bottom: 50px;
                        background: #c0392b url('/static/images/bg-edu.jpg');
                        background-size: cover;
                        color: #333333;
                        font-size: 1.3em;
                    }
                `}</style>
            </section>
        )
    }
}