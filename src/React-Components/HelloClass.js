import React,{Component} from "react";

class HelloClass extends Component{
    render(){
        return(
            <>
                <h3>This is a stateful Class Component</h3>
                <h2>Hi {this.props.name}, you are {this.props.age} years old.</h2>
            </>
        );
    }
}

export default HelloClass;