import React from 'react';
import ContentBox from './contentBox/ContentBox.jsx';


export default class CVExprience extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contentBoxesHTML : []
        }
    }

    componentWillReceiveProps(nextProps) {
        this.contentBoxesHTML = [];
        this.contentBoxes = [];
        nextProps.content.forEach(c => {
            const contentBoxHTML = 
            <ContentBox key={c.years} ref={(c) => this.contentBoxes.push(c) }  onClick={this.handleClick.bind(this)} 
            content={c.content} imageName={c.imageName} years={c.years} title={c.title} ></ContentBox>
            this.contentBoxesHTML.push(contentBoxHTML);
        });


        this.setState( {contentBoxesHTML : this.contentBoxesHTML });
    }

    componentDidUpdate(prevProps, prevState) {
         // Open the first exprience
        if (this.contentBoxes[0]) {
            this.contentBoxes[0].eventTriggered(this.contentBoxes[0]);
        }
    }

    handleClick(selectedContentBox) {
        this.contentBoxes.forEach(contentBox => {
            contentBox.eventTriggered(selectedContentBox);
        });
    }

    render() {
        return (
                <div>
                    {this.state.contentBoxesHTML}
                </div>
                )
    }
    ;
}