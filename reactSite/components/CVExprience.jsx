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
        // Creating dynamic contextBoxes, depends on the 'content' array given in props
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
         // Expand the first exprience, if exists
        const firstContentBox = this.state.contentBoxes[0];
        if (firstContentBox) {
            firstContentBox.doExpand();
        }
    }

    handleClick(selectedContentBox) {
        this.state.contentBoxes.forEach(contentBox => {
            contentBox.eventTriggered(selectedContentBox);
        });
    }

    render() {
        if (this.props.fetchingState) {
            // Showing loading icon
            return (
                <div>
                    <img src="./images/loading.gif" width="30em"/> 
                </div>
                )
        } else {
            // Showing content boxes
            return (
                    <div>   
                        {this.state.contentBoxesHTML}
                    </div>
                    )
        }
    }
    ;
}

CVExprience.propTypes  = {
    content: React.PropTypes.array.isRequired,
    fetchingState: React.PropTypes.bool.isRequired
}
