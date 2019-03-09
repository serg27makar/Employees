import React, { Component } from 'react';
import {connect} from 'react-redux'
import {setActionUsersList, setActionBody} from "../../actions/index"
import {createUser} from "./toolfunctions/toolFun"

class Createuser extends Component {
    constructor() {
        super();
        this.state = {
            sele: '',
            name: '',
            txt: '',
            notes: '',
        }
    }

    select = e => {
        this.setState({
            sele: e.target.value
        })
    };
    name = e => {
        this.setState({
            name: e.target.value
        })
    };
    notes = e => {
        this.setState({
            notes: e.target.value
        })
    };
    cancel = () => {
        this.props.setBodyFunction('')
    };
    createUser = ()=>{
        let user = {
            name: this.state.name,
            sele: this.state.sele,
            notes: this.state.notes,
        };
        this.props.setCreateUser(user,(res)=>{
            this.setState({
                txt: res
            })
        })
    };

    render() {
        return (
            <div id="createUser">
                <div className="inputName">
                    <label  style={{fontSize:'x-large'}}>введите имя</label>
                    <input type='name' name="userName" value={this.state.name} onChange={this.name}
                           style={{fontSize: 'x-large', width: '23em'}}/>
                </div>
                <div className="select" style={{margin: '1px'}}>
                    <label style={{fontSize:'x-large'}}>отдел</label>
                    <select onChange={this.select} id="selecter">
                        <option > </option>
                        <option value="программист">программист</option>
                        <option value="менеджер">менеджер</option>
                        <option value="повар">повар</option>
                        <option value="грущик">грущик</option>
                        <option value="вахтер">вахтер</option>
                        <option value="этот">и этот</option>
                    </select>
                </div>
                <label  style={{fontSize:'x-large'}}>информация</label>
                <textarea id="txtArea" onChange={this.notes} value={this.state.notes}/>
                <button className="butEdit" onClick={this.createUser}>Add</button>
                <button className="butDelete" onClick={this.cancel}>Cancel</button>
                <h4>{this.state.txt}</h4>
            </div>
        );
    }
}
function MapStateToProps(state) {
    return {
        visibleBody: state.dbInfo.visibleBody,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        setBodyFunction: (visibleBody) => {
            dispatch(setActionBody(visibleBody))
        },
        setUserListFunction: (usersList) => {
            dispatch(setActionUsersList(usersList))
        },
        setCreateUser: (data,call)=>{
            createUser(data,dispatch,call)
        }
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(Createuser);
