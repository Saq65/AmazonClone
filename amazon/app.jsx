import React from "react";
import Modal from "react-modal";
import { BackspaceRounded, LocationOn, Search, ShoppingCart } from "@mui/icons-material"
import amazonlogo from "./amazon clonelogo.png"
import "flag-icons";
import { useState } from "react";
import './amazon.css';
import img1 from './PC_Hero_1_3000._CB582457311_.jpg';
import img2 from './22._CB582195998_.jpg';
import { Card } from "@mui/material";
import { Carousel } from "react-bootstrap";
import img3 from "./D103625178_DesktopTallHero_3000x1200._CB574597993_.jpg";
import img4 from "./3000._CB584596853_.jpg";
import f1 from "./186x116_Home_furnishings_2._SY116_CB584596691_.jpg";
import f2 from "./186x116_Home_decor_1._SY116_CB584596691_.jpg";
import f3 from "./186x116_Home_lighting_2._SY116_CB584596691_.jpg";
import f4 from "./186x116_Home_storage_1._SY116_CB584596691_.jpg";
import b1 from "./Boat_Desktop_Qc_1x._SY116_CB577919562_.jpg";
import b2 from "./Boult_Desktop_Qc_1x._SY116_CB577919562_.jpg";
import b3 from "./Noise_Desktop_Qc_1x._SY116_CB577919562_.jpg";
import b4 from "./Zebronics_Desktop_Qc_1x._SY116_CB577919562_.jpg";
import m1 from "./MF-2-186-116._SY116_CB636110853_.jpg";
import m2 from "./MF-3-186-116._SY116_CB636110853_ (1).jpg";
import m3 from "./MF-1-186-116._SY116_CB636110853_.jpg";
import m4 from "./MF-4-186-116._SY116_CB636110853_.jpg";
import a1 from "./Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg";
import a2 from "./Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg";
import a3 from "./Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg";
import a4 from "./186x116---wm._SY116_CB667322346_.jpg"
import {  useNavigate } from "react-router-dom";
import { Mediaquery } from "./mediaQuery";

export function App() {
    const [modalopen, setmodalopen] = useState(false);
    const [modalopen2, setmodalopen2] = useState(false);

    const navigate = useNavigate();
    function Cartclick() {
        navigate('/cart')
    }
    function Sign() {
        navigate('/signin')
    }
   
    Modal.setAppElement('#root');
    return (
        <div style={{ height: '120pc' }} id="top" className="main">
            <div id="main2layer">
            <div id="navbar" style={{ backgroundColor: '#131921', position: 'sticky', bottom: '0', top: '0', zIndex: '100', }} className="navbar d-flex justify-content-evenly">
                <div className="navlogo">
                    <img src={amazonlogo} alt="" />
                </div>
                <div style={{ cursor: 'pointer' }} className="navloction text-white mt-2">
                    <span id="location"> Delivering to Lucknow 226013</span> <br />
                    <p><LocationOn className="text-white" />Update Location</p>
                </div>

                <div  className="navsearch d-flex border border-dark rounded">
                    <select style={{ backgroundColor: '#E6E6E6', borderRadius: '0', width: '55px' }} className="form-control ">
                        <option value="All">All</option>
                        <option value="">Alexa Skills</option>
                        <option value="">Amazon Devices</option>
                        <option value="">Amazon Fashion</option>
                        <option value="">Amazon Pharmacy</option>
                    </select>
                    <input style={{ width: '550px', borderRadius: '0' }} placeholder="Search Amazon.in" className="form-control" type="search" name="search" id="search" />
                    <div style={{ background: '#F3A847' }}>
                        <Search className="m-2" />
                    </div>
                </div>
                <div className="navlanguage">
                    <select className="p-1" style={{ background: 'none', border: 'none', color: 'white' }}>
                        <option className="fi fi-in bg-black" value="EN">EN</option>
                        <option className="bg-black" value="US">US</option>
                    </select>
                </div>
                <div onMouseEnter={() => { setmodalopen(true) }} className="login text-white user-select-all">
                    Hello, sign in <br />
                    <span>Accounts & Lists</span>
                </div>
                <Modal isOpen={modalopen} style={{ content: { width: '22%', height: '30%', marginLeft: '74%', marginTop: '2.5%' } }}>
                    <div>
                        <i style={{ cursor: 'pointer' }} onClick={() => setmodalopen(false)}><BackspaceRounded /></i>
                        <div className="container p-2">
                            <button style={{ backgroundColor: '#FFD814' }} onClick={Sign} className="btn w-100">Sign in</button>
                            <p className="fw-lighter">new customer?<span style={{color:'#009DD1',cursor:'pointer'}} onClick={()=>navigate('/newAccount')} >Start here</span></p>
                        </div>
                    </div>
                </Modal>

                <div className="Order text-white">
                    Returns <br />
                    <span>& Orders</span>
                </div>
                <div style={{ cursor: 'pointer' }} onClick={Cartclick} className="cart text-white">
                    <ShoppingCart className="text-white" />Cart
                </div>
            </div>
            <div id="section2nav" className="section2nav">
                <div className="menulist">
                    <ul style={{ listStyle: 'none' }} className="d-flex  justify-content-around text-white">
                        <li>Amazon miniTV</li>
                        <li>Sell</li>
                        <li>Best Seller</li>
                        <li>Mobiles</li>
                        <li>Today's Deals</li>
                        <li>Electronics</li>
                        <li>Customer Service</li>
                        <li>New Releases</li>
                        <li onMouseEnter={() => { setmodalopen2(true) }}>Prime</li>
                        <Modal className="d-flex justify-content-center bg-light p-1" isOpen={modalopen2} style={{ content: { height: '40px', width: '200px', marginLeft: '60%', marginTop: '8.8%' } }}>
                            <div onMouseLeave={() => { setmodalopen2(false) }}>
                                <a href="www.https://">prime flayout</a>
                            </div>
                        </Modal>
                        <li>
                            <div className="d-flex justify-content-flex-end">
                                <p style={{textIndent:'70px'}}>New Launches from Mobiles,Electronics & more | Shop now</p>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
            <div id="carousel" className="carousel d-block">
                <Carousel className="d-block" style={{ zIndex: '-1' }}>
                    <Carousel.Item>
                        <img className="d-block w-100" src={img1} alt="First slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={img2} alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={img3} alt="Third slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={img4} alt="Fourth slide" />
                    </Carousel.Item>
                </Carousel>
                <div id="card" className="card p-1 d-flex justify-content-between">
                    <Card className="d-block p-1" style={{ position: 'absolute', zIndex: '1', bottom: '-250px', left: '20px', height: '460px', width: '310px' }}>
                        <p style={{ fontSize: '20px' }} className="fw-bold text-align-center mt-2">Revamp your home in style</p>
                        <div style={{ flexFlow: 'wrap' }} className="img d-flex">
                            <div className="I1 m-1">
                                <img src={f1} width={'140px'} height={'116px'} alt="f1" /> <br />
                                <p style={{ fontSize: 'small' }}>Cushion covers, <br /> bedsheets & more </p>
                            </div>
                            <div className="I1 m-1">
                                <img src={f2} width={'140px'} height={'116px'} alt="f1" /> <br />
                                <p style={{ fontSize: 'small' }}>Figurines, vases and <br /> more </p>
                            </div>
                            <div className="I1 m-1">
                                <img src={f3} width={'140px'} height={'116px'} alt="f1" /> <br />
                                <p style={{ fontSize: 'small' }}>Lighing solutions </p>
                            </div>
                            <div className="I1 m-1">
                                <img src={f4} width={'140px'} height={'116px'} alt="f1" /> <br />
                                <p style={{ fontSize: 'small' }}>Home storage</p>
                            </div>
                            <div className="explore p-1 ">
                                <a style={{ textDecoration: 'none' }} href="https://">Explore all</a>
                            </div>
                        </div>
                    </Card>
                    <Card className="d-block p-1 " style={{ position: 'absolute', zIndex: '1', bottom: '-250px', left: '345px', height: '460px', width: '310px' }}>
                        <p style={{ fontSize: '20px' }} className="fw-bold text-align-center mt-2">Bestsellers | Up to 60% off</p>
                        <div style={{ flexFlow: 'wrap' }} className="img d-flex">
                            <div className="I1 m-1">
                                <img src={a1} width={'140px'} height={'116px'} alt="f1" /> <br />
                                <p style={{ fontSize: 'small' }}>Cushion covers, <br /> bedsheets & more </p>
                            </div>
                            <div className="I1 m-1">
                                <img src={a2} width={'140px'} height={'116px'} alt="f1" /> <br />
                                <p style={{ fontSize: 'small' }}>Figurines, vases and <br /> more </p>
                            </div>
                            <div className="I1 m-1">
                                <img src={a3} width={'140px'} height={'116px'} alt="f1" /> <br />
                                <p style={{ fontSize: 'small' }}>Lighing solutions </p>
                            </div>
                            <div className="I1 m-1">
                                <img src={a4} width={'140px'} height={'116px'} alt="f1" /> <br />
                                <p style={{ fontSize: 'small' }}>Home storage</p>
                            </div>
                            <div className="explore p-1 ">
                                <a style={{ textDecoration: 'none' }} href="https://">See all offers</a>
                            </div>
                        </div>
                    </Card>
                    <Card className="d-block p-1 " style={{ position: 'absolute', zIndex: '1', bottom: '-250px', left: '670px', height: '460px', width: '310px' }}>
                        <p style={{ fontSize: '20px' }} className="fw-bold text-align-center mt-2">Up to 70% off | Headphones</p>
                        <div style={{ flexFlow: 'wrap' }} className="img d-flex">
                            <div className="I1 m-1">
                                <img src={b1} width={'140px'} height={'116px'} alt="f1" /> <br />
                                <p style={{ fontSize: 'small' }}>Cushion covers, <br /> bedsheets & more </p>
                            </div>
                            <div className="I1 m-1">
                                <img src={b2} width={'140px'} height={'116px'} alt="f1" /> <br />
                                <p style={{ fontSize: 'small' }}>Figurines, vases and <br /> more </p>
                            </div>
                            <div className="I1 m-1">
                                <img src={b3} width={'140px'} height={'116px'} alt="f1" /> <br />
                                <p style={{ fontSize: 'small' }}>Lighing solutions </p>
                            </div>
                            <div className="I1 m-1">
                                <img src={b4} width={'140px'} height={'116px'} alt="f1" /> <br />
                                <p style={{ fontSize: 'small' }}>Home storage</p>
                            </div>
                            <div className="explore p-1 ">
                                <a style={{ textDecoration: 'none' }} href="https://">See all offers</a>
                            </div>
                        </div>
                    </Card>
                    <Card className="d-block p-1 " style={{ position: 'absolute', zIndex: '1', bottom: '-250px', height: '460px', left: '1000px', width: '310px' }}>
                        <p style={{ fontSize: '20px' }} className="fw-bold text-align-center mt-2">Up to 60% off | Styles for men</p>
                        <div style={{ flexFlow: 'wrap' }} className="img d-flex">
                            <div className="I1 m-1">
                                <img src={m1} width={'140px'} height={'116px'} alt="f1" /> <br />
                                <p style={{ fontSize: 'small' }}>Cushion covers, <br /> bedsheets & more </p>
                            </div>
                            <div className="I1 m-1">
                                <img src={m2} width={'140px'} height={'116px'} alt="f1" /> <br />
                                <p style={{ fontSize: 'small' }}>Figurines, vases and <br /> more </p>
                            </div>
                            <div className="I1 m-1">
                                <img src={m3} width={'140px'} height={'116px'} alt="f1" /> <br />
                                <p style={{ fontSize: 'small' }}>Lighing solutions </p>
                            </div>
                            <div className="I1 m-1">
                                <img src={m4} width={'140px'} height={'116px'} alt="f1" /> <br />
                                <p style={{ fontSize: 'small' }}>Home storage</p>
                            </div>
                            <div className="explore p-1 ">
                                <a style={{ textDecoration: 'none' }} href="https://">End of season sale</a>
                            </div>
                        </div>
                    </Card>
                </div>

                <div style={{ position: 'relative', top: '270px' }} className=" p-1 d-flex justify-content-between">
                    <Card className="d-block p-1" style={{ position: 'relative', zIndex: '1', left: '20px', height: '460px', width: '310px' }}>
                        <p style={{ fontSize: '20px' }} className="fw-bold text-align-center mt-2">Revamp your home in style</p>
                        <div style={{ flexFlow: 'wrap' }} className="img d-flex">
                            <div className="I1 m-1">
                                <img src={f1} width={'140px'} height={'116px'} alt="f1" /> <br />
                                <p style={{ fontSize: 'small' }}>Cushion covers, <br /> bedsheets & more </p>
                            </div>
                            <div className="I1 m-1">
                                <img src={f2} width={'140px'} height={'116px'} alt="f1" /> <br />
                                <p style={{ fontSize: 'small' }}>Figurines, vases and <br /> more </p>
                            </div>
                            <div className="I1 m-1">
                                <img src={f3} width={'140px'} height={'116px'} alt="f1" /> <br />
                                <p style={{ fontSize: 'small' }}>Lighing solutions </p>
                            </div>
                            <div className="I1 m-1">
                                <img src={f4} width={'140px'} height={'116px'} alt="f1" /> <br />
                                <p style={{ fontSize: 'small' }}>Home storage</p>
                            </div>
                            <div className="explore p-1 ">
                                <a style={{ textDecoration: 'none' }} href="https://">Explore all</a>
                            </div>
                        </div>
                    </Card>
                    <Card className="d-block p-1 " style={{ position: '', zIndex: '1', bottom: '-230px', left: '345px', height: '460px', width: '310px' }}>
                        <p style={{ fontSize: '20px' }} className="fw-bold text-align-center mt-2">Bestsellers | Up to 60% off</p>
                        <div style={{ flexFlow: 'wrap' }} className="img d-flex">
                            <div className="I1 m-1">
                                <img src={a1} width={'140px'} height={'116px'} alt="f1" /> <br />
                                <p style={{ fontSize: 'small' }}>Cushion covers, <br /> bedsheets & more </p>
                            </div>
                            <div className="I1 m-1">
                                <img src={a2} width={'140px'} height={'116px'} alt="f1" /> <br />
                                <p style={{ fontSize: 'small' }}>Figurines, vases and <br /> more </p>
                            </div>
                            <div className="I1 m-1">
                                <img src={a3} width={'140px'} height={'116px'} alt="f1" /> <br />
                                <p style={{ fontSize: 'small' }}>Lighing solutions </p>
                            </div>
                            <div className="I1 m-1">
                                <img src={a4} width={'140px'} height={'116px'} alt="f1" /> <br />
                                <p style={{ fontSize: 'small' }}>Home storage</p>
                            </div>
                            <div className="explore p-1 ">
                                <a style={{ textDecoration: 'none' }} href="https://">See all offers</a>
                            </div>
                        </div>
                    </Card>
                    <Card className="d-block p-1 " style={{ position: 'relative', zIndex: '1', left: '-18px', height: '460px', width: '310px' }}>
                        <p style={{ fontSize: '20px' }} className="fw-bold text-align-center mt-2">Up to 70% off | Headphones</p>
                        <div style={{ flexFlow: 'wrap' }} className="img d-flex">
                            <div className="I1 m-1">
                                <img src={b1} width={'140px'} height={'116px'} alt="f1" /> <br />
                                <p style={{ fontSize: 'small' }}>Cushion covers, <br /> bedsheets & more </p>
                            </div>
                            <div className="I1 m-1">
                                <img src={b2} width={'140px'} height={'116px'} alt="f1" /> <br />
                                <p style={{ fontSize: 'small' }}>Figurines, vases and <br /> more </p>
                            </div>
                            <div className="I1 m-1">
                                <img src={b3} width={'140px'} height={'116px'} alt="f1" /> <br />
                                <p style={{ fontSize: 'small' }}>Lighing solutions </p>
                            </div>
                            <div className="I1 m-1">
                                <img src={b4} width={'140px'} height={'116px'} alt="f1" /> <br />
                                <p style={{ fontSize: 'small' }}>Home storage</p>
                            </div>
                            <div className="explore p-1 ">
                                <a style={{ textDecoration: 'none' }} href="https://">See all offers</a>
                            </div>
                        </div>
                    </Card>
                    <Card className="d-block p-1 " style={{ position: 'relative', zIndex: '1', height: '460px', left: '-24px', width: '310px' }}>
                        <p style={{ fontSize: '20px' }} className="fw-bold text-align-center mt-2">Up to 60% off | Styles for men</p>
                        <div style={{ flexFlow: 'wrap' }} className="img d-flex">
                            <div className="I1 m-1">
                                <img src={m1} width={'140px'} height={'116px'} alt="f1" /> <br />
                                <p style={{ fontSize: 'small' }}>Cushion covers, <br /> bedsheets & more </p>
                            </div>
                            <div className="I1 m-1">
                                <img src={m2} width={'140px'} height={'116px'} alt="f1" /> <br />
                                <p style={{ fontSize: 'small' }}>Figurines, vases and <br /> more </p>
                            </div>
                            <div className="I1 m-1">
                                <img src={m3} width={'140px'} height={'116px'} alt="f1" /> <br />
                                <p style={{ fontSize: 'small' }}>Lighing solutions </p>
                            </div>
                            <div className="I1 m-1">
                                <img src={m4} width={'140px'} height={'116px'} alt="f1" /> <br />
                                <p style={{ fontSize: 'small' }}>Home storage</p>
                            </div>
                            <div className="explore p-1 ">
                                <a style={{ textDecoration: 'none' }} href="https://">End of season sale</a>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
            <div style={{ position: 'relative', top: '280px', height: '200px', border: '1px inset black', flexDirection: 'column' }} className="p-3 m-2 bg-light text-dark d-flex justify-content-center align-items-center">
                See personalized recommendations
                <button onClick={Sign} className="btn border border-warning w-25 d-flex justify-content-center align-items-center fw-bold" style={{ backgroundColor: '#FFCF56', height: '30px' }}>Sign in</button>
                <span>New customer?<span style={{color:'#009DD1',cursor:'pointer'}} onClick={()=>navigate('/newAccount')}>Start here.</span></span>
            </div>
            <div id="btnhover" className="bg-dark p-2 "  style={{ position: 'relative', top: '300px' ,borderRadius:'none',border:'1px solid white'}} >
            <a style={{ textDecoration: 'none' }} className="text-white d-flex justify-content-center bg-dark w-100" href="#top">Back to top</a>
            </div>
            <div id="footer" style={{ position: 'relative', top: '300px' }} className="container-fluid bg-dark p-5 d-flex justify-content-around">
                <ul>
                    <li className="fw-bold text-light">Get to Know us</li>
                    <li className="text-white">About Us</li>
                    <li className="text-white">Careers</li>
                    <li className="text-white">Press Releases</li>
                    <li className="text-white">Amazon Science</li>
                </ul>
                 <ul>
                    <li className="fw-bold text-light">Connect with Us</li>
                    <li className="text-white">Facebook</li>
                    <li className="text-white">Twitter</li>
                    <li className="text-white">Instagram</li>
                </ul>
                <ul>
                    <li className="fw-bold text-light">Make Money with Us</li>
                    <li className="text-white">Sell on Amazon</li>
                    <li className="text-white">Sell under Amazon Accelerator</li>
                    <li className="text-white">Protect and Build Your Brand</li>
                    <li className="text-white">Amazon Global Selling</li>
                    <li className="text-white">Become an Affiliate</li>
                    <li className="text-white">Fulfilment by Amazon</li>
                    <li className="text-white">Advertise Your Products</li>
                    <li className="text-white">Amazon Pay on Merchants</li>
                </ul>
                <ul>
                    <li className="fw-bold text-light">Let Us Help You</li>
                    <li className="text-white">COVID-19 and Amazon</li>
                    <li className="text-white">Your Account</li>
                    <li className="text-white">Returns Centre</li>
                    <li className="text-white">100% Purchase Protection</li>
                    <li className="text-white">Amazon App Download</li>
                    <li className="text-white">Help</li>
                </ul>
            </div>
            </div>
            <div style={{overflow:'hidden'}} id="mq">
                <Mediaquery/>
            </div>
        </div>
    )
}