import React, { Component } from 'react';
import {connect} from 'react-redux'
import {setActionAdminId, setActionAdminName} from "../actions/index";
import {utilityServerLogin} from './utility/axiosServer'
import {Redirect} from 'react-router-dom';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            adminName:'',
            Password:'',
            txt:'Enter your login',
        };
    }

    handleChangeE = event => {
        this.setState({ adminName: event.target.value });
    };

    handleChangeP = event => {
        this.setState({ Password: event.target.value });
    };

    handleSubmitLogin = event => {
        event.preventDefault();
        let variant = {
            direct: 'login',
            Name: this.state.adminName,
            password: this.state.Password
        };
        utilityServerLogin(variant, (info)=>{
            if (info.adminId) {
                this.props.setAdminIdFunction(info.adminId);
                this.props.setAdminNameFunction(info.adminName);
            }
            this.setState({
                txt: info.txt
            })
        })
    };

    handleSubmitRegister = event => {
        event.preventDefault();
        let variant = {
            direct: 'register',
            Name: this.state.adminName,
            password: this.state.Password
        };
        utilityServerLogin(variant, (info)=>{
            if (info.adminId) {
                this.props.setAdminIdFunction(info.adminId);
                this.props.setAdminNameFunction(info.adminName);
            }
            this.setState({
                txt: info.txt
            })
        })
    };
    render() {
        if (this.props.adminId) {
            if (this.props.adminId.length === 24) {
                return <Redirect to='/employees'/>
            }
        }
        return (
            <div className="login">
                <form>
                    <legend>Enter name:</legend>
                    <input className='logInp' type='name' name="userName" value={this.state.adminName} onChange={this.handleChangeE}  />
                    <legend>Enter password:</legend>
                    <input className='logInp' type='password' name="Password" value={this.state.Password} onChange={this.handleChangeP}/>
                    <br/>
                    <button className="add" onClick={this.handleSubmitLogin}>Login</button>
                    <button className="add" onClick={this.handleSubmitRegister}>Register</button>
                </form>
                <h3>{this.state.txt}</h3>
            </div>
        )
    }
}

function MapStateToProps(state) {
    return {
        adminId: state.adminInfo.adminId,
        adminName: state.adminInfo.adminName,
    }
}
const mapDispatchToProps = dispatch => {
    return{
        setAdminIdFunction: (adminId) => {
            dispatch(setActionAdminId(adminId))
        },
        setAdminNameFunction: (adminName) => {
            dispatch(setActionAdminName(adminName))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(Login);
