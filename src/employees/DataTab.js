import React, { Component } from 'react';
import {connect} from 'react-redux'
import Header from "./table/Header";
import Body from "./table/Body";
import { setActionUsersList} from "../actions/index"
import {usersAll} from "./utility/socket";

class DataTab extends Component {
    constructor() {
        super();
        usersAll((res) => {
            this.props.setUserListFunction(res);
        })
    }

    render() {
        return (
            <div id="table">
                <Header/>
                <Body/>
            </div>

        );
    }
}

function MapStateToProps(state) {
    return {
        usersList: state.userInfo.usersList,
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

