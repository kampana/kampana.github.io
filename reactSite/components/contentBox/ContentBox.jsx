import React from 'react';
import Title from './Title.jsx';
import Content from './Content.jsx';

export default class ContentBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpanded: false
        }

        this.title = this.props.title;
        this.years = this.props.years;
        this.imageName = this.props.imageName;
        this.titleClass = 'title';
        this.contentClass = 'content';
        this.content = this.props.content;

        if (this.props.expandedByDefault) {
            this.doExpand();
        }
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
            this.setState({isExpanded: true});
            this.contentClass = 'content content-animation';
            this.titleClass = 'title title-animation';
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
            this.contentClass = 'content content-backward-animation';
            this.titleClass = 'title title-backward-animation';
        }
    }

    render() {

        return (
                <div onClick={this.handleClick.bind(this)} >
                    <Title class={this.titleClass} imageName={this.imageName} years={this.years} title={this.title} />
                    <Content class={this.contentClass} content={this.content}/>
                </div>
                );
    }
};