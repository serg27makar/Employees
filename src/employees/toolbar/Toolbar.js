import React, { Component } from 'react';
import {userIns} from "../utility/socket"

class Toolbar extends Component {
    constructor(){
        super();
        this.state={
            sele:'',
            adduser: false,
            name: '',
        }
    }

    addUser = ()=>{
        this.setState({
            adduser: true
        })
    };
    select = e =>{
        this.setState({
            sele: e.target.value
        })
    };
    search = e =>{
        this.setState({
            name: e.target.value
        })
    };

    createUser = ()=>{
        let user = {
            userName: this.state.name,
            department: this.state.sele,
        };
        userIns(user);

        this.setState({
            sele:'',
            adduser: false,
            name: '',
        })
    };

    render() {
        if(this.state.adduser){
            return (
                <div id="createUser">
                    <div className="inputName">
                        <label>введите имя</label>
                        <input type='name' name="adminName" value={this.state.name} onChange={this.search}
                               style={{fontSize: 'x-large'}}/>
                    </div>
                    <div className="select" style={{margin: '1px'}}>
                        <select onChange={this.select} style={{fontSize: '31px', borderRadius: '6px'}}>
                            <option value="программист">программист</option>
                            <option value="менеджер">менеджер</option>
                            <option value="повар">повар</option>
                            <option value="грущик">грущик</option>
                            <option value="вахтер">вахтер</option>
                            <option value="этот">и этот</option>
                        </select>
                    </div>
                    <button className="add" onClick={this.createUser}>Add</button>
                </div>
            );

        }else {
            return (
                <div id="toolbar">
                    <div className="search">
                        <input type='name' name="adminName" value={this.state.serc} onChange={this.search}
                               style={{fontSize: 'x-large'}}/>
                    </div>
                    <div className="select" style={{margin: '1px'}}>
                        <select onChange={this.select} style={{fontSize: '31px', borderRadius: '6px'}}>
                            <option value="s1">программист</option>
                            <option value="s2">менеджер</option>
                            <option value="s3">повар</option>
                            <option value="s4">грущик</option>
                            <option value="s5">вахтер</option>
                            <option value="s6">и этот</option>
                        </select>
                    </div>
                    <button className="add" onClick={this.addUser}>Add</button>
                </div>
            );
        }
    }
}

export default Toolbar;
