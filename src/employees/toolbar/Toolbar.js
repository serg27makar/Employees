import React, { Component } from 'react';
import {connect} from 'react-redux'
import Createuser from "./Createuser";
import Searchuser from "./Searchuser";
import {Redirect} from 'react-router-dom';

class Toolbar extends Component {

    render() {
        if (!this.props.adminId || this.props.adminId.length !== 24) {
            return <Redirect to='/'/>

        }
        if(this.props.visibleBar){
            return (
                <div>
                    <Createuser/>
                </div>
            );
        }else {
            return (
                <Searchuser/>
            );
        }
    }
}
function MapStateToProps(state) {
    return {
        adminId: state.adminInfo.adminId,
        visibleBar: state.dbInfo.visibleBar,
    }
}

export default connect(MapStateToProps)(Toolbar);
