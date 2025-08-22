import React, { useEffect, useState } from 'react'
import './Food.css'
import side1 from '../Frame1.png';
import side2 from '../Frame3.png';
import api from '../Api';
import NavOptions from '../NavOptions/NavOptions';
import FooterInfo from '../FooterInfo/FooterInfo';
import CompanyInfo from '../CompanyInfo/CompanyInfo';
import tikka from '../Tika.png'
import Kuboose from '../Kuboos.png'
import Salad from '../Salad.png'
function Food() {
    const [data, setData] = useState([])

    useEffect(() => {
        api.get("/Item/Food").then((res) => {
            setData(res.data)
        })


    }, [])
    const array1 = data.slice(0, 5)
    const array2 = data.slice(5, 10)
    return (
        <>
            <NavOptions />
            <div className='' >
                <div className="menu-container text-white">
                    <div className='BorderEdit'>
                        {/* Appetizers Section */}
                        <img style={{ maxHeight: '170px', maxWidth: '170px', position: 'absolute', overflow: 'visible' }} src={tikka} />

                        <h2 className="menu-title">APPETIZERS</h2>
                        <img style={{ maxHeight: '170px', maxWidth: '170px', position: 'absolute', overflow: 'visible', right: 150, top: 630 }} src={Kuboose} />
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

                            <h2 className="Salad-title mt-4">SALADS</h2>
                            <p className="menu-sub">Option to add protein</p>
                            <div className=" menu-column">
                                <p className='mt-5'><span className="dish">CAESAR SALAD</span> <span className="price">$10</span><br />
                                    <span className='description'>Hello</span> </p>
                                <p className='mt-5'><span className="dish">CAESAR SALAD</span> <span className="price">$10</span><br />
                                    <span className='description'>Hello</span> </p>                        </div>
                        </div>
                    </div>
                </div>

                <FooterInfo />
                <CompanyInfo />




            </div>
        </>
    );
}

export default Food
