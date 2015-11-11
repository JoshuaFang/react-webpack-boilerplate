
import React from 'react';

class Index extends React.Component {
    render() {
        return (
            <div>
                <h1>This is a demo</h1>
                <div>{this.props.children}</div>
            </div>
        );
    }
}

export default Index;
