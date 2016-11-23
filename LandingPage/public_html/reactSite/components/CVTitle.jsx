import React from 'react';

export default class CVTitle extends React.Component {
        constructor(props) {
            super(props);
            this.title = this.props.title;
        }
        
        render() {
            return (
                <div style={{fontSize: '150%', borderStyle: 'none none solid none', marginBottom: '1em'}}>{this.title}</div>
            )
        };
                
        
}