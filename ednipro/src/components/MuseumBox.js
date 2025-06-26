import museums from '../data/museums.json';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function MuseumBox() {
    return (
        <div className="museumBox">
            <div className="mainContainer">
                {museums.map((museums) => (
                    <div className="musemBoxContent" key={museums.id}>
                        <div className="museumBoxGallery">
                            <img
                                src={`/img/${museums.images[0]}`}
                                alt={museums.name}
                            />
                        </div>
                        <div className="museumBoxText">
                            <div className="museumBoxTextHeader">
                                <h2>{museums.name}</h2>
                                <p>{museums.description}</p>
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