import React, { Component } from 'react';
import {connect} from 'react-redux'
import { setActionUsersList, setActionBody} from "../../actions/index"

class Edit extends Component {

    cancel = () =>{
        this.props.setBodyFunction('')
    };

    edit = () =>{

    };

    render() {
        return(
            <div id="bodyEdit">
                <h4>redact</h4>
                <button onClick={this.edit} className="butEdit">Edit</button>
                <button onClick={this.cancel} className="butDelete">Cancel</button>
            </div>
        );
    }
}


function MapStateToProps(state) {
    return {
        usersList: state.userInfo.usersList,
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

export default connect(MapStateToProps, mapDispatchToProps)(Edit);

