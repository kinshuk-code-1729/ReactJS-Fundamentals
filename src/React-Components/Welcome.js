import React,{Component} from "react";
class Welcome extends Component{

    constructor(){
        super(); // super class constructor called
        this.state = {name : "Rohit Kumar",Age : 46};
    }

    changeData(){
        debugger;
        // state data is mutable : can be modified
        this.setState({
            name : "Jatin Pathak",
            Age : 21
        })
    }

    render(){
        return(
            <div>
                <h2>Name is {this.state.name} and age is {this.state.Age}.</h2>
                <button onClick={()=> this.changeData()}>Change State</button>
            </div>
        );
        }
}
export default Welcome;