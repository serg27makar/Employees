import React, { Component } from 'react';
import Login from './Login'
import {utilityServerGet} from '../authorization/utility/axiosServer'
import {connect} from 'react-redux'
import {setActionAdminId, setActionAdminName} from "../actions/index";
import {Redirect} from 'react-router-dom';

class Titul extends Component {
    constructor(props){
        super(props);
        this.state={
            a:true
        }
    }
    componentWillMount(){
        utilityServerGet((call)=>{
            if(call === 401){
                console.log(call)
            }else if(call === 'scm'){
                console.log(call)
            }else{
                this.props.setAdminIdFunction(call._id);
                this.props.setAdminNameFunction(call.Name);
            }
        })
    };

    render() {
        if (this.props.adminId) {
            if (this.props.adminId.length === 24) {
                return <Redirect to='/employees'/>
            }
        }
        return (
            <div className="App">
                <Login/>
            </div>
        );
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

export default connect(MapStateToProps, mapDispatchToProps)(Titul);
