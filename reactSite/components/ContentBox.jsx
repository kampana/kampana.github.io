import React from 'react';
export default class ContentBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            titleClass: 'title',
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
            this.setState({isExpanded: true});
            this.setState({titleClass: 'title title-animation'});
            this.setState({contentClass: 'content content-animation'});
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
            this.setState({isExpanded: false});
            console.log("doCollapse on " + this.title);
            this.setState({titleClass: 'title title-backward-animation'});
            this.setState({contentClass: 'content content-backward-animation'});
        }
    }

    render() {

        return (
                <div onClick={this.handleClick.bind(this)} >
                    <div className={this.state.titleClass}>{this.title}</div>
                    <div className={this.state.contentClass}>
                        <div>
                            <ul>{this.listItems}</ul>
                        </div>
                    </div>
                
                </div>
                );
    }
};