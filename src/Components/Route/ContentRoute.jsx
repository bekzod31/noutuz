import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import ContentCarousel from '../ContentCarousel';
import About from '../Services/About';
import AboutPayment from '../Services/AboutPayment';
import Delivery from '../Services/Delivery';
import Contact from '../Services/Contact';
import Guarantee from '../Services/Guarantee';


class ContentRoute extends React.Component {


    render() {
        return (
            <BrowserRouter>
                <Route path="/" exact component={ContentCarousel} />
                <Route path="/about" exact component={About} />
                <Route path="/payment" exact component={AboutPayment} />
                <Route path="/contact" exact component={Contact} />
                <Route path="/delivery" exact component={Delivery} />
                <Route path="/guarantee" exact component={Guarantee} />
            </BrowserRouter>
        )
    }
}
export default ContentRoute;