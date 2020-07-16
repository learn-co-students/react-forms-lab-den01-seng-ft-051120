import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  saveState = (event) =>{
    this.setState({
      [event.target.name]: event.target.value
    })
    
  }

  validateSubmit = (event) =>{
    event.preventDefault()
    if (!(this.state.username || this.state.password) === '') { 
      this.props.handleLogin(this.state)
    }
  }


  render() {
    return (
      <form onSubmit={this.validateSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.saveState} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.saveState}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
