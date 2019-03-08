import React, { Component } from 'react';
import {connect} from 'react-redux'

class Toolbar extends Component {

    render() {
        return (
            <div>
            </div>
        );
    }
}
function MapStateToProps(state) {
    return {
        adminId: state.adminInfo.adminId,
    }
}

export default connect(MapStateToProps)(Toolbar);
