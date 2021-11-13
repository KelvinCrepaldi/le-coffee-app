import React from "react";
import {
  Carousel,
  onChange,
  onClickItem,
  onClickThumb,
} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { CatalogueContext } from "../../Providers/catalogue";

export const CarouselNewProducts = () => {
  const { catalogue } = React.useContext(CatalogueContext);

  return (
    catalogue && (
      <div>
        <Carousel
          autoFocus={true}
          autoPlay={true} 
          interval="3000"
          centerMode={true}
          emulateTouch={true}
          infiniteLoop={true}
          showArrows={true}
          showThumbs={false}
          onChange={onChange}
          onClickItem={onClickItem}
          width="50%"
        >
          {catalogue.map((product) => (
            <div key={product.id}>
              <img
                src={product.image}
                alt={product.name}
                className="Carousel Images"
              />
            </div>
          ))}
        </Carousel>
      </div>
    )
  );
};
