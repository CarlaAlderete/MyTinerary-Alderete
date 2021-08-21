import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';

const cities = [
        [{ foto:'copenhagen.jpg',city: 'Copenhagen'},
          { foto:'Boracay.jpg', city: 'Boracay'},
          { foto:'Rio.jpg', city: 'Rio de Janeiro'},
          { foto:'Reykjavik.jpg',city: 'Reykjavik'}],
        [{ foto:'amsterdam.jpg',city: 'Amsterdam'},
          { foto:'londres.jpg',city: 'London'},
          { foto:'Mykonos.jpg',city: 'Mykonos'},
          { foto:'toronto.jpg',city: 'Toronto'}],
        [{ foto:'telaviv.jpg',city: 'Tel aviv'},
          { foto:'losangeles.jpg',city: 'Los Angeles'},
          { foto:'ny.jpg',city: 'New York'},
          { foto:'sanfrancisco.jpg',city: 'San Francisco'}]
];

const MyCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === cities.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? cities.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }
  const slides = cities.map((item, index) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={index}
        >
          <div className='carouselTodo'>
            <h2 >Popular MyTineraries</h2>
            <div className='carouselGr'>
              {(item).map((obj) => 
                  <div className='carouselDiv' key={obj.city} style={{backgroundImage:`url("/assets/${obj.foto}")`,}}>
                    <h3>{obj.city}</h3>
                  </div>
              )}
            </div>
          </div>
      </CarouselItem>
    );
  });


  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={slides} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText=" " onClickHandler={previous} />
      <CarouselControl direction="next" directionText=" " onClickHandler={next} />
    </Carousel>
  );
}

export default MyCarousel;