import React, { Component } from 'react';
import {connect} from 'react-redux'
import Header from "./table/Header";
import { setActionUsersList} from "../actions/index"
import {usersAll} from "./utility/socket";
import Delete from './toolbar/Delete'
import Edit from './toolbar/Edit'
import Infouser from './toolbar/Infouser'
import Createuser from "./toolbar/Createuser";
import Searchuser from "./toolbar/Searchuser";
import Listuser from './table/Listuser'
import {Redirect} from 'react-router-dom';

class DataTab extends Component {
    constructor() {
        super();
        usersAll((res) => {
            this.props.setUserListFunction(res);
        })
    }
    render() {
        if (!this.props.adminId || this.props.adminId.length !== 24) {
            return <Redirect to='/'/>
        }
        if(this.props.visibleBody === 'del'){
            return (
                <div id="a">
                    <Delete/>
                </div>
            );
        }else if(this.props.visibleBody === 'edit'){
            return (
                <div id="a">
                    <Edit/>
                </div>
            );
        }else if(this.props.visibleBody === 'create') {
            return (
                <div id="table">
                    <Createuser/>
                </div>
            );
        }else if(this.props.visibleBody === 'inform') {
            return (
                <div id="table">
                    <Infouser/>
                </div>
            );
        }else {
            return (
                <div id="table">
                    <Searchuser/>
                    <Header/>
                    <Listuser/>
                </div>
            );
        }
    }
}

function MapStateToProps(state) {
    return {
        adminId: state.adminInfo.adminId,
        visibleBody: state.dbInfo.visibleBody,
    }
}
const mapDispatchToProps = dispatch => {
    return{
        setUserListFunction: (usersList) => {
            dispatch(setActionUsersList(usersList))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(DataTab);

