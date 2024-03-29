import React from 'react'
import Proudct from '../ProductSlider/Product';
import Slider from 'react-slick'
import {NextBtn,PreviousBtn} from '../Banner/Banner';
import { Link } from 'react-router-dom';
import {offerProducts} from '../../../utils/constants'
import {getRandomProducts} from '../../../utils/functions'
import Product from '../ProductSlider/Product';

export const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 6,
  initialSlide: 1,
  swipe: false,
  prevArrow: <PreviousBtn />,
  nextArrow: <NextBtn />,
  responsive: [
      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 3
          }
      },
      {
          breakpoint: 600,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 2
          }
      },
      {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      }
  ]
};

const DealSlider = ({title}) => {
  return (
    <>    
      <section>
      <div>
        <h1>{title}</h1>
        <Link to='/products'> VIEW ALL</Link>
      </div>
      <hr />
      <Slider {...settings}>
        {getRandomProducts(offerProducts,12).map((item,i)=>{
          <Product {...item} key={i}/>
        })}
      </Slider>
      </section>
    </>
  )
}

export default DealSlider