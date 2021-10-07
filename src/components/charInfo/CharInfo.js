import loki from '../../resources/img/loki.png';

import './charInfo.sass';

const CharInfo = () => {
    return(
        <div className="char-info">
            <img src={loki} alt={loki} />
            <h3 className="char-info__name">LOKI</h3>
            <button className="btn">HOMEPAGE</button>
            <button className="btn btn_gray">WIKI</button>
            <div className="char-info__descr">In Norse mythology, Loki is a god or jötunn (or both). Loki is the son of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki is referred to as the father of Váli in the Prose Edda.</div>

            <h3 className="char-info__ul-title">Comics:</h3>
            <ul className="char-info__comics">
                <li className="char-info__comics-item">All-Winners Squad: Band of Heroes (2011) #3</li>
                <li className="char-info__comics-item">All-Winners Squad: Band of Heroes (2011) #3</li>
                <li className="char-info__comics-item">All-Winners Squad: Band of Heroes (2011) #3</li>
                <li className="char-info__comics-item">All-Winners Squad: Band of Heroes (2011) #3</li>
                <li className="char-info__comics-item">All-Winners Squad: Band of Heroes (2011) #3</li>
            </ul>
        </div>
    )
}

export default CharInfo;