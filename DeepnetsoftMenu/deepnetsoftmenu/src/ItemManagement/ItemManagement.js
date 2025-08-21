import React from 'react'
import { Button, Dropdown, Table } from 'react-bootstrap'
import { Eye, CircleCheckBig, Trash2 } from 'lucide-react';
import './ItemManagement.css';

function ItemManagement() {
    return (
        <div>
            <div className="p-4 ">
                <div className="mb-3">
                    <h3>Booking Management</h3>
                </div>


                <Table border={1} className='Resourcetable1' >
                    <thead>
                        <tr className='tablehead'>
                            <th >Food Name</th>
                            <th>Type</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='tablehead'>
                            <td>Comference Room A</td>
                            <td>John H</td>
                            <td>June 18, 2025 10:00 AM</td>
                            <td className=' gap-2'><Trash2 style={{ marginLeft: '10px' }} size={20} color='red' /></td>                     
                        </tr>
                        <tr className='tablehead'>
                            <td>Comference Room A</td>
                            <td>Food</td>
                            <td>100</td>
                       
                            <td className=' gap-2'><Trash2 style={{ marginLeft: '10px' }} size={20} color='red' /></td>
                        </tr>
                    </tbody>
                </Table>
            </div>


        </div >
    )
}

export default ItemManagement
