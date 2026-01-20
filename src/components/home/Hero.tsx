import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

// Define slide data (you can move this to a separate file if needed)
const slides = [
  {
    image: '/images/home/hero-slide-1.jpg',
    subtitle: 'LIDER W BRANŻY ZADASZEŃ ALUMINIOWYCH',
    titleLine1: 'Nowoczesne Zadaszenia',
    titleLine2: 'Aluminiowe',
    description: 'Tworzymy eleganckie i funkcjonalne przestrzenie, łącząc innowacyjne technologie z ponadczasowym designem',
  },
  {
    image: '/images/home/hero-slide-2.jpg',
    subtitle: 'PERFEKCYJNE DOPASOWANIE DO TWOJEGO DOMU',
    titleLine1: 'Pergole i Carporty',
    titleLine2: 'Najwyższej Jakości',
    description: 'Indywidualne projekty, które idealnie komponują się z architekturą Twojej posesji.',
  },
  {
    image: '/images/home/hero-slide-3.jpg',
    subtitle: 'INWESTYCJA NA LATA',
    titleLine1: 'Trwałość i Estetyka',
    titleLine2: 'Gwarantowane',
    description: 'Wykorzystujemy tylko najlepsze materiały, zapewniając odporność na warunki atmosferyczne i piękny wygląd przez długi czas.',
  },
];

const Hero = () => {
  const settings = {
    dots: true,         // Show dot indicators
    infinite: true,     // Loop the slideshow
    speed: 500,         // Transition speed in ms
    slidesToShow: 1,    // Show one slide at a time
    slidesToScroll: 1,  // Scroll one slide at a time
    autoplay: true,     // Automatically change slides
    autoplaySpeed: 5000, // Time between slides in ms (5 seconds)
    fade: true,         // Use fade effect instead of slide
    cssEase: 'linear',    // Easing function for fade
    pauseOnHover: true, // Pause autoplay on hover
    appendDots: (dots: React.ReactNode) => ( // Custom positioning for dots
      <div style={{ position: 'absolute', bottom: '30px', width: '100%' }}>
        <ul style={{ margin: "0px", padding: '0px', textAlign: 'center' }}> {dots} </ul>
      </div>
    ),
    customPaging: (i: number) => ( // Custom dot appearance
      <div
        style={{
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          background: "rgba(255, 255, 255, 0.5)",
          display: "inline-block",
          margin: "0 5px"
        }}
      ></div>
    )
  };

  return (
    <div className="relative h-screen overflow-hidden"> {/* Added overflow-hidden */}
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative h-screen w-full">
            {/* Background Image */}
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div>
            {/* Premium Gradient Overlay */}
            <div className="gradient-overlay-hero"></div>
            
            {/* Content */}
            <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4 z-10">
              <span className="text-sm uppercase tracking-wider mb-4 font-medium animate-fade-in">
                {slide.subtitle}
              </span>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 max-w-5xl font-display animate-slide-in">
                {slide.titleLine1}<br />
                {slide.titleLine2}
              </h1>
              <p className="text-xl mb-8 max-w-2xl animate-fade-in">{slide.description}</p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in">
                <Link to="/wycena" className="cta-button">
                  BEZPŁATNA WYCENA
                </Link>
                <Link to="/realizacje" className="secondary-button">
                  NASZE REALIZACJE
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
