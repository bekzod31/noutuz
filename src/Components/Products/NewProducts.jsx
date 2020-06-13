import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from '../../style.module.css';
import data from '../../database/PopularProduct.json';
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
class NewProducts extends React.Component {



  render() {
    return (
      <div style={{ backgroundColor: "#ffffff" }} className="my-2 py-3">
        <div className="container">
          <div className="productTitle px-2 d-flex justify-content-between">
            <h4>Новинки</h4>
            <span>Больше товаров <i class="fas fa-arrow-right"></i></span>
          </div>
          <div className="row">
            <div className="col-lg-12 my-3">
              <Carousel 
              style={{marginTop:20}}
                swipeable={true}
                draggable={false}
                showDots={false}
                arrows={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={this.props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass={styles.carousel-container}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={this.props.deviceType}
                // dotListClass="custom-dot-list-style"
                // itemClass="carousel-item-padding-40-px"
              >
                {
                  data.map((element, index) => {
                    return (
                      <div className="card popularProductCard p-1 mx-2">
                      <div className="popularProductImg">
                        <img src={element.image}/>
                      </div>
                      <div className="productName px-1">
                        <div>
                    <p className="py-1 my-0">{element.title}</p>
                          <span className="mt-0">{element.about} </span>
                          {element.image}
                        </div>
                        <div className="prodbottom">
                          <hr />
                          <div className="d-flex justify-content-between my-2">
                            <span className="productPrice">{element.price} so'm</span>
                            <span>
                              <span className="addShppingCardFirst">
                                <i class="fas fa-chart-bar"></i>
                              </span>
    
                              <span className="addShppingCard">
                                <i class="fas fa-cart-plus"></i>
                              </span>
                            </span>
                          </div>
                          <button className="addButton "><span>Прямо оформите заказ</span></button>
                        </div>
                      </div>
                    </div>
                    )
                  })
                }
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NewProducts;