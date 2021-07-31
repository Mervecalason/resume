import React from 'react'

export default class HeaderBrace extends React.Component {
    render() {
        return (
            <div className="column profile">
                <figure className="image" onClick={()=>this.props.toggle()}>
                    <img src="https://media-exp1.licdn.com/dms/image/C4D03AQEB9_j3Wj82aA/profile-displayphoto-shrink_800_800/0/1622013854015?e=1632960000&v=beta&t=Ph-haeC-l6J4gX2vt-JBFZoEAw6N6ONW4mpku-sJ0F0" />
                </figure>
                <style jsx>{`
                    .profile {
                        display: flex;
                        justify-content: center;
                        flex-direction: column;
                    }
                    figure {
                        cursor: pointer;
                        margin: 0 auto;
                        width: 300px;
                        height: 300px;
                    }
                    @media screen and (max-width: 769px) {
                        figure {
                            width: 250px;
                            height: 250px;
                        }
                    }
                    img {
                        -webkit-transition: -webkit-transform 1s ease-in-out;
                        transition: transform 1s ease-in-out;
                        -webkit-animation: flip 1s;
                        animation: flip 1s;
                    }
                    img:hover {
                        -webkit-transform: rotateY(360deg);
                        transform: rotateY(360deg);
                    }
                    @-webkit-keyframes flip {
                        from {
                            transform: rotateY(360deg) scale(0);
                        }
                        to {
                            transform: rotateY(0deg) scale(1);
                        }
                    }
                    @keyframes flip {
                        from {
                            transform: rotateY(360deg) scale(0);
                        }
                        to {
                            transform: rotateY(0deg) scale(1);
                        }
                    }
                `}</style>
            </div>
        )
    }
}