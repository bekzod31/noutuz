import React from 'react';
import "./SideContentMenu.css";
import Accordion from 'react-bootstrap/Accordion';
import { Button, Card } from 'react-bootstrap';
import ContentCarousel from './ContentCarousel';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './Services/About';
import Contact from './Services/Contact';
import Delivery from './Services/Delivery';
import Guarantee from './Services/Guarantee';
import AboutPayment from './Services/AboutPayment';
import ContentRoute from './Route/ContentRoute';

class SideContentMenu extends React.Component {



    render() {
        return (
            <div>
                <div className="container mt-2">
                    <div className="row">
                        <div className="col-lg-3">
                            <div>
                                <div className="btnbars px-2 py-1"><span>Каталог</span> <i className="fa fa-bars" style={{ fontSize: 18 }} aria-hidden="true"></i></div>
                                <div className="sidemenunav">
                                    <Accordion >
                                        <div className="accor">
                                            <Card.Header className="py-1 my-0 as px-1" >
                                                <span className="py-1 menuname"><i class="fas fa-laptop mr-2"></i><span>Ноутбуки</span></span>
                                                <Accordion.Toggle as={Button} variant="link" eventKey="0" className="py-1 mr-0 pr-3">
                                                    <i class="fas fa-angle-down" style={{ fontSize: 26, color: '#1A1160' }}></i>
                                                </Accordion.Toggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="0">
                                                <Card.Body className="py-1 menuback">HP</Card.Body>
                                            </Accordion.Collapse>
                                            <Accordion.Collapse eventKey="0">
                                                <Card.Body className="py-1 menuback">ACER</Card.Body>
                                            </Accordion.Collapse>
                                            <Accordion.Collapse eventKey="0">
                                                <Card.Body className="py-1 menuback">DELL</Card.Body>
                                            </Accordion.Collapse>
                                            <Accordion.Collapse eventKey="0">
                                                <Card.Body className="py-1 menuback">MAC</Card.Body>
                                            </Accordion.Collapse>
                                            <Accordion.Collapse eventKey="0">
                                                <Card.Body className="py-1 menuback">SONY</Card.Body>
                                            </Accordion.Collapse>
                                            <Accordion.Collapse eventKey="0">
                                                <Card.Body className="py-1 menuback">DELL</Card.Body>
                                            </Accordion.Collapse>
                                        </div>
                                        <div className="accor">
                                            <Card.Header className="py-1 my-0 as px-1">
                                                <span className="py-1 menuname"><i class="fas fa-tv mr-2"></i><span>Компьютеры</span></span>
                                                <Accordion.Toggle as={Button} variant="link" eventKey="1" className="py-1 mr-0 pr-3">
                                                    <i class="fas fa-angle-down" style={{ fontSize: 26, color: '#1A1160' }}></i>
                                                </Accordion.Toggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="1">
                                                <Card.Body className="py-1">Hello! I'm the body</Card.Body>
                                            </Accordion.Collapse>
                                            <Accordion.Collapse eventKey="1">
                                                <Card.Body className="py-1">Hello! I'm the body</Card.Body>
                                            </Accordion.Collapse>
                                            <Accordion.Collapse eventKey="1">
                                                <Card.Body className="py-1">Hello! I'm the body</Card.Body>
                                            </Accordion.Collapse>
                                        </div>
                                        <div className="accor">
                                            <Card.Header className="py-1 my-0 as px-1">
                                                <span className="py-1 menuname"><i class="fas fa-mobile-alt mr-2"></i><span>Телефоны</span></span>
                                                <Accordion.Toggle as={Button} variant="link" eventKey="2" className="py-1 mr-0 pr-3">
                                                    <i class="fas fa-angle-down" style={{ fontSize: 26, color: '#1A1160' }}></i>
                                                </Accordion.Toggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="2">
                                                <Card.Body className="py-1 menuback">Samsung</Card.Body>
                                            </Accordion.Collapse>
                                            <Accordion.Collapse eventKey="2">
                                                <Card.Body className="py-1 menuback">IPhone</Card.Body>
                                            </Accordion.Collapse>
                                            <Accordion.Collapse eventKey="2">
                                                <Card.Body className="py-1 menuback">Xiomi</Card.Body>
                                            </Accordion.Collapse>
                                            <Accordion.Collapse eventKey="2">
                                                <Card.Body className="py-1 menuback">Sony</Card.Body>
                                            </Accordion.Collapse>
                                            <Accordion.Collapse eventKey="2">
                                                <Card.Body className="py-1 menuback">Nokia</Card.Body>
                                            </Accordion.Collapse>
                                            <Accordion.Collapse eventKey="2">
                                                <Card.Body className="py-1 menuback">LG</Card.Body>
                                            </Accordion.Collapse>
                                            <Accordion.Collapse eventKey="2">
                                                <Card.Body className="py-1 menuback">One Plus</Card.Body>
                                            </Accordion.Collapse>
                                        </div>
                                        <div className="accor">
                                            <Card.Header className="py-1 my-0 as px-1">
                                                <span className="py-1 menuname"><i class="fas fa-tv mr-2"></i><span>Телевизоры</span></span>
                                                <Accordion.Toggle as={Button} variant="link" eventKey="3" className="py-1 mr-0 pr-3">
                                                    <i class="fas fa-angle-down" style={{ fontSize: 26, color: '#1A1160' }}></i>
                                                </Accordion.Toggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="3">
                                                <Card.Body className="py-1">Hello! I'm the body</Card.Body>
                                            </Accordion.Collapse>
                                            <Accordion.Collapse eventKey="3">
                                                <Card.Body className="py-1">Hello! I'm the body</Card.Body>
                                            </Accordion.Collapse>
                                            <Accordion.Collapse eventKey="3">
                                                <Card.Body className="py-1">Hello! I'm the body</Card.Body>
                                            </Accordion.Collapse>
                                        </div>
                                        <div className="accor">
                                            <Card.Header className="py-1 my-0 as px-1">
                                                <span className="py-1 menuname"><i class="fas fa-microchip mr-2"></i><span>Компьютерные компоненты</span></span>
                                                <Accordion.Toggle as={Button} variant="link" eventKey="4" className="py-1 mr-0 pr-3">
                                                    <i class="fas fa-angle-down" style={{ fontSize: 26, color: '#1A1160' }}></i>
                                                </Accordion.Toggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="4">
                                                <Card.Body className="py-1">Hello! I'm the body</Card.Body>
                                            </Accordion.Collapse>
                                            <Accordion.Collapse eventKey="4">
                                                <Card.Body className="py-1">Hello! I'm the body</Card.Body>
                                            </Accordion.Collapse>
                                            <Accordion.Collapse eventKey="4">
                                                <Card.Body className="py-1">Hello! I'm the body</Card.Body>
                                            </Accordion.Collapse>
                                        </div>

                                        <div className="accor">
                                            <Card.Header className="py-1 my-0 as px-1">
                                                <span className="py-1 menuname"><i class="fas fa-headphones mr-2"></i><span>Аксессуары</span></span>
                                                <Accordion.Toggle as={Button} variant="link" eventKey="5" className="py-1 mr-0 pr-3">
                                                    <i class="fas fa-angle-down" style={{ fontSize: 26, color: '#1A1160' }}></i>
                                                </Accordion.Toggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="5">
                                                <Card.Body className="py-1">Hello! I'm the body</Card.Body>
                                            </Accordion.Collapse>
                                            <Accordion.Collapse eventKey="5">
                                                <Card.Body className="py-1">Hello! I'm the body</Card.Body>
                                            </Accordion.Collapse>
                                            <Accordion.Collapse eventKey="5">
                                                <Card.Body className="py-1">Hello! I'm the body</Card.Body>
                                            </Accordion.Collapse>
                                        </div>

                                    </Accordion>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div>
                                {/* <ContentRoute/> */}
                                <Route path="/" exact component={ContentCarousel} />
                                <Route path="/about" exact component={About} />
                                <Route path="/payment" exact component={AboutPayment} />
                                <Route path="/contact" exact component={Contact} />
                                <Route path="/delivery" exact component={Delivery} />
                                <Route path="/guarantee" exact component={Guarantee} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SideContentMenu;