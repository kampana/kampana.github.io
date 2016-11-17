import React from 'react';
export default class ContentBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            titleClass: 'title',
            contentWrapperClass: 'content-wrapper',
            contentClass: 'content',
            isExpanded: false,
        }

        this.listItems = this.props.content.map((item) =>
            <li key={item.toString()}>{item}</li>
        )

        this.title = this.props.title;
    }
    
    eventTriggered(selectedContentBox) {
        if (selectedContentBox == this) {
            this.doSwitchState();
        } else {
            this.doCollapse();
        }
    }

    handleClick() {
        this.props.onClick(this);
    }
    
    doExpand() {
        if (!this.state.isExpanded) {
            console.log("doExpand on " + this.title);
            this.setState({isExpanded : true});
            this.setState({titleClass: 'title animation-title'});
            this.setState({contentWrapperClass: 'content-wrapper animation-content-wrapper'});
        }
    }
    
    doSwitchState() {
        if (this.state.isExpanded) {
            this.doCollapse();
        } else {
            this.doExpand();
        }
    }
    
    doCollapse() {
        if (this.state.isExpanded) {
            this.setState({isExpanded : false});
            console.log("doCollapse on " + this.title);
            this.setState({titleClass: 'title backward-title'});
            this.setState({contentWrapperClass: 'content-wrapper backward-content'});
        }
    }


    render() {

        return (
                <div onClick={this.handleClick.bind(this)} >
                    <div className={this.state.titleClass}>{this.title}</div>
                    <div className={this.state.contentWrapperClass}>
                        <div>
                                <ul>{this.listItems}</ul>
                        </div>
                    </div>
                </div>
                );
    }
};