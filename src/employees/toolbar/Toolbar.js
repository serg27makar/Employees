import React, { Component } from 'react';
import {connect} from 'react-redux'
import Createuser from "./Createuser";
import Searchuser from "./Searchuser";

class Toolbar extends Component {

    render() {
        if(this.props.visibleBar){
            return (
                <div>
                    <Searchuser/>
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
        visibleBar: state.dbInfo.visibleBar,
    }
}

export default connect(MapStateToProps)(Toolbar);
