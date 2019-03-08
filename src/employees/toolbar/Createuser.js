import React, { Component } from 'react';
import {userIns, usersAll} from "../utility/socket"
import {connect} from 'react-redux'
import {setActionUsersList, setActionBody} from "../../actions/index"

class Createuser extends Component {
    constructor(){
        super();
        this.state={
            sele:'',
            name: '',
            txt:'',
            notes:'',
        }
    }
    select = e =>{
        this.setState({
            sele: e.target.value
        })
    };
    name = e =>{
        this.setState({
            name: e.target.value
        })
    };
    notes = e =>{
        this.setState({
            notes: e.target.value
        })
    };
    cancel =()=>{
        this.props.setBodyFunction('')
    };
    createUser = ()=>{
        if (this.state.name){
            if(this.state.sele !== ''){
                let user = {
                    userName: this.state.name,
                    department: this.state.sele,
                    notes: this.state.notes,
                };
                userIns(user);
                usersAll((res) => {
                    this.props.setUserListFunction(res);
                });

                this.props.setBodyFunction('')
            }else {
                this.setState({
                    txt: 'выберите отдел'
                })
            }
        }else {
            this.setState({
                txt: 'введите имя'
            })
        }
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
    return{
        setBodyFunction: (visibleBody) => {
            dispatch(setActionBody(visibleBody))
        },
        setUserListFunction: (usersList) => {
            dispatch(setActionUsersList(usersList))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(Createuser);
