import React from 'react';
import ContentBox from './components/ContentBox.jsx'

 export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.contentBoxes = [];
    }
        
    handleClick(selectedContentBox) {
        this.contentBoxes.forEach(contentBox => {
            if (contentBox === selectedContentBox) {
                contentBox.doSwitchState(); // Collapse if not collapsed, Expand is not expanded
            } else {
                contentBox.doCollapse();            
            }
        });
    }
    
    render() {

        return (
                <div id="centerThem">
                    <ContentBox ref={(c) => this.contentBoxes.push(c) } onClick={this.handleClick.bind(this)} content={['2016 - Present: Panaya', '2008-2016: IBM']} title="abc" ></ContentBox>
                    <ContentBox ref={(c) => this.contentBoxes.push(c) } onClick={this.handleClick.bind(this)} content={['2016 - Present: Panaya', '2008-2016: IBM']} title="def" ></ContentBox>
                    <ContentBox ref={(c) => this.contentBoxes.push(c) } onClick={this.handleClick.bind(this)} content={['2016 - Present: Panaya', '2008-2016: IBM']} title="ggg" ></ContentBox>                            
                </div>
                );
    }
}
;