import React, { Component } from 'react'

export class FormComponent extends Component {

  constructor(props) {
    super(props)
    console.log("Constructor Called !!!!");
    this.state = {
       email : '',
       query : '',
       TimeSlot : ''
    }
  }

  onChangeEmail = (event)=>{
    // fetches input box's data
    // console.log(event.target.value);
    this.setState({
      email : event.target.value
    });
  }

  onChangeQuery = (event) =>{
    this.setState({
      query : event.target.value
    });
  }

  onChangeTimeSlot = (event) =>{
    this.setState({
      TimeSlot : event.target.value
    });
  }

  onSubmitEnquiry = (event) =>{
    event.preventDefault(); // prevents form's default refresh behaviour
    console.log("form submitted........");
    console.log(`Email : ${this.state.email}, Query : ${this.state.query}, Time Slot : ${this.state.TimeSlot}`);
  }

  componentDidMount() {
    // Onload API call
    console.log("componentDidMount called........");
    this.setState({
      TimeSlot : "Afternoon"
    });
  }

  render() {
    return (
      <div>
        Enquiry Form
        <form onSubmit={this.onSubmitEnquiry}>
         <div>
          <label>Email</label>
          <input type="email"
           value={this.state.email}
           onChange={this.onChangeEmail}
          />
         </div>
         <div>
          <label>Query</label>
          <textarea value={this.state.query} onChange={this.onChangeQuery}></textarea>
         </div>
         <div>
          <label>Day shifts</label>
          <select value={this.TimeSlot} onChange={this.onChangeTimeSlot}>
            <option value="morning">Morning</option>
            <option value="afternoon">Afternoon</option>
            <option value="evening">Evening</option>
          </select>
         </div>
         <button type="submit">Send Enquiry</button>
        </form>
      </div>
    )
  }
}

export default FormComponent