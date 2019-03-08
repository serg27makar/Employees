import React, { Component } from 'react';
import {connect} from 'react-redux'
import {setActionBody, setActionUsersList} from "../../actions/index"
import {findUser, usersAll, findUserDep} from '../utility/socket'

class Searchuser extends Component {
    constructor(){
        super();
        this.state={
            sele:'',
            name: '',
        }
    }
    addUser = ()=>{
        this.props.setBodyFunction('create')
    };
    select = e =>{
        findUserDep(e.target.value,(res)=>{
            this.props.setUserListFunction(res)
        });
    };
    name = e =>{
        this.setState({
            name: e.target.value
        })
    };
    search = () => {
        findUser(this.state.name, (res) => {
            this.props.setUserListFunction(res)
        });
    };

    clear = ()=>{
        usersAll((res)=>{
            this.props.setUserListFunction(res)
        });
        this.setState({
            sele:'',
            name: '',
        })
    };

    render() {
        return (
            <div id="toolbar">
                <button className="add" onClick={this.clear}>Clear</button>
                <div className="search">
                    <input type='name' name="userName" value={this.state.name} onChange={this.name}
                           style={{fontSize: 'x-large'}}/>
                    <button id="input" onClick={this.search}/>
                </div>
                <div className="select" style={{margin: '1px'}}>
                    <select onChange={this.select} style={{fontSize: '31px', borderRadius: '6px'}}>
                        <option>отдел</option>
                        <option value="программист">программист</option>
                        <option value="менеджер">менеджер</option>
                        <option value="повар">повар</option>
                        <option value="грущик">грущик</option>
                        <option value="вахтер">вахтер</option>
                        <option value="этот">и этот</option>
                    </select>
                </div>
                <button className="add" onClick={this.addUser}>Add</button>
            </div>
        );
    }
}
function MapStateToProps(state) {
    return {
        visibleBar: state.dbInfo.visibleBar,
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

export default connect(MapStateToProps, mapDispatchToProps)(Searchuser);
