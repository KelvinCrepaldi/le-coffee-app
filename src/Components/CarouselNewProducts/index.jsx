import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { CatalogueContext } from "../../Providers/catalogue";

export const CarouselNewProducts = ({ percentage, showThumbs }) => {
  const { catalogue } = React.useContext(CatalogueContext);

  return (
    catalogue && (
      <div>
        <Carousel autoPlay centerMode centerSlidePercentage={percentage} infiniteLoop showThumbs={showThumbs}> 
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
