import {React} from "react";
import { CaretDown, Cart, Person, ThreeDotsVertical } from "react-bootstrap-icons";
import { CurrencyRupee, Search } from "@mui/icons-material";
import './amazon.css';
import amazonlogo from "./amazon clonelogo.png";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, Carousel, ModalHeader } from "react-bootstrap";
import amazonpay from "./amzaonImg/apay.webp";
import Bill from "./amzaonImg/bill.webp";
import Recharge from "./amzaonImg/recharge.webp";
import Rewards from "./amzaonImg/reward.webp";
import A from "./amzaonImg/a1.jpg";
import B from "./amzaonImg/a2.jpg";
import C from "./amzaonImg/a3.jpg";
import D from "./amzaonImg/a4.jpg";
import E from "./amzaonImg/a5.jpg";
import F from "./amzaonImg/a6.jpg";
import m1 from "./amzaonImg/m1.jpg";
import m2 from "./amzaonImg/m2.jpg";
import m3 from "./amzaonImg/m3.jpg";
import m4 from "./amzaonImg/m4.jpg";
import P from "./amzaonImg/p1.jpeg";
import Add from "./amzaonImg/0dcea1f5-0276-499d-8207-57dba56e6d08.jpg";
import mobile from "./AmazonIcons/110goaYwsDL._SX90_SY90_.jpg";
import fashion from "./AmazonIcons/11luqHr9bsL._SX90_SY90_.jpg";
import Home from "./AmazonIcons/31ICLWjUdHL._SX90_SY90_.jpg";
import Electronics from "./AmazonIcons/11n0LdtsN7L._SX90_SY90_.jpg";
import tv from "./AmazonIcons/11S4r-bgNEL._SX90_SY90_.jpg";
import deals from "./AmazonIcons/312t+JcSoDL._SX90_SY90_.jpg";
import beauty from "./AmazonIcons/21xXjwTSVIL._SX90_SY90_.jpg";
import grocery from "./AmazonIcons/11gXebGhu6L._SX90_SY90_.jpg";
import Toys from "./AmazonIcons/11V7tDHLoyL._SX90_SY90_.jpg";
import appliances from "./AmazonIcons/118lbTsRMWL._SX90_SY90_.jpg";
import p from "./amzaonImg/p.jpeg";
import p2 from "./amzaonImg/p2.jpg";
import p3 from "./amzaonImg/p3.jpg";
import p6 from "./amzaonImg/p6.jpg";
import img1 from './PC_Hero_1_3000._CB582457311_.jpg';
import img2 from './22._CB582195998_.jpg';
import img3 from "./D103625178_DesktopTallHero_3000x1200._CB574597993_.jpg";
import img4 from "./3000._CB584596853_.jpg";
import {useState} from "react";
import Modal from "react-modal";
export function Mediaquery() {
    const navigate = useNavigate();
    const [modalopened,setmodalopened] = useState(false);
    const Setting = {
        dots: false,
        Infinity: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3
    };
    const Setting2 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2
    };
    const Setting3 = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToScroll: 1
    };

    Modal.setAppElement('#root');

    return (
        <div id="top">
            <div id="mqnav">
                <div className="upper p-2  d-flex justify-content-between">
                    <div>
                        <ThreeDotsVertical onClick={setmodalopened(true)} className="text-light" /><img src={amazonlogo} alt="amazon logo" />
                    </div>
                   <Modal isOpen={modalopened}>
                    <div>
                        hello
                    </div>
                   </Modal>
                    <div style={{ marginRight: '5px', overflow: 'hidden' }} className="text-light mt-2 d-flex">
                        <h6 onClick={() => navigate('/signin')} style={{ marginRight: '10px', overflow: 'hidden', cursor: 'pointer' }}>Sign in <Person className="mt-1 h1 " /></h6>
                        <Cart onClick={() => navigate('/cart')} style={{ cursor: 'pointer' }} className="h1 mt-1" />
                    </div>
                </div>
                <div style={{ position: 'relative', bottom: '15px' }} className="search d-flex">
                    <input type="search" style={{ borderRadius: '0' }} placeholder="Search Amazon.in" className="form-control" name="search" id="search" />
                    <div style={{ background: '#F3A847' }}>
                        <Search className="m-2" />
                    </div>
                </div>
                <div style={{ backgroundColor: '#131921' }} className="list ">
                    <span className="text-white">Shop By</span> <br />
                    <ul style={{ marginRight: '40px', position: 'relative', right: '20px', fontSize: 'medium', cursor: 'pointer' }} className="text-white d-flex justify-content-between align-items-center">
                        <li>Category</li>
                        <li>Your Lists</li>
                        <li>Deals</li>
                        <li>Sell</li>
                    </ul>
                </div>
            </div>
            <br />
            <div style={{ marginTop: '137px', fontSize: 'small', backgroundColor: '#232F3E', border: '1px inset white' }} className="location text-light">
                <p className="d-flex text-center justify-content-center mt-2">Delivering to Lucknow 226013 - Update location <CaretDown /> </p>
            </div>
            <div>
                <div id="carousel" style={{ height: '80px', overflow: 'hidden' }} className="carousel bg-white p-2">
                    <Slider className="slider" {...Setting} >
                        <div className="card-1">
                            <img style={{ height: '45px', width: '45px' }} src={mobile} alt="mobiles" />
                            <span style={{ fontSize: '8pt', marginBottom: '7px', fontWeight: '400', textAlign: 'center' }}>Mobiles</span>
                        </div>
                        <div className="card-1">
                            <img style={{ height: '45px', width: '45px' }} src={fashion} alt="Fashions" />
                            <span style={{ fontSize: '8pt', marginBottom: '7px', fontWeight: '400', textAlign: 'center' }}>Fashion</span>
                        </div>

                        <div className="card-1">
                            <img style={{ height: '45px', width: '45px' }} src={Electronics} alt="electronic" />
                            <span style={{ fontSize: '8pt', marginBottom: '7px', fontWeight: '400', textAlign: 'center' }}>Electronics</span>
                        </div>

                        <div className="card-1">
                            <img style={{ height: '45px', width: '45px' }} src={Home} alt="home" />
                            <span style={{ fontSize: '8pt', marginBottom: '7px', fontWeight: '400', textAlign: 'center', marginLeft: '10px' }}>Home</span>
                        </div>

                        <div className="card-1">
                            <img style={{ height: '45px', width: '45px' }} src={tv} alt="miniTv" />
                            <span style={{ fontSize: '8pt', marginBottom: '7px', fontWeight: '400', textAlign: 'center', marginLeft: '8px' }}>miniTv</span>
                        </div>

                        <div className="card-1">
                            <img style={{ height: '45px', width: '45px' }} src={deals} alt="Deals" />
                            <span style={{ fontSize: '8pt', marginBottom: '7px', fontWeight: '400', textAlign: 'center', marginLeft: '6px' }}>Deals</span>
                        </div>

                        <div className="card-1">
                            <img style={{ height: '45px', width: '45px' }} src={beauty} alt="Beauty" />
                            <span style={{ fontSize: '8pt', marginBottom: '7px', fontWeight: '400', textAlign: 'center' }}>Beauty</span>
                        </div>

                        <div className="card-1">
                            <img style={{ height: '45px', width: '45px' }} src={grocery} alt="Grocery" />
                            <span style={{ fontSize: '8pt', marginBottom: '7px', fontWeight: '400', textAlign: 'center' }}>Grocery</span>
                        </div>

                        <div className="card-1">
                            <img style={{ height: '45px', width: '45px' }} src={Toys} alt="toy" />
                            <span style={{ fontSize: '8pt', marginBottom: '7px', fontWeight: '400', textAlign: 'center', marginLeft: '10px' }}>Toys</span>
                        </div>

                        <div className="card-1">
                            <img style={{ height: '45px', width: '45px' }} src={appliances} alt="Appliances" />
                            <span style={{ fontSize: '8pt', marginBottom: '7px', fontWeight: '400', textAlign: 'center' }}>Appliances</span>
                        </div>
                    </Slider>
                </div>
            </div>
            <div className="carousel">
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
            </div>
            <div className="slider-2">
                <Slider {...Setting2}>
                    <Card >
                        <div className="d-flex p-1" style={{ height: '145px', width: '120px', flexWrap: 'wrap', overflow: 'hidden' }}>
                            <div className="img1">
                                <img height={'44px'} title="amazon pay" style={{ cursor: 'pointer' }} src={amazonpay} alt="amazon pay" />
                                <i style={{ fontSize: '6.5pt', letterSpacing: '0px' }}>AmazonPay</i>
                            </div>
                            <div className="img1">
                                <img height={'44px'} title="mobile recharge" style={{ cursor: 'pointer' }} src={Recharge} alt="recharge" />
                                <i style={{ fontSize: '6.5pt', letterSpacing: '0px', marginLeft: '5px' }}>Recharge</i>
                            </div>
                            <div className="img1">
                                <img height={'44px'} title="reward" style={{ cursor: 'pointer' }} src={Rewards} alt="reward" />
                                <i style={{ fontSize: '6.5pt', letterSpacing: '0px' }}>Rewards</i>

                            </div>
                            <div className="img1">
                                <img height={'44px'} title="Bill" style={{ cursor: 'pointer' }} src={Bill} alt="Bill" />
                                <i style={{ fontSize: '6.5pt', letterSpacing: '0px', marginLeft: '5px' }}>PayBills</i>

                            </div>
                        </div>
                    </Card>
                    <Card >
                        <div style={{ height: '145px', backgroundSize: 'cover', backgroundImage: `url(${B})` }}>
                        </div>
                    </Card>
                    <Card >
                        <div style={{ height: '145px', backgroundSize: 'cover', backgroundImage: `url(${A})` }}>
                        </div>
                    </Card>
                    <Card >
                        <div style={{ height: '145px', backgroundSize: 'cover', backgroundImage: `url(${C})` }}>

                        </div>
                    </Card>
                    <Card >
                        <div style={{ height: '145px', backgroundSize: 'cover', backgrundImage: `url(${D})` }}>

                        </div>
                    </Card>
                    <Card >
                        <div style={{ height: '145px', backgroundSize: 'cover', backgroundImage: `url(${E})` }}>

                        </div>
                    </Card>
                    <Card >
                        <div style={{ height: '145px', backgroundSize: 'cover', backgrundImage: `url(${F})` }}>

                        </div>
                    </Card>
                </Slider>
            </div>
            <div className="p w-100">
                <img src={P} style={{ cursor: 'pointer' }} className="w-100" alt="payment" />
            </div>
            <div style={{ height: '360px', backgroundImage: `url(${Add})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className="advertise p-1">
            </div>
            <div className="slider-3">
                <div style={{ height: '340px', cursor: 'pointer', overflow: 'hidden', backgroundColor: '#FFFFFF' }} className="main p-1">
                    <h6 className="p-1">Starting ₹199 | Deals on fashion, beauty, kitchen & more
                    </h6>
                    <Slider {...Setting3}>
                        <div>
                            <div className="product-1 d-flex justify-content-center">
                                <img src={p} alt="product" />
                            </div>
                            <p className="p-1">
                                <span className="p-1" style={{ backgroundColor: '#CC0C39', color: '#FFFF' }}><CurrencyRupee />478 and under</span> <span style={{ color: '#CC0C39' }}>Limited the deal</span> <br />
                                Best offer on Ustraa Men's Care Product
                            </p>
                        </div>
                        <div>
                            <div className="product-2 d-flex justify-content-center">
                                <img src={p2} alt="product" />

                            </div>
                            <p className="p-1">
                                <span className="p-1" style={{ backgroundColor: '#CC0C39', color: '#FFFF' }}><CurrencyRupee />479 and under</span> <span style={{ color: '#CC0C39' }}>Limited the deal</span> <br />
                                Best Deals on Analogue Watches
                            </p>
                        </div>
                        <div>
                            <div className="product-3 d-flex justify-content-center">
                                <img src={p3} alt="product" />
                            </div>
                            <p className="p-1">
                                <span className="p-1" style={{ backgroundColor: '#CC0C39', color: '#FFFF' }}><CurrencyRupee />450 and under</span> <span style={{ color: '#CC0C39' }}>Limited the deal</span> <br />
                                Discount on JOY Beauty Product
                            </p>
                        </div>
                        <div>
                            <div className="product-4 d-flex justify-content-center">
                                <img src={p6} alt="product" />
                            </div>
                            <p className="p-1">
                                <span className="p-1" style={{ backgroundColor: '#CC0C39', color: '#FFFF' }}><CurrencyRupee />459 and under</span> <span style={{ color: '#CC0C39' }}>Limited the deal</span> <br />
                                Best Deals on Acnos Watches
                            </p>
                        </div>
                    </Slider>
                </div>
            </div>
            <div className="bg-white">
                <p className="fw-bold m-1">Products you may like</p>
                <div className="d-flex flex-wrap w-100" style={{ overflow: 'hidden'}}>
                    <Card style={{overflow:'hidden'}}>
                        <img src={m1} alt="m" />
                        <p style={{ fontSize: '8pt', fontWeight: '400', textAlign: 'center', cursor: 'pointer' }}>MANGALAM CamPure... <br />
                            <span ><sup><CurrencyRupee style={{ fontSize: '6pt' }} /></sup>366 <span style={{ textDecoration: 'line-through' }}>399</span> <span className="text-danger">-8%</span></span>
                        </p>
                    </Card>

                    <Card>
                        <img style={{width:'100%'}} src={m2} alt="m" />
                        <p style={{ fontSize: '8pt', fontWeight: '400', textAlign: 'center', cursor: 'pointer' }}>Nat Habit-Freash ready... <br />
                            <span ><sup><CurrencyRupee style={{ fontSize: '6pt' }} /></sup>309 <span style={{ textDecoration: 'line-through' }}>462</span> <span className="text-danger">-33%</span></span>
                        </p>
                    </Card>

                    <Card>
                        <img src={m3} alt="m" />
                        <p style={{ fontSize: '8pt', fontWeight: '400', textAlign: 'center', cursor: 'pointer' }}>RIXTEC ice roller for... <br />
                            <span ><sup><CurrencyRupee style={{ fontSize: '6pt' }} /></sup>49 <span style={{ textDecoration: 'line-through' }}>199</span> <span className="text-danger">-75%</span></span>
                        </p>
                    </Card>

                    <Card>
                        <img src={m4} alt="m" />
                        <p style={{ fontSize: '8pt', fontWeight: '400', textAlign: 'center', cursor: 'pointer' }}>GIZGA Club-laptop Neo... <br />
                            <span ><sup><CurrencyRupee style={{ fontSize: '6pt' }} /></sup>199 <span style={{ textDecoration: 'line-through' }}>499</span> <span className="text-danger">-60%</span></span>
                        </p>
                    </Card>
                </div>
                <s onClick={() => prompt('Coming Soon')} style={{ cursor: 'pointer', color: '#07BDBB', textDecoration: 'none' }}>See all offer</s>
            </div>
            <div id="btnhover" className="bg-dark p-2 " style={{ borderRadius: 'none', border: '1px solid white' }} >
                <a style={{ textDecoration: 'none' }} className="text-white d-flex justify-content-center bg-dark w-100" href="#top">Back to top</a>
            </div>
            <div style={{ backgroundColor: '#212529',overflow:'hidden' }} className="footer text-white">

            <ul style={{ cursor: 'pointer' ,fontSize:'small'}}>
                <li>
                    Your Amazon.in
                </li>
                <li>
                    Amazon Pay
                </li>
                <li>
                    Your Lists
                </li>
                <li>
                    Sell
                </li>
                <li>
                    Your Recently Viewed Items
                </li>
            </ul>
        </div>
        </div>
    )
}