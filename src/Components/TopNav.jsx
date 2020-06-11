import React from "react";
import './TopNav.css';
import Icon, {FontAwesome} from 'react-web-vector-icons';

class TopNav extends React.Component {



    render(){
        return (
            <div className="topnav">
               <div className="container">
                   <div className="row">
                       <div className="col-lg-6">
                           <span className="text mr-3"><i className="fas fa-map-marker-alt mr-1"></i>Узбекистан</span>
                           <span className="text">Отзывы магазина</span>
                       </div>
                       <div className="col-lg-6 text-right">
                           <span className="text mr-3">Статус заказа</span>
                           {/* <span className="text ml-5">Регистрация</span>
                           <span className="mx-2">|</span>
                           <span className="text">Войти</span> */}
                           <span>
                               <span className="language">Uz</span>
                               <span className="language">Ru</span>
                               <span className="language">En</span>
                           </span>
                       </div>
                   </div>
               </div>
            </div>
        )
    }
}

export default TopNav;