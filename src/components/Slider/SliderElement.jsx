import React, { useState } from "react";
import SliderData from "./SliderData";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import cn from 'classnames';

const SliderElement = () => {

  const [current, setCurrent] = useState(0);
  let lenght = SliderData.length;

  const slideLeft = () => {
    (current === 0) ? setCurrent(lenght - 1) : setCurrent(current - 1)
  }
  const slideRight = () => {
    (current === lenght - 1) ? setCurrent(0) : setCurrent(current + 1)

  }
  return (
    <>
      <div className="arrow-left" onClick={slideLeft}><FaArrowCircleLeft /></div>
      <div className="arrow-right" onClick={slideRight}><FaArrowCircleRight /></div>
    {  SliderData.map((slider, index) => (
      <div key={index} className={cn('slider-item', current === index ? 'active' : '')}
       style={{backgroundImage: `url(${slider.image})`,
        backgroundSize : 'cover',
        backgroundPosition : 'center'}}>
      </div>
    ))}

    </>
  );

    
};

export default SliderElement;
