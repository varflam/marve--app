import avengers from '../../resources/img/Avengers.png';
import avengersLogo from '../../resources/img/Avengers-logo.png';

import './advert.sass';

const Advert = () => {
    return(
        <div className="advert">
            <img src={avengers} alt="Avengers" className="advert__img" />
            <p className="advert__descr">New comics every week!
            <br/>
            Stay tuned!</p>
            <img src={avengersLogo} alt="Avengers" className="advert__logo" />
        </div>
    )
}

export default Advert;