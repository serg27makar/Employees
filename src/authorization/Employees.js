import React, { Component } from 'react';
import DataTab from "../employees/DataTab";
import {connect} from 'react-redux'
import {setActionAdminId, setActionAdminName} from "../actions/index";

class Employees extends Component {
    exit =()=>{
        this.props.setAdminIdFunction('');
        localStorage.token = ''
    };
    render() {
        return (
            <div>
                <button onClick={this.exit}>EXIT</button>
                <DataTab/>
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

export default connect(MapStateToProps, mapDispatchToProps)(Employees);
