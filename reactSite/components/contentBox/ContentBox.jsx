import React from 'react';
import Title from './Title.jsx';
import Content from './Content.jsx';

const defaultState = {
            isExpanded: false,
            titleClass: 'title',
            contentClass: 'content'
        }

export default class ContentBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = defaultState;

        this.title = this.props.title;
        this.years = this.props.years;
        this.imageName = this.props.imageName;
        this.content = this.props.content;
    }

    componentWillReceiveProps(nextProps) {
        this.setState(defaultState);
    }

    componentDidMount() {
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
            this.setState({
                isExpanded: true,
                contentClass: 'content content-animation',
                titleClass: 'title title-animation'
            });
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
            this.setState({
                isExpanded: false,
                contentClass: 'content content-backward-animation',
                titleClass: 'title title-backward-animation'
            });
        }
    }

    render() {
        return (
                <div onClick={this.handleClick.bind(this)} >
                    <Title class={this.state.titleClass} imageName={this.imageName} years={this.years} title={this.title} />
                    <Content class={this.state.contentClass} content={this.content}/>
                </div>
                );
    }
};

ContentBox.propTypes  = {
    title: React.PropTypes.string.isRequired,
    content: React.PropTypes.array.isRequired,
    years: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func.isRequired,
    imageName: React.PropTypes.string
}
