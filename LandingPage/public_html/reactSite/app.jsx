import React from 'react';
import ContentBox from './components/ContentBox.jsx'

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {contentBoxClicked: 'hello to me'};
        this.contentBoxesHTML = [];
        this.contentBoxes = [];
        this.contentBoxesInformation = [{
                title: 'abc',
                content: ['2016 - Present: Panaya', '2008-2016: IBM']
            }, {
                title: 'def',
                content: ['2016 - Present: Panaya', '2008-2016: IBM']                
            }
        ];
        this.contentBoxesInformation.forEach(c => {
            const contentBoxHTML = <ContentBox ref={(c) => this.contentBoxes.push(c) }  onClick={this.handleClick.bind(this)} content={c.content} title={c.title} ></ContentBox>
            this.contentBoxesHTML.push(contentBoxHTML);
        });
        
        this.counter = 0;
    }

    handleClick(selectedContentBox) {
        this.contentBoxes.forEach(contentBox => {
            contentBox.eventTriggered(selectedContentBox);
        });
    }

    render() {

        return (
                <div id="centerThem">
                    {this.contentBoxesHTML}
                </div>
                );
    }
}
