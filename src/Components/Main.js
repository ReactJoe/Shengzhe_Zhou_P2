import React from 'react'
import '../Style/main.css'
class Main extends React.Component {
  state = {
    emailaddr: '',
    pw: '',
    show: 'show',
    showText: 'Show',
    emailTip: '',
    pwTip: '',
    closeComponent: 'login',
  }
  getInfo = () => {
    let { emailTip, pw } = this.state
    console.log({ emailTip, pw })
    this.setState({
      emailaddr: '',
      pw: '',
    })
  }
  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value,
    })
  }
  showPw = () => {
    const { show } = this.state
    if (show === 'show') {
      this.setState({
        show: 'hidden',
        showText: 'Hide',
      })
    } else {
      this.setState({ show: 'show', showText: 'Show' })
    }
  }
  verifyEmail = () => {
    const { emailaddr } = this.state
    let reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
    if (!reg.test(emailaddr)) {
      this.setState({
        emailTip: 'Please input right Email Address',
      })
    } else {
      this.setState({
        emailTip: '',
      })
    }
  }
  verifyPw = () => {
    const { pw } = this.state
    let reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/
    if (!reg.test(pw)) {
      this.setState({
        pwTip:
          'Contains at least 8-16 characters, at least one uppercase letter, one lowercase letter, and one digit',
      })
    } else {
      this.setState({
        pwTip: '',
      })
    }
  }
  closeLoginPage = () => {
    const { closeComponent } = this.state

    console.log(closeComponent)
    this.setState({
      closeComponent: 'closeLogin',
    })
  }
  render() {
    return (
      <div className="mainbody">
        <div className={this.state.closeComponent}>
          <span className="close_signin" onClick={this.closeLoginPage}>
            X
          </span>
          <h1>Sign in to your account</h1>
          <div className="forminput">
            <p>Email</p>
            <input
              type="email"
              name="emailaddr"
              value={this.state.emailaddr}
              onChange={this.handleChange}
              onBlur={this.verifyEmail}
            />
            <span className="tip">{this.state.emailTip}</span>

            <p>Password</p>

            <div className="pw_input">
              <input
                type={this.state.show === 'show' ? 'password' : 'text'}
                name="pw"
                value={this.state.pw}
                onChange={this.handleChange}
                onBlur={this.verifyPw}
              />
              <span className="show_pw" onClick={this.showPw}>
                {this.state.showText}
              </span>
              <span className="tip">{this.state.pwTip}</span>
            </div>

            <button className="submit" onClick={this.getInfo}>
              Sign In
            </button>
            <div className="more_info">
              <span>Don't have an account?</span>
              <a href="#">Sign up</a>
              <a href="#">Forgot password? </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Main
