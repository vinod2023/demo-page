import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Login extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            name: "",
            address: "",
            phone: '',
            isError: true,
            errorMessage: "",
            submitted: false
        }
    }

    handleClick = async(e) => {
        this.setState({
            submitted: true
        })
    }

    handleBackClick = () => {
        this.props.history.push("/")
    }

    handleChange = (e) => {
        this.setState({errorMessage: ""})
        const { name, value } = e.target;
        switch (name) {
            case 'email':
                this.setState({
                    email: value
                }, this.updateIsError)
                break;
            case 'name':
                this.setState({
                    name: value
                }, this.updateIsError)
                break;
                case 'phone':
                    this.setState({
                        phone: value
                    }, this.updateIsError)
                    break;
                    case 'address':
                this.setState({
                    address: value
                }, this.updateIsError)
                break;
            default:
                break;
        }
    }

    updateIsError = () => {
        if(this.state.email.length === 0 || this.state.name.length === 0 || this.state.phone.toString().length !== 10 || this.state.address.length === 0) {
            this.setState({
                isError: true
            })
        }
        if(this.state.phone.toString().length !== 10 && this.state.phone !== '') {
            this.setState({
                errorMessage: "Phone Number should be 10 digits"
            })
        }
        else {
            this.setState({
                isError: false
            })
        }
    }


    render() {
        return (
            <div className="loginComponent">
                <div className="loginForm">
                    <div className="loginComponentHeader">Login  <span style={{color: "red", font: "normal normal normal 14px/14px Helvetica", float: "right"}}><button className="backButton" onClick={this.handleBackClick}>Go Back</button></span></div>
                    <div className="form-control">
                        <label htmlFor="name" className="formLabel">Name</label><br/>
                        <input type="text" className={this.state.errorMessage.length > 0 ? "errorBox" : "inputBox"} name="name" onChange={e => this.handleChange(e)} value={this.state.name} placeholder="Enter your name" /><br/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="email" className="formLabel">Email Address</label>
                        <input type="text" className={this.state.errorMessage.length > 0 ? "errorBox" : "inputBox"} name="email" onChange={e => this.handleChange(e)} value={this.state.email} placeholder="Enter your email" /><br/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="phone" className="formLabel">Phone Number</label>
                        <input type="number" className={this.state.errorMessage.length > 0 ? "errorBox" : "inputBox"} name="phone" onChange={e => this.handleChange(e)} value={this.state.phone} placeholder="Enter your Mobile number" />
                        <span style={{color: "red", font: "normal normal normal 14px/14px Helvetica", float: "right"}}>{this.state.errorMessage}</span><br/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="address" className="formLabel">Address</label>
                        <textarea className={this.state.errorMessage.length > 0 ? "errorBox" : "inputBox"} name="address" onChange={e => this.handleChange(e)} value={this.state.address} placeholder="Enter your Address" /><br/>
                    </div>
                    <div className="loginButtonBox">
                        <button className={this.state.isError ? "loginButtonDisabled" : "loginButton"} onClick={this.handleClick}>Submit</button>
                    </div>
                    
                </div>
                {
                    this.state.submitted ?
                    <div className="loginComponentHeader">
                        <p>Name : {this.state.name}</p>
                        <p>Email : {this.state.email}</p>
                        <p>Phone : {this.state.phone}</p>
                        <p>Address : {this.state.address}</p>
                </div>:
                ""
                }
                
            </div>
        )
    }
}

export default Login
