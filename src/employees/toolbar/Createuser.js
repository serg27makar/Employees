import React, { Component } from 'react';
import {userIns} from "../utility/socket"
import {connect} from 'react-redux'
import {setActionVisible} from "../../actions/index"

class Createuser extends Component {
    constructor(){
        super();
        this.state={
            sele:'',
            name: '',
            txt:'',
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
    cancel =()=>{
        this.props.setVisibleBarFunction(false)
    };
    createUser = ()=>{
        if (this.state.name){
            if(this.state.sele !== ''){
                let user = {
                    userName: this.state.name,
                    department: this.state.sele,
                };
                userIns(user);
                this.props.setVisibleBarFunction(false)
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
                        <label>введите имя</label>
                        <input type='name' name="adminName" value={this.state.name} onChange={this.name}
                               style={{fontSize: 'x-large'}}/>
                    </div>
                    <div className="select" style={{margin: '1px'}}>
                        <select onChange={this.select} style={{fontSize: '31px', borderRadius: '6px'}}>
                            <option >отдел</option>
                            <option value="программист">программист</option>
                            <option value="менеджер">менеджер</option>
                            <option value="повар">повар</option>
                            <option value="грущик">грущик</option>
                            <option value="вахтер">вахтер</option>
                            <option value="этот">и этот</option>
                        </select>
                    </div>
                    <button className="add" onClick={this.createUser}>Add</button>
                    <button className="cancel" onClick={this.cancel}>Cancel</button>
                    <h4>{this.state.txt}</h4>
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
        setVisibleBarFunction: (usersList) => {
            dispatch(setActionVisible(usersList))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(Createuser);
