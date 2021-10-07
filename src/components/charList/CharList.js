import './charList.sass';

import loki from '../../resources/img/loki.png';

const CharList = () => {
    return(
        <div>
            <ul className="char-list">
                <li className="char-list__item">
                    <img src={loki} alt="" className="char-list__img" />
                    <h3 className="char-list__name">ABYSS</h3>
                </li>
                <li className="char-list__item">
                    <img src={loki} alt="" className="char-list__img" />
                    <h3 className="char-list__name">ABYSS</h3>
                </li>
                <li className="char-list__item">
                    <img src={loki} alt="" className="char-list__img" />
                    <h3 className="char-list__name">ABYSS</h3>
                </li>
                <li className="char-list__item">
                    <img src={loki} alt="" className="char-list__img" />
                    <h3 className="char-list__name">ABYSS</h3>
                </li>
                <li className="char-list__item">
                    <img src={loki} alt="" className="char-list__img" />
                    <h3 className="char-list__name">ABYSS</h3>
                </li>
            </ul>
            <div className="btn__wrapper">
                <button
                    type="button"
                    className="btn btn_long"
                    >LOAD MORE</button>
            </div>
        </div>
    )
}

export default CharList;