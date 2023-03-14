import React from 'react';

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Action</th>
            </tr>
        </thead>
    );
}

const TableRow = () => {
    return (
        <tbody>
            <tr>
                <td>1</td>
                <td>Test Name</td>
                <td><TableAction /></td>
            </tr>
            <tr>
                <td>2</td>
                <td>Son Nghiem</td>
                <td><TableAction /></td>
            </tr>
        </tbody>
    );
}

const TableAction = () => {
    return (
        <div>
            <button type='button' className='btn btn-danger'>Delete</button>
            <button type='button' className='btn btn-warning'>Edit</button>
        </div>
    );
}

const Table = () => {
    return (
        <div className="test">
            <table className='table table-dark table-striped'>
                <TableHeader />
                <TableRow />
            </table>
        </div>
    );
};

export default Table;