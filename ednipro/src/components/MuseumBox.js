import museums from '../data/museums.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function MuseumBox() {
    return (
        <div className="museumBox">
            <div className="mainContainer">
                {museums.map((museum) => (
                    <div className="museumBoxContent" key={museum.id}>
                        <div className="museumBoxGallery">
                            <Swiper
                                modules={[Navigation, Pagination, Scrollbar, A11y]}
                                navigation
                                pagination={{ clickable: true }}
                                spaceBetween={50}
                                slidesPerView={1}
                                loop={true}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                            >
                                {museum.images.map((img, idx) => (
                                    <SwiperSlide key={idx}>
                                        <img
                                            src={`img/${img}`}
                                            alt={`${museum.name} ${idx + 1}`}
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        <div className="museumBoxText">
                            <div className="museumBoxTextHeader">
                                <h2>{museum.name}</h2>
                                <p>{museum.description}</p>
                            </div>
                            <button className="museumBoxButton">Більше інформації</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default MuseumBox;