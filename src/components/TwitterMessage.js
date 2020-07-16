import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      charsLeft: 280,
      message: ''
    };
  }

  handleChange = event =>{
    console.log(event)
    this.setState({
      [event.target.name]: event.target.value,
      charsLeft: 280-event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleChange(event)} />
        <p>You have {this.state.charsLeft} chars left</p>
      </div>
    );
  }
}

export default TwitterMessage;
