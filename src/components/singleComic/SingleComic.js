import comic from '../../resources/img/x-men.png';

import './singleComic.sass';

const SingleComic = () => {
    return(
        <div className="single-comic">
            <img src={comic} alt="" className="single-comic__img" />
            <div className="single-comic__info">
                <h3 className="single-comic__title">X-Men: Days of Future Past</h3>
                <div className="single-comic__descr">Re-live the legendary first journey into the dystopian future of 2013 - where Sentinels stalk the Earth, and the X-Men are humanity's only hope...until they die! Also featuring the first appearance of Alpha Flight, the return of the Wendigo, the history of the X-Men from Cyclops himself...and a demon for Christmas!?
                <br />
                <br />
                144 pages
                <br />
                <br />
                Language: en-us</div>
                <div className="single-comic__price">
                9.99$
                </div>
            </div>
            <a href="!#" className="single-comic__back">Back to all</a>
        </div>
    )
}

export default SingleComic;