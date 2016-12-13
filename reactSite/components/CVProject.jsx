import React from 'react';
import ContentBox from './contentBox/ContentBox.jsx';

export default class CVProject extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            content : [
            	"React v15",
            	"ES6 via Babel Transpiler",
            	"JSX",
            	"Redux",
            	"Webpack",
            	"NodeJS over Heroku PaaS",
            	"PostgreSQL over Heroku PaaS"
            ]
        }
	}

    handleClick(selectedContentBox) {
        selectedContentBox.eventTriggered(selectedContentBox);
    }

    render() {
        return (
                <div>
                  <ContentBox imageName="react" years="2016" title="ReactJS" content={this.state.content} 
                      expandedByDefault={true} onClick={this.handleClick.bind(this)}></ContentBox>
                </div>
                                )
                    }
                    ;
	
}