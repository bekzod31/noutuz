import React from 'react';
import './CenterNav.css';
import { NavLink } from 'react-router-dom';


class CenterNav extends React.Component {



    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 py-3">
                            <span className="phonenumber">8 (495) 241-02-02</span>
                        </div>
                        <div className="col-lg-7 py-1">
                            <div className=" d-flex justify-content-between align-items-center">
                                <span className="centernavspan"><NavLink to="/about">О магазине</NavLink></span>
                                <span className="centernavspan"><NavLink to="/delivery">Доставка</NavLink></span>
                                <span className="centernavspan"><NavLink to="/payment">Оплата</NavLink></span>
                                <span className="centernavspan"><NavLink to="/guarantee">Гарантия</NavLink></span>
                                <span className="centernavspan"><NavLink to="/contact">Контакты</NavLink></span>
                            </div>
                            <div className="mt-2">
                                <form action="">
                                    <input type="search" placeholder="Search..." className="search" />
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-2 d-flex align-items-center justify-content-end">
                            <div className="d-flex justify-content-between">
                                <span className="product mr-2">
                                    <i class="fas fa-cart-plus fa-2x"></i>
                                    <span className="count">10</span>
                                </span>
                                <div className="priceCoun">
                                    <span className="ml-2">100000</span><br/>
                                    <span className="text-right d-block">so'm</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CenterNav;