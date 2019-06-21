import React from "react";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  validateForm = e => {
    console.log(this.state.username);
    console.log(this.state.password);
    if (this.state.username.length > 0 && this.state.password.length > 0) {
      if (this.state.username === "admin" && this.state.password === "admin") {
        window.location.assign("http://localhost:3000/products");
      } else {
        alert("Enter correct data");
      }
    } else {
      alert("Enter Data");
    }
  };

  handleUsername = e => {
    this.setState({ username: e.target.value });
  };

  handlePassword = e => {
    this.setState({ password: e.target.value });
  };

  render() {
    return (
      <div className="gap-t inner-container">
        <div className="header">Login</div>
        <div className="box">
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              onChange={this.handleUsername}
              className="login-input"
              placeholder="Username"
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              onChange={this.handlePassword}
              className="login-input"
              placeholder="Password"
            />
          </div>

          <button
            type="button"
            className="login-btn"
            onClick={this.validateForm}
          >
            Login
          </button>
        </div>
      </div>
    );
  }
}
export default Login;
