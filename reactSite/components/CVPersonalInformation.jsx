import React from 'react';

export default class CVPeronsalInformation extends React.Component {
    constructor(props) {
        super(props);
        this.title = this.props.title;
    }

    render() {
        return (
                <div>
                    <div style={{fontSize: '250%', marginBottom:'0.5em'}}>URI SHMUELI
                    </div>
                    <div style={{marginTop: '0.5em', marginBottom: '2em'}}>
                        <div style={{marginBottom:'0.5em'}}>
                             <img src="../images/phone.png" style={{marginRight:'0.5em'}}/>972-50-9001466
                        </div>
                        <div style={{marginBottom:'0.5em'}}>
                             <img src="../images/mail.png" style={{marginRight:'0.5em'}}/>urishmueli@gmail.com
                        </div>
                        <div>
                             <img src="../images/download.png" style={{marginRight:'0.5em'}}/>
                             <a href="https://www.dropbox.com/s/orn6obmfj9hm12a/UriShmueliResume2018.pdf?dl=0">Download CV</a>
                        </div>

                    </div>
                </div>
                                )
                    }
                    ;
                }
