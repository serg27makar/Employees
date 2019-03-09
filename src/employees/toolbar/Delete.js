import React, { Component } from 'react';
import {connect} from 'react-redux'
import { setActionUsersList, setActionBody} from "../../actions/index"
import {userDell, usersAll} from "../utility/socket"

class Delete extends Component {

    cancel = () =>{
        this.props.setBodyFunction('')
    };

    delet = () =>{
        userDell(this.props.userId);
        usersAll((res) => {
            this.props.setUserListFunction(res);
        });
        this.props.setBodyFunction('')
    };

    render() {
        return(
            <div id="bodyDelete">
                <h3>Вы действительно хотите удалить этого сотрудника</h3>
                <h3>{this.props.userName}</h3>
                <h4>Он профисиональный : {this.props.department}</h4>
                <button onClick={this.delet} className="butEdit">Delete</button>
                <button onClick={this.cancel} className="butDelete">Cancel</button>
            </div>
        );
    }
}

function MapStateToProps(state) {
    return {
        usersList: state.userInfo.usersList,
        userId: state.userInfo.userId,
        userName: state.userInfo.userName,
        department: state.userInfo.department,
        visibleBody: state.dbInfo.visibleBody,
    }
}

const mapDispatchToProps = dispatch => {
    return{
        setUserListFunction: (usersList) => {
            dispatch(setActionUsersList(usersList))
        },
        setBodyFunction: (visibleBody) => {
            dispatch(setActionBody(visibleBody))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(Delete);

