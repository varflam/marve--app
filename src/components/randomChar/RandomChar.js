import thor from '../../resources/img/thor.png'

const RandomChar = () => {
    return (
        <div className="random">
            <div className="random__char">
                <img src={thor} alt="Random Character" />
                <div className="random__info">
                    <h2 className="random__name">THOR</h2>
                    <p className="random__descr">As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate...</p>
                    <div className="random__btns">
                        <button className="button button_main">HOMEPAGE</button>
                        <button className="button button_gray">WIKI</button>
                    </div>
                </div>
            </div>
            <div className="random__try">

            </div>
        </div>
    )
}

export default RandomChar;