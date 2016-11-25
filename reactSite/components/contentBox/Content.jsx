import React from 'react';

export default class Content extends React.Component {
    constructor(props) {
        super(props);
        this.listItems = this.props.content.map((item) =>
            <li key={item.toString()}>{item}</li>
        );


    }

    render() {
        return (
                <div className={this.props.class}>
                    <div>
                        <ul>{this.listItems}</ul>
                    </div>
                </div>
                );
    }
}