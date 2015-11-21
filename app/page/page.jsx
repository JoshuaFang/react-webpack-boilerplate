import React from 'react';

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Page';
    }

    componentDidMount(){
        console.log("init");
    }

    render() {
        return (
            <div>
                <h1>{this.props.params.id ? "编辑" : "新建"}</h1>
                Page: {this.props.params.id || "Content" }
            </div>);
    }
}

export default Page;
