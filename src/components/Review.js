import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Swiper, SwiperSlide } from "swiper/react";
import client01 from "../img/clients/client-1.jpg";
import client02 from "../img/clients/client-2.jpg";
// ... other imports

const ClientList = () => {
  return (
    <section id="clients" className="clients">
      <div className="container" data-aos="zoom-out">
        <div className="section-header">
          <h2>
            Best Rated with 4.8 <i className="bi bi-star" style={{ color: "#FFD700" }}></i>
          </h2>
        </div>
        <div className="clients-slider swiper">
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 1500,
              disableOnInteraction: true,
            }}
            slidesPerView={2}
            spaceBetween={20}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
          >
            { [client01, client02, /* ... other clients */].map((client, index) => (
              <SwiperSlide key={index}>
                <img
                  src={client}
                  className="img-fluid"
                  alt={`Client ${index + 1}`}
                  style={{
                    maxWidth: "100%", // Ensure images are responsive
                    height: "auto", // Maintain aspect ratio
                    objectFit: "cover"
                  }}
                />
              </SwiperSlide>
            )) }
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ClientList;
