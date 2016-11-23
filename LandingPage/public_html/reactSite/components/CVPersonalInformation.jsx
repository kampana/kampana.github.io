import React from 'react';

export default class CVPeronsalInformation extends React.Component {
    constructor(props) {
        super(props);
        this.title = this.props.title;
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
                </div>
                                )
                    }
                    ;
                }