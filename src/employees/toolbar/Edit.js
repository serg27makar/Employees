import React, { Component } from 'react';
import {connect} from 'react-redux'
import { setActionUsersList, setActionBody} from "../../actions/index"
import {edit} from "./toolfunctions/toolFun"

class Edit extends Component {
    constructor(){
        super();
        this.state={
            sele: '',
            name:'',
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
    edit = ()=>{
        let user = {
            userId: this.props.selectUser._id,
            userName: this.state.name,
            department: this.state.sele,
            notes: this.state.notes,
        };
        this.props.setEditUser(user,(res)=>{
            this.setState({
                txt: res
            })

        })
    };
    cancel = () =>{
        this.props.setBodyFunction('')
    };
    componentDidMount(){
        this.setState({
            sele: this.props.selectUser.department,
            name: this.props.selectUser.userName,
            txt:'',
            notes: this.props.selectUser.notes || undefined,
        })
    }

    render() {
        return(
            <div id="bodyEdit">
                <div className="select" style={{margin: '1px'}}>
                    <label style={{fontSize:'x-large'}}>отдел</label>
                    <select id="selecter" onChange={this.select} value={this.state.sele}>
                        <option value="программист">программист</option>
                        <option value="менеджер">менеджер</option>
                        <option value="повар">повар</option>
                        <option value="грущик">грущик</option>
                        <option value="вахтер">вахтер</option>
                        <option value="этот">и этот</option>
                    </select>
                </div>
                <label  style={{fontSize:'x-large'}}>полное имя</label>
                <input type='name' name="userName" onChange={this.name} value={this.state.name}
                       style={{fontSize: 'x-large', width: '23em'}}/>
                <label  style={{fontSize:'x-large'}}>информация</label>
                <textarea id="txtArea" onChange={this.notes} value={this.state.notes}/>
                <button onClick={this.edit} className="butEdit">Edit</button>
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
        visibleBody: state.dbInfo.visibleBody,
        selectUser: state.userInfo.selectUser,
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
        setEditUser: (data,call)=>{
            edit(data,dispatch,call)
        }
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(Edit);
