import React from 'react';
import ContentBox from './components/ContentBox.jsx'

        export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {contentBoxClicked: 'hello to me'};
        this.contentBoxesHTML = [];
        this.contentBoxes = [];
        this.contentBoxesInformation = [{
                title: '2016 - Present: Full Stack Developer',
                content: ['JAVA', 'Angular','Spring / Hibernate', 'C#']
            },
            {
                title: '2013 - 2016: Team Lead at IBM - XIV',
                content: ['Angular', 'JAVA']
            },
            {
                title: '2010 - 2013: Team Lead at IBM - Diligent',
                content: ['JAVA', 'SWING']
            },
            {
                title: '2008 - 2010: GUI Developer at IBM - Diligent',
                content: ['JAVA', 'SWING']
            }
        ];
        this.contentBoxesInformation.forEach(c => {
            const contentBoxHTML = <ContentBox ref={(c) => this.contentBoxes.push(c) }  onClick={this.handleClick.bind(this)} content={c.content} title={c.title} ></ContentBox>
            this.contentBoxesHTML.push(contentBoxHTML);
        });

        this.counter = 0;
    }

    handleClick(selectedContentBox) {
        this.contentBoxes.forEach(contentBox => {
            contentBox.eventTriggered(selectedContentBox);
        });
    }

    render() {

        return (
                <div>
                    <div style={{fontSize: '200%'}}>Uri Shmueli
                    </div>
                    <div style={{marginTop: '0.5em', marginBottom: '2em'}}>
                        Phone information<br></br>
                        Mail information                
                    </div>
                    <div>
                    <div style={{fontSize: '150%', borderStyle: 'none none solid none', marginBottom: '1em'}}>Exprience
                    </div>
                        <div>
                            {this.contentBoxesHTML}
                        </div>
                
                    </div>
                </div>
                                );
                    }
                }
