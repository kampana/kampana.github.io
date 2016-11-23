import React from 'react';
import ContentBox from './contentBox/ContentBox.jsx';


export default class CVExprience extends React.Component {
    constructor(props) {
        super(props);

        this.contentBoxesHTML = [];
        this.contentBoxes = [];
        this.props.content.forEach(c => {
            const contentBoxHTML = <ContentBox ref={(c) => this.contentBoxes.push(c) }  onClick={this.handleClick.bind(this)} content={c.content} imageName={c.imageName} years={c.years} title={c.title} ></ContentBox>
            this.contentBoxesHTML.push(contentBoxHTML);
        });

    }

    handleClick(selectedContentBox) {
        this.contentBoxes.forEach(contentBox => {
            contentBox.eventTriggered(selectedContentBox);
        });
    }

    render() {
        return (
                <div>
                    {this.contentBoxesHTML}
                </div>
                )
    }
    ;
}