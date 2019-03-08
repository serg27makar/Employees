import React, { Component } from 'react';
import {connect} from 'react-redux'
import { setActionUsersList} from "../../actions/index"

class Body extends Component {

    render() {
        let i = 0;
        return (
            <div id="a">
                {this.props.usersList.map((av) => {
                    return <div id="bodyTable" key={av._id}>
                        <div className="tabNumber">{++i}</div>
                        <div className="tabEmployees">{av.userName}</div>
                        <div className="tabDepartment">{av.department}</div>
                        <div className="tabEdit">Edit</div>
                        <div className="tabDelete">Delete</div>

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
        setUserListFunction: (usersList) => {
            dispatch(setActionUsersList(usersList))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(Body);

