import React from 'react';
import ContentBox from './components/ContentBox.jsx'

        export default class App extends React.Component {
    render() {
        return (
                <div id="centerThem">
                    <ContentBox content={['uri','shmueli','yes']}></ContentBox>
                </div>
                );
    }
}
;