import React, { Component } from 'react';
import {connect} from 'react-redux'
import {setActionUserId, setActionUsersList, setActionBody} from "../../actions/index"

class Listuser extends Component {

    delUser = (e) =>{
        this.props.setUserIdFunction(e.target.value);
        this.props.setBodyFunction('del')
    };

    editUser = (e) =>{
        this.props.setUserIdFunction(e.target.value);
        this.props.setBodyFunction('edit')
    };

    render() {
        let i = 0;
        return (
            <div id="a">
                {this.props.usersList.map((av) => {
                    return <div id="bodyTable" key={av._id}>
                        <div className="tabNumber">{++i}</div>
                        <div className="tabEmployees">{av.userName}</div>
                        <div className="tabDepartment">{av.department}</div>
                        <button onClick={this.editUser} value={av._id} className="butEdit">Edit</button>
                        <button onClick={this.delUser} value={av._id} className="butDelete">Delete</button>
                    </div>
                })}
            </div>

        );
    }
}


function MapStateToProps(state) {
    return {
        usersList: state.userInfo.usersList,
        userId: state.userInfo.userId,
        visibleBody: state.dbInfo.visibleBody,
    }
}

const mapDispatchToProps = dispatch => {
    return{
        setUserIdFunction: (userId) => {
            dispatch(setActionUserId(userId))
        },
        setUserListFunction: (usersList) => {
            dispatch(setActionUsersList(usersList))
        },
        setBodyFunction: (visibleBody) => {
            dispatch(setActionBody(visibleBody))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(Listuser);

