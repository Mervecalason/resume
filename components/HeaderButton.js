import React from 'react'

export default class HeaderButton extends React.Component {
    render() {
        let {title, icon, url, target} = this.props
        return (
            <a className="button is-primary is-medium" href={url} target={target}>
                {title}
                <style jsx>{`
                    a {
                        margin: 0 5px;
                        padding: 0 20px;
                        border-radius: 360px;
                    }
                `}</style>
            </a>
        )
    }
}