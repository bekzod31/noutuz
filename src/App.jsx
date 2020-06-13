import React from 'react';
import TopNav from './Components/TopNav';
import CenterNav from './Components/CenterNav';
import SideContentMenu from './Components/SideContentMenu';
import AboutLogo from './Components/AboutLogo';
import PopularProduct from './Components/Products/PopularProduct';
import NewProducts from './Components/Products/NewProducts';
import FooterPart from './Components/FooterPart';
import { HashRouter } from 'react-router-dom';



class App extends React.Component {



  render() {
    return (
      <HashRouter>
        <div style={{ backgroundColor: "#F1F3F4", height: 100 + 'vh' }}>
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