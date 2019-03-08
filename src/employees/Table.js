import React, { Component } from 'react';

class Table extends Component {

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Сотрудники</th>
                            <th>Отдел</th>
                            <th>Редактировать</th>
                            <th>Удалить</th>
                        </tr>
                    </thead>
                    <tbody>

                    <tr>
                        <td>news</td>
                        <td>sport</td>
                        <td>mowe</td>
                        <td>sport</td>
                        <td>mowe</td>
                    </tr>

                    </tbody>
                </table>
            </div>

        );
    }
}

export default Table;
