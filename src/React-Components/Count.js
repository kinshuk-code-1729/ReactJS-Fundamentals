import React, { Component } from 'react';

class Count extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       ct : 0
    }
  }  

  increase() {
    // this.state.ct = this.state.ct + 1;
    // setState happens asynchronously
    /* this.setState(
        {
        ct : this.state.ct + 1
        },
        ()=> {
            console.log(this.state.ct);
        }); */
        this.setState((prevState,props)=>({
            ct : prevState.ct + 1
        }),()=>{console.log(this.state.ct)});
  }

  render() {
    return (
      <div>
        Count Component {this.state.ct}
        <button onClick={()=> this.increase()}>Increase</button>
      </div>
    )
  }
}

export default Count;