import React, { Component } from 'react';
import {connect} from 'react-redux'
import {setActionBody, setActionSelectUser, setActionUserId, setActionUserName, setActionDepartment} from "../../actions/index"

class Listuser extends Component {

    delUser = (e) =>{
        this.props.setUserIdFunction(this.props.usersList[e.target.value]._id);
        this.props.setUserNameFunction(this.props.usersList[e.target.value].userName);
        this.props.setUserDepFunction(this.props.usersList[e.target.value].department);
        this.props.setBodyFunction('del')
    };

    editUser = (e) =>{
        this.props.setUserSelectFunction(this.props.usersList[e.target.value]);
        this.props.setBodyFunction('edit')
    };

    infoUser = (e) =>{
        this.props.setUserSelectFunction(this.props.usersList[e.target.value]);
        this.props.setBodyFunction('inform')
    };

    render() {
        let i = 0;
        return (
            <div id="a">
                {this.props.usersList.map((av) => {
                    return <div id="bodyTable" key={av._id}>
                        <div className="tabNumber">{++i}</div>
                        <button id="nameBut" onClick={this.infoUser} value={this.props.usersList.indexOf(av)} className="butEdit">{av.userName}</button>
                        <div className="tabDepartment">{av.department}</div>
                        <button onClick={this.editUser} value={this.props.usersList.indexOf(av)} className="butEdit">Edit</button>
                        <button onClick={this.delUser} value={this.props.usersList.indexOf(av)} className="butDelete">Delete</button>
                    </div>
                })}
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
        setUserIdFunction: (userId) => {
            dispatch(setActionUserId(userId))
        },
        setUserNameFunction: (userName) => {
            dispatch(setActionUserName(userName))
        },
        setUserDepFunction: (department) => {
            dispatch(setActionDepartment(department))
        },
        setUserSelectFunction: (selectUser) => {
            dispatch(setActionSelectUser(selectUser))
        },
        setBodyFunction: (visibleBody) => {
            dispatch(setActionBody(visibleBody))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(Listuser);

