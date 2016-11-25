import React from 'react';
import ContentBox from './contentBox/ContentBox.jsx'

export default class CVArmyService extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick(selectedContentBox) {
        selectedContentBox.eventTriggered(selectedContentBox);
    }

    render() {
        return (
                <div>
                  <ContentBox imageName="iaf" years="2000-2003" title="Israeli Air Force" content={["asdf"]} 
                      expandedByDefault={true} onClick={this.handleClick.bind(this)}></ContentBox>
                </div>
                                )
                    }
                    ;
                }