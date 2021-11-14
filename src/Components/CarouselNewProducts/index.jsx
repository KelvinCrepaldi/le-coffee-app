import React from "react";
import {
  Carousel,
  onChange,
  onClickItem,
  onClickThumb,
} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { CatalogueContext } from "../../Providers/catalogue";

export const CarouselNewProducts = ({ percentage }) => {
  const { catalogue } = React.useContext(CatalogueContext);

  return (
    catalogue && (
      <div>
        <Carousel autoPlay centerMode centerSlidePercentage={percentage} infiniteLoop> 
          {catalogue.map((product) => (
            <img
              key={product.id}
              src={product.image}
              alt={product.name}
              className="Carousel Images"
            />
          ))}
        </Carousel>
      </div>
    )
  );
};
