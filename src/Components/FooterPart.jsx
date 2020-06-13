import React from 'react';
import "./FooterPart.css";



class FooterPart extends React.Component {



    render() {
        return (
            <footer className="py-4">
                <div className="container">
                    <h4>Вы можете платить:</h4>
                    <div className="card py-2">
                        <div className="row">
                            <div className="col-lg-3 col-sm-3 col-xs-6">
                                <div className="paymentLogo">
                                    <img src={require("../Images/paymentLogo/payme.png")} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-3 col-xs-3">
                                <div className="paymentLogo">
                                    <img src={require("../Images/paymentLogo/click.png")} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-3 col-xs-6">
                                <div className="paymentLogo">
                                    <img src={require("../Images/paymentLogo/paypal.png")} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-3 col-xs-6">
                                <div className="paymentLogo">
                                    <img src={require("../Images/paymentLogo/webmoney.png")} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="bg-white" />
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="footerLeftPart">
                                <p className=" py-0">ЕСТЬ ВОПРОСЫ? ЗВОНИТЕ!</p>
                                <h4>+998 (71) 202-202-1</h4>
                                <button className="btn btn-white py-2 px-5 mx-0 font-weight-bold">оставить отзывь</button>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div>
                                <p>О компании</p>
                                <p>Политика конфиденциальности</p>
                                <p>Обмен и возврат</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div>
                                <p className="subscribeText py-0">Получайте информацию о скидках, акциях и интересных предложениях.</p>
                                <form action="">
                                    <input type="text" className="form-control" placeholder="e-mail" required />
                                    <div className="d-flex justify-content-end">
                                        <button className="registrationButton btn mx-0 px-3 py-2 bg-white font-weight-bold">Подписаться</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default FooterPart;