import React from 'react';
export default class ContentBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            titleClass: 'title',
            contentClass: 'content'
        }

        this.listItems = this.props.content.map((item) =>
            <li key={item.toString()}>{item}</li>
        )
    }

    handleClick() {
        this.setState({titleClass: 'title animation-title'});
        this.setState({contentClass: 'content animation-content'});
    }

    render() {

        return (
                <div onClick={this.handleClick.bind(this)} >
                    <div className={this.state.titleClass}></div>
                    <div className={this.state.contentClass}>
                        <ul>{this.listItems}</ul>
                    </div>
                </div>
                );
    }
};