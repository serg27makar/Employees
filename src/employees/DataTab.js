import React, { Component } from 'react';
import {connect} from 'react-redux'
import Header from "./table/Header";
import { setActionUsersList} from "../actions/index"
import {usersAll} from "./utility/socket";
import Delete from './table/Delete'
import Edit from './table/Edit'
import Toolbar from "../employees/toolbar/Toolbar";
import Listuser from './table/Listuser'

class DataTab extends Component {
    constructor() {
        super();
        usersAll((res) => {
            this.props.setUserListFunction(res);
        })
    }
    render() {
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
        }else {
            return (
                <div id="table">
                    <Toolbar/>
                    <Header/>
                    <Listuser/>
                </div>
            );
        }
    }
}


function MapStateToProps(state) {
    return {
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

