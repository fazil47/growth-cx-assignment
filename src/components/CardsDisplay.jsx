import Slider from "react-slick";
import "./CardsDisplay.css";

// Only works with CustomerCard components
// Show carousel only when width is below 640px otherwise shows all cards
export default function CardsDisplay({ children }) {
  const settings = {
    className: "cardCarousel",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="cardsDisplay">
      <div className="cardsNonMobile">
        {children}
      </div>
      <Slider {...settings}>{children.map((child, i) => {
        return <div key={i} className="cardCarouselCardContainer">{child}</div>;
      })}</Slider>
    </div>
  );
}
