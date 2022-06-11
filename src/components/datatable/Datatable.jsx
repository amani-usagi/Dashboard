import './datatable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../datasource';
import { Link } from "react-router-dom";
import { useState } from 'react';

export const Datatable = () => {

    const [data, setData] = useState(userRows)

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id));
    };

    const actionColumn = [{
        field: 'action', headerName: 'Action', width: 200, renderCell: (params) => {
            return (
                <div className="cellAction">
                    <Link to='/users/test' style={{ textDecoration: 'none' }}>
                        <div className="viewButton">View</div>
                    </Link>
                    <Link to='/users/te' style={{ textDecoration: 'none' }}>
                        <div className="deleteButton" onClick={() => handleDelete(params.row.id)}>Delete</div>
                    </Link>
                </div>
            )
        }
    }]
    return (
        <div className='datatable' >
            <div className="dataTabTitle">
                Add User
                <Link to='/users/new' style={{ textDecoration: 'none' }} className='link'>
                    Add New
                </Link>
            </div>
            <DataGrid className='dataGrid'
                rows={data}
                columns={userColumns.concat(actionColumn)}
                pageSize={10}
                rowsPerPageOptions={[10]}
                checkboxSelection
            />
        </div>
    )
}
