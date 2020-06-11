import React from  'react';
import './AboutLogo.css'


class AboutLogo extends React.Component {


    render(){
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 my-3">
                            <div className="cardlogo py-2 px-3 text-center"><i class="far fa-thumbs-up mr-2"></i><span>Лучшая цена </span></div>
                        </div>
                        <div className="col-lg-3 my-3">
                            <div className="cardlogo py-2 px-3 text-center"><i class="far fa-life-ring mr-2"></i><span>Гарантия качества</span></div>
                        </div>
                        <div className="col-lg-3 my-3">
                            <div className="cardlogo py-2 px-3 text-center"><i class="fa fa-briefcase mr-2" aria-hidden="true"></i><span>Удобная оплата</span></div>
                        </div>
                        <div className="col-lg-3 my-3">
                            <div className="cardlogo py-2 px-3 text-center"><i class="fas fa-truck mr-2"></i><span>Быстрая доставка</span></div>
                        </div>
                    </div>
                    <hr/>
                </div>
            </div>
        )
    }
}

export default AboutLogo;