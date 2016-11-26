import React from 'react';

export default class Title extends React.Component {
    constructor(props) {
        super(props);

        this.title = this.props.title;
        this.years = this.props.years;
        this.imageName = "../images/" + this.props.imageName + ".png";
    }

    render() {
        return (
                <div className={this.props.class}>
                    <span style={{width: '8em'}}>{this.years}</span>
                    <span style={{fontWeight: 'bold'}}>{this.title}</span>
                    <span style={{float: 'right'}}>
                        <img src={this.imageName} width="90em"/>            
                    </span>
                </div>);
                        }
                    };
