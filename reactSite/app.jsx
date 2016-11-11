import React from 'react';
import ContentBox from './components/ContentBox.jsx'

        export default class App extends React.Component {
    render() {
        return (
                <div id="centerThem">
                    <ContentBox content={['2016 - Present: Panaya','2008-2016: IBM']}></ContentBox>
                </div>
                );
    }
}
;