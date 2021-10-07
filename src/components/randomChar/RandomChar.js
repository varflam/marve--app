import thor from '../../resources/img/thor.png'

import './randomChar.sass';

const RandomChar = () => {
    return (
        <div className="random">
            <div className="random__char">
                <div className="random__wrapper">
                    <img src={thor} alt="Random Character" />
                    <div className="random__info">
                        <h2 className="random__name">THOR</h2>
                        <p className="random__descr">As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate...</p>
                    </div>
                </div>
                <div className="random__btns">
                        <button type="button" className="btn">HOMEPAGE</button>
                        <button type="button" className="btn btn_gray">WIKI</button>
                </div>
            </div>
            <div className="random__try">
                <p className="random__today">
                Random character for today! 
                <br/> 
                Do you want to get to know him better?
                <br/> <br/>
                Or choose another one</p>
                <button type="button" className="btn btn_gray-bg">TRY IT</button>
            </div>
        </div>
    )
}

export default RandomChar;