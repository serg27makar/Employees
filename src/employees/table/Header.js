import React, { Component } from 'react';

class Header extends Component {

    render() {
        return (
            <div id="headTable">
                <div className="tabNumber">#</div>
                <div className="tabEmployees">Employees</div>
                <div className="tabDepartment">Department</div>
                <div className="tabEdit">Edit</div>
                <div className="tabDelete">Delete</div>
            </div>

        );
    }
}

export default Header;
