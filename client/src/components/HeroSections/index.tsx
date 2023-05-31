import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Lazy } from "swiper";
import "swiper/css";
import "swiper/css/parallax";
import "swiper/css/autoplay";
// import "swiper/css/lazy";
import ItemRow from "./components/item";
import { CSSProperties } from "react";

interface IHeroSectionsProps {
  className?: string;
  style?: CSSProperties;
}

const HeroSections: React.FC<IHeroSectionsProps> = ({ className, style }) => {
  return (
    <Swiper
      style={style}
      className={className}
      spaceBetween={10}
      slidesPerView={1}
      autoplay={true}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <ItemRow
          type="video"
          option={{
            title: "体验 Tesla",
            slogan: "即刻预约试驾",
            buyHref: "",
            details: "",
            Url: "/video/纯电动车、太阳能和清洁能源  特斯拉中国.mp4",
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <ItemRow
          type="image"
          option={{
            title: "理想ONE",
            slogan: "豪华六座智能电动SUV",
            buyHref: "",
            details: "",
            Url: "/Car/lixiangone.jpg",
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <ItemRow
          type="video"
          option={{
            title: "小鹏汽车",
            slogan: "未来出行探索者",
            buyHref: "",
            details: "",
            Url: "/video/小鹏汽车丨未来出行探索者.mp4",
          }}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSections;
