import React from 'react'
import './Addnewfood.css'
import Button from 'react-bootstrap/Button';
import api from '../Api';

function Addnewfood() {
    function handleSubmit(e) {
        e.preventDefault()
        const data = {
            FoodName: e.target.ItemName.value,
            Description: e.target.Description.value,
            Price: e.target.Price.value,
            Type: e.target.type.value,

        }

        api.post("/CreateItem", data)
            .then((res) => {
                alert(res.data.message)
            })
            .catch(() => {
                alert("err")
            })
        console.log("Sucess");
    }
    return (
        <div className='FullBodyCss'>
            <h1 className='ALLNAMEADMIN MenuHead head-m'>Add New Resources</h1>
            <div className='New-User p-3 mx-auto'>
                <form className='py-3' onSubmit={handleSubmit} >
                    <div className="mb-3 row ">
                        <div className='col'>
                            <label htmlFor="ItemName" className="form-label">Item Name</label>
                            <input type="text" name='ItemName' className="form-control" id="ItemName" placeholder="e.g., Biriyani" required />

                        </div>
                    </div>
                    <div className="mb-3 row ">
                        <div className='col'>
                            <label htmlFor="Description" className="form-label">Description</label>
                            <input type="text" name='Description' className="form-control" id="Description" placeholder="e.g., Biriyani" required />
                        </div>
                    </div>
                    <div className="mb-3 row ">
                        <div className='col'>
                            <label htmlFor="Price" className="form-label">Price</label>
                            <input type="text" name='Price' className="form-control" id="Price" placeholder="e.g., Biriyani" required />
                        </div>
                    </div>

                    <div className='col'>
                        <select name='type' className="form-select selectedcontentcss"  >
                            <button>
                                <selectedcontent></selectedcontent>
                            </button>
                            <option selected>Open this select menu</option>
                            <option value="Food">Food</option>
                            <option value="Drinks">Drinks</option>
                            <option value="Brunch">Brunch</option>
                        </select>
                    </div>





                    <div className='text-end mt-3 '>
                        <Button className='buttonaddresource' type='submit' style={{ marginLeft: '10px', width: '180px' }} variant="secondary">Add Item</Button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Addnewfood
