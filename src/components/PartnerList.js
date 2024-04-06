import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Swiper, SwiperSlide } from "swiper/react";
import partner01 from "../img/partners/partner-1.jpg";
import partner02 from "../img/partners/partner-2.jpg";

const PartnerList = () => {
  return (
    <>
      <section id="partners" className="partners">
        <div className="container" data-aos="zoom-out">
          <div className="section-header">
            <h2>Our Partner</h2>
          </div>
          <div className="partners-slider swiper">
            <Swiper
              modules={[Autoplay]}
              autoplay={{
                delay: 1500,
                disableOnInteraction: true,
              }}
              centeredSlides={true}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 5,
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 5,
                },
                1024: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
              }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide>
                <img src={partner01} className="img-fluid" alt="partner01" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={partner02} className="img-fluid" alt="partner02" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default PartnerList;
