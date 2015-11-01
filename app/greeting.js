
import React from 'react';

class GreetComponent extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'GreetComponent';
    }
    render() {
        return (
            <div className="greeting">
                Hello, {this.props.name}
            </div>
        );
    }
}

export default GreetComponent;
