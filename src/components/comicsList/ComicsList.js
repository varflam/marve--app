import comics from '../../resources/img/bg.jpg';

import './comicsList.sass';

const ComicsList = () => {
    return(
        <>
            <ul className="comics-list">
                <li className="comics-list__item">
                    <img src={comics} alt="Comics' oblozhka" className="comics-list__img" />
                    <h3 className="comics-list__title">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</h3>
                    <p className="comics-list__price">9.99$</p>
                </li>
                <li className="comics-list__item">
                    <img src={comics} alt="Comics' oblozhka" className="comics-list__img" />
                    <h3 className="comics-list__title">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</h3>
                    <p className="comics-list__price">9.99$</p>
                </li>
                <li className="comics-list__item">
                    <img src={comics} alt="Comics' oblozhka" className="comics-list__img" />
                    <h3 className="comics-list__title">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</h3>
                    <p className="comics-list__price">9.99$</p>
                </li>
                <li className="comics-list__item">
                    <img src={comics} alt="Comics' oblozhka" className="comics-list__img" />
                    <h3 className="comics-list__title">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</h3>
                    <p className="comics-list__price">9.99$</p>
                </li>
                <li className="comics-list__item">
                    <img src={comics} alt="Comics' oblozhka" className="comics-list__img" />
                    <h3 className="comics-list__title">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</h3>
                    <p className="comics-list__price">9.99$</p>
                </li>
            </ul>
            <div className="btn__wrapper">
                <button
                    type="button"
                    className="btn btn_long"
                    >LOAD MORE</button>
            </div>
        </>
    )
}

export default ComicsList;