import React from 'react'
import Button from 'react-bootstrap/Button';
import img67 from '../Vector21.png'
import './FooterInfo.css';
import { Phone, Mail, Facebook, Twitter, Youtube, Instagram, MapPin } from 'lucide-react';
function FooterInfo() {
    return (
        <div>
            <div class=" FooterInfoMain d-flex flex-column justify-content-center align-items-center">
                <img className='Imgangle ' style={{ position: 'relative', zIndex: 2, top: '38px', left: '10px' }} src={img67} />

                <div class="d-flex justify-content-center flex-wrap gap-5 text-left ">
                    <div className='Bookings p-3'>
                        <h5 className='ConnectionCss'>Connect with Us</h5>
                        <div className='InfoCss d-flex gap-2 justify-content-center'><Phone color='#C5A059' size={18}  />+91 1231231231</div>
                        <div className='InfoCss  d-flex gap-2 justify-content-center'> <Mail  color='#C5A059' size={18} />info@deepnetsoft.com</div>
                    </div>

                    <div className='Bookings p-3'>
                        <div className='DeepnetsoftCss' style={{color:'#C5A059'}}>DEEP <span style={{color:'#ffffffff'}}>NET</span> <span style={{color:'#857878'}}>SOFT</span></div>
                        <div className='IconsCss d-flex justify-content-center gap-3'><Facebook /><Twitter /><Youtube /><Instagram ></Instagram></div>
                    </div>

                    <div className='Bookings p-3'>
                        <h5 className='FindUsCss'>Find us</h5>
                        <div className='InfoCss  d-flex gap-2 justify-content-center'><MapPin  color='#C5A059' size={18}/>First floor, Geo infopark, Infopark EXPY, Kakkanad</div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FooterInfo
