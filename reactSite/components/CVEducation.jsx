import React from 'react';
import ContentBox from './contentBox/ContentBox.jsx'

export default class CVEducation extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick(selectedContentBox) {
        selectedContentBox.eventTriggered(selectedContentBox);
    }

    render() {
        return (
                <div>
                  <ContentBox imageName="afeka" years="2004-2008" title="Software Engineering" content={["asdf"]} 
                      expandedByDefault={true} onClick={this.handleClick.bind(this)}></ContentBox>
                </div>
                                )
                    }
                    ;
                }