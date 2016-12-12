import React from 'react';
import ContentBox from './contentBox/ContentBox.jsx';


export default class CVExprience extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contentBoxesHTML : [],
            contentBoxes : []
        }
    }

    componentWillReceiveProps(nextProps) {
        const contentBoxesHTMLValue = [];
        const contentBoxesValue = [];
        nextProps.content.forEach(c => {
            const contentBoxHTML = 
            <ContentBox key={c.years} ref={(c) => contentBoxesValue.push(c) }  onClick={this.handleClick.bind(this)} 
            content={c.content} imageName={c.imageName} years={c.years} title={c.title} ></ContentBox>
            contentBoxesHTMLValue.push(contentBoxHTML);
        });

        this.setState( {
            contentBoxesHTML : contentBoxesHTMLValue ,
            contentBoxes : contentBoxesValue
        });
    }

    componentDidUpdate(prevProps, prevState) {
         // Open the first exprience
        const firstContentBox = this.state.contentBoxes[0];
        if (firstContentBox) {
            firstContentBox.eventTriggered(firstContentBox);
        }
    }

    handleClick(selectedContentBox) {
        this.state.contentBoxes.forEach(contentBox => {
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