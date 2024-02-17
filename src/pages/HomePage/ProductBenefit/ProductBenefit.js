import React from "react";
import "./productBenefit.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Star from "../../../Components/Common/Star/Star";
import { productBenefitData } from "../../../Components/Common/data";
import { slideData } from "../../../Components/Common/data";

const ProductBenefit = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <div className="productBenefit-wrapper">
      <div className="productBenefit-left">
        {productBenefitData?.map((e, i) => {
          return (
            <div className="benefit">
              <img src={e?.img} alt="" width={60} />
              <div>
                <p className="benefit-title">{e?.name}</p>
                <p className="benefit-tag">{e?.tag}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="productBenefit-right">
        <p className="featured-product">Featured Items</p>
        <div className="slider-container">
          <Slider {...settings}>
            {slideData?.map((e, i) => (
              <div key={e.id}>
                <div className="product-item">
                  <div className="product-discount">
                    <p>{e?.discount}%</p>
                  </div>
                  <div className="img-box">
                    <img src={e.img} alt={e.name} width={80} className="img" />
                  </div>
                  <p className="product-title">{e.name}</p>
                  <div className="product-rating-and-stock">
                    <p className="product-rating">
                      <Star ratingPoint={e.rating} />
                      <p>({e?.review})</p>
                    </p>
                    <p className="product-stock">{e?.stock}</p>
                  </div>
                  <div className="product-all-price">
                    <p className="product-price">${e.price}</p>
                    <p className="product-after-price">${e.after_price}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ProductBenefit;
