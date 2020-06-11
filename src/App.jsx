import React from 'react';
import './App.css';
import TopNav from './Components/TopNav';
import CenterNav from './Components/CenterNav';
import SideContentMenu from './Components/SideContentMenu';
import AboutLogo from './Components/AboutLogo';
import PopularProduct from './Components/PopularProduct';
import NewProducts from './Components/NewProducts';
import FooterPart from './Components/FooterPart';
import { HashRouter } from 'react-router-dom';



class App extends React.Component {



  render() {
    return (
      <HashRouter>
        <div style={{ backgroundColor: "#F1F3F4", height: 100 + 'vh' }}>
          <div className="leftAboutLaptop">
            <div className="box w-100 h-50 bg-danger"></div>
            <div className="box w-100 h-50 bg-success"></div>
            <div className="box w-100 h-50 bg-dark"></div>
            <div className="box w-100 h-50 bg-white"></div>
          </div>
          <TopNav />
          <CenterNav />
          <SideContentMenu />
          <AboutLogo />
          <PopularProduct />
          <NewProducts />
          <FooterPart />
        </div>
      </HashRouter>
    )
  }
}

export default App;