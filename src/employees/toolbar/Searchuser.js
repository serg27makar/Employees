import React, { Component } from 'react';
import {connect} from 'react-redux'
import {setActionVisible} from "../../actions/index"

class Searchuser extends Component {
    constructor(){
        super();
        this.state={
            sele:'',
            name: '',
        }
    }
    addUser = ()=>{
        this.props.setVisibleBarFunction(true)
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

    render() {
        return (
            <div id="toolbar">
                <div className="search">
                    <input type='name' name="adminName" value={this.state.serc} onChange={this.search}
                           style={{fontSize: 'x-large'}}/>
                </div>
                <div className="select" style={{margin: '1px'}}>
                    <select onChange={this.select} style={{fontSize: '31px', borderRadius: '6px'}}>
                        <option>отдел</option>
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

export default connect(MapStateToProps, mapDispatchToProps)(Searchuser);
