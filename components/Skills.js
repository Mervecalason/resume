import React from 'react'
import Title from './Title'
import Group from './SkillItemGroup'
import circle from './../static/css/circle.css'

export default class Skills extends React.Component {
    render() {
        const skillImgs = [
            {
                name: 'Front-ends',
                list: [
                    { name: 'html5', color: '#f16529', value: '75' },
                    { name: 'css3', color: '#29a9df', value: '70' },
                    { name: 'bootstrap', color: '#8b57d9', value: '80' },
                    { name: 'javascript', color: '#f7df1e', value: '70' },
                    { name: 'reactjs', color: '#61d9fa', value: '45' },
                    { name: 'nextjs', color: '#41b883', value: '25' },
                ]
            },
            {
                name: 'Back-ends',
                list: [
                    { name: 'python', color: '#8993be', value: '70' },
                    { name: 'nodejs', color: '#81ca2a', value: '70' },
                    { name: 'csharp', color: '#1e77b7', value: '70' },
                    { name: 'net', color: '#e74c3c', value: '60' }
                ]
            },
            {
                name: 'Databases',
                list: [
                    { name: 'mysql', color: '#0784af', value: '65' },
                ]
            },
            {
                name: 'Tools',
                list: [
                    { name: 'git', color: '#F05032', value: '60' },
                    { name: 'npm', color: '#cb3736', value: '55' },
                ]
            }
        ]

        return (
            <section className="hero wrapper has-text-centered">
                <style dangerouslySetInnerHTML={{ __html: circle }} />
                <Title title="Skills" color='#ffffff'/>
                <div className="container">
                    {
                        skillImgs.map((item, key) => (
                            <Group key={key} name={item.name} items={item.list} />
                        ))
                    }
                </div>

                <style jsx>{`
                    .wrapper {
                        padding-top: 50px;
                        padding-bottom: 50px;
                        background: #2f353f;
                        background-size: cover;
                        color: #333333;
                        font-size: 1.3em;
                    }
                `}</style>
            </section>
        )
    }
}