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

    handleSubmit = event => {
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
            <div className="Login">
                <form onSubmit={this.handleSubmit}>
                        <legend>Enter name:</legend>
                        <input type='name' name="adminName" value={this.state.adminName} onChange={this.handleChangeE} style={{fontSize: 'x-large'}} />
                        <legend>Enter password:</legend>
                        <input type='password' name="Password" value={this.state.Password} onChange={this.handleChangeP} style={{fontSize: 'x-large'}}/>
                    <br/>
                    <button type="submit" id="sendRegister">Login</button>
                </form>
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
