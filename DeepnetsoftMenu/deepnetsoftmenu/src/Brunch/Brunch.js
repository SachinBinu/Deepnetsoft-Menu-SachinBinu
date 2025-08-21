import React, { useEffect, useState } from 'react'
import '../Food/Food.css'
import side1 from '../Frame1.png';
import side2 from '../Frame3.png';
import api from '../Api';
import tika from '../Tika.png';
import NavOptions from '../NavOptions/NavOptions';
import FooterInfo from '../FooterInfo/FooterInfo';
import CompanyInfo from '../CompanyInfo/CompanyInfo';
import Brunch1 from '../Brunch1.png';
import Brunch2 from '../Brunch2.png';


function Brunch() {
    const [data, setData] = useState([])

    useEffect(() => {
        api.get("/Item/Brunch").then((res) => {
            setData(res.data)
        })


    }, [])
    const array1 = data.slice(0, 5)
    const array2 = data.slice(5, 10)
    return (
        <>
            <NavOptions />
            <div >
                <div className="menu-container text-white">
                    <div className='BorderEdit'>
                        <img style={{ maxHeight: '170px', maxWidth: '170px', position: 'absolute', overflow: 'visible' }} src={Brunch1} />

                        {/* Appetizers Section */}
                        <h2 className="menu-title">BRUNCH</h2>
                        <img style={{ maxHeight: '170px', maxWidth: '170px', position: 'absolute', overflow: 'visible', right: 150, top: 630 }} src={Brunch2} />

                        <div className="menu-section">
                            <div className="menu-column">
                                {array1.map((Item) => {
                                    return (
                                        <p className='mt-5'><span className="dish">{Item.FoodName}</span><span className="price">${Item.Price}</span><br /> <span className='description'>{Item.Description}</span> </p>)

                                })}

                            </div>

                            <div className="menu-column">
                                {array2.map((Item) => {
                                    return (<p className='mt-5'><span className="dish">{Item.FoodName}</span> <span className="price">${Item.Price}</span><br /> <span className='description'>{Item.Description}</span></p>)
                                })}
                            </div>
                        </div>

                        {/* Salads Section */}
                        <div className='SaladsCss'>
                            <h2 className="Salad-title mt-4">Best Seller</h2>
                            <p className="menu-sub">Option to add protein</p>
                            <div className=" menu-column">
                                <p className='mt-5'><span className="dish">Biriyani</span> <span className="price">$10</span><br />
                                    <span className='description'>Fresh Chicken with heavy spices</span> </p>
                                <p className='mt-5'><span className="dish">Chicken Polichath</span> <span className="price">$15</span><br />
                                    <span className='description'>Fresh Chicken with heavy spices</span> </p>                        </div>
                        </div>
                    </div>
                </div>






            </div>
            <FooterInfo />
            <CompanyInfo />
        </>
    );
}

export default Brunch
