import React, { Component } from 'react';
import DataTab from "../employees/DataTab";
import Toolbar from "../employees/toolbar/Toolbar";

class Employees extends Component {

    render() {
        return (
            <div>
                <Toolbar/>
                <DataTab/>
            </div>

        );
    }
}

export default Employees;
