import React, { Component } from 'react';
import {connect} from 'react-redux';
import {setActionBody} from "../../actions/index"

class Infouser extends Component {

    exit = ()=>{
        this.props.setBodyFunction('')
    };

    render() {
        return (
            <div id="bodyInfo">
                <h4>полное имя :</h4>
                <h2>{this.props.selectUser.userName}</h2>
                <h4>отдел :</h4>
                <h2>{this.props.selectUser.department}</h2>
                <h4>информация :</h4>
                <textarea id="txtarea2" value={this.props.selectUser.notes} readOnly />
                <button className="butEdit" onClick={this.exit}>выход</button>
            </div>
        );
    }
}
function MapStateToProps(state) {
    return {
        selectUser: state.userInfo.selectUser,
    }
}

const mapDispatchToProps = dispatch => {
    return{
        setBodyFunction: (visibleBody) => {
            dispatch(setActionBody(visibleBody))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(Infouser);
