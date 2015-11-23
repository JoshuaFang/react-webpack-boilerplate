
import React from 'react';
import { Link } from 'react-router';

class Index extends React.Component {
    render() {
        return (
            <div>
                <h1>This is a demo</h1>
                <Link to="/product-table">Product Table</Link>
                <Link to="/about" style={{marginLeft: "20px"}}>About Page</Link>
                <Link to="/page" style={{marginLeft: "20px"}}>Main Page</Link>
                <Link to="/redux" style={{marginLeft: "20px"}}>Redux Demo</Link>
                <div>{this.props.children || 'Index Page'}</div>
            </div>
        );
    }
}

export default Index;
