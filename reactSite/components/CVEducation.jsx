import React from 'react';
import ContentBox from './contentBox/ContentBox.jsx'

export default class CVEducation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content : [
                "B.Sc. in Software Engineering",
                "Final project of MSProject-like over Oracle DB"
            ]
        }
    }

    handleClick(selectedContentBox) {
        selectedContentBox.eventTriggered(selectedContentBox);
    }

    render() {
        return (
                <div>
                  <ContentBox imageName="afeka" years="2004-2008" title="Software Engineering" content={this.state.content} 
                      expandedByDefault={true} onClick={this.handleClick.bind(this)}></ContentBox>
                </div>
                                )
                    }
                    ;
                }