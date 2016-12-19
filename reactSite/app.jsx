import React from 'react';
import { connect } from 'react-redux';
import CVTitle from './components/CVTitle.jsx';
import CVPersonalInformation from './components/CVPersonalInformation.jsx';
import CVExprience from './components/CVExprience.jsx';
import CVEducation from './components/CVEducation.jsx';
import CVArmyService from './components/CVArmyService.jsx';
import CVProject from './components/CVProject.jsx'
import './redux/store.js'
import * as exprienceActions from "./redux/actions/cvExperienceActions.js"

@connect((store) => {
    return {
        contentBoxesInformation: store.cvexpriences.expriences,
        fetching: store.cvexpriences.fetching
    }
})
export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.dispatch(exprienceActions.fetchExprience())
    }

    render() {
        return (
                <div>
                    <CVPersonalInformation></CVPersonalInformation>
                    <loadingDiv></loadingDiv>
                    <div style={{display:'flex'}}>
                        <span>
                            {/*Left column*/}
                            <div>
                                <CVTitle title="Exprience"/>
                                <CVExprience fetchingState={this.props.fetching} content={this.props.contentBoxesInformation}/>
                                <div style={{marginTop: '1em'}} >
                                    <CVTitle title="This Project"/>
                                    <CVProject></CVProject>
                                </div>
                            </div>
                        </span>
                        <span style={{marginLeft:'5em'}}>
                            {/*Right column*/}
                            <div>
                                <CVTitle title="Education"/>
                                <CVEducation></CVEducation>

                                <CVTitle title="Army Service"/>
                                <CVArmyService></CVArmyService>
                            </div>
                        </span>
                    </div>
                </div>
                );
    }
}
