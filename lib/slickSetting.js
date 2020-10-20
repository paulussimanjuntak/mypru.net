const arrowStyle = (oldStyle) => {
  return {
    ...oldStyle,
    background: "rgba(168, 168, 168, 0.6)",
    borderRadius: "50%",
    width: "35px",
    height: "35px",
    zIndex: "5",
    color: "white"
  }
}

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} cus-arrow-slick`}
      style={arrowStyle(style)}
      onClick={onClick}
    >
      <i className="fas fa-chevron-right arrow-slick" />
    </div>
  );
}

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} cus-arrow-slick`}
      style={arrowStyle(style)}
      onClick={onClick}
    >
      <i className="fas fa-chevron-left arrow-slick" />
    </div>
  );
}

const responsive = (dw, dl, tw, tl, mw, ml) => [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: dw,
      slidesToScroll: dl,
    }
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: tw,
      slidesToScroll: tl,
    }
  },
  {
    breakpoint: 599,
    settings: {
      slidesToShow: mw,
      slidesToScroll: ml,
      centerMode: false,
      arrows: false,
      dots: true,
      centerPadding: "0",
    }
  },
  {
    breakpoint: 425,
    settings: {
      slidesToShow: mw,
      slidesToScroll: ml,
      centerMode: false,
      arrows: false,
      dots: true,
      centerPadding: "0",
    }
  },
  {
    breakpoint: 320,
    settings: {
      slidesToShow: mw,
      slidesToScroll: ml,
      centerMode: false,
      arrows: false,
      dots: true,
      centerPadding: "0",
    }
  }
]

export const bannerSettings = {
  dots: false,
  infinite: true,
  draggable: true,
  autoplay: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  centerMode: true,
  centerPadding: "20%",
  responsive: responsive(1, 1, 1, 1, 1, 1) 
}
