import React from 'react';
import CVTitle from './components/CVTitle.jsx';
import CVPersonalInformation from './components/CVPersonalInformation.jsx';
import CVExprience from './components/CVExprience.jsx';
import CVEducation from './components/CVEducation.jsx';
import CVArmyService from './components/CVArmyService.jsx';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.contentBoxesInformation = [{
                years: '2016 - Present',
                title: 'Full Stack Developer',
                content: ['Hands on development in Java', 'AngularJS', 'Spring', 'Hibernate over MySQL', 'C#'],
                imageName: 'panaya'
            },
            {
                years: '2013-2016',
                title: 'Team Leader',
                content: ['Leading 6-12 team members', 'Hands on development in Java', 'AngularJS'],
                imageName: 'ibm'
            },
            {
                years: '2010-2013',
                title: 'Team Leader',
                content: ['Leading 4 team members worldwide', 'Hands on development in Java','GUI development in SWING'],
                imageName: 'ibm'
            },
            {
                years: '2008-2010',
                title: 'GUI Developer',
                content: ['Hands on development in Java', 'GUI development in SWING'],
                imageName: 'ibm'
            }
        ];

    }

    render() {

        return (
                <div>
                    <CVPersonalInformation></CVPersonalInformation>
                    <div style={{display:'flex'}}>
                        <span>
                            {/*Left column*/}
                            <div>
                                <CVTitle title="Exprience"/>
                                <CVExprience content={this.contentBoxesInformation}/>
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
