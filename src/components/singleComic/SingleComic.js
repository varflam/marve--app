import { useParams, Link } from 'react-router-dom';
import { useState, useEffect} from 'react';
import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import Error from '../error/Error';

import './singleComic.sass';

const SingleComic = () => {
    const {comicId} = useParams();
    const [comic, setComic] = useState(null);
    const {loading, error, clearError, getComic} = useMarvelService();

    useEffect(() => updateChar(), [comicId]);

    const onComicLoaded = (comic) => {
        setComic(comic);
    }

    const updateChar = () => {
        clearError();

        getComic(comicId)
            .then(onComicLoaded);
    }

    const spinner = loading ? <Spinner/> : null;
    const errorMessage = error ? <Error/> : null;
    const content = !(loading || error || !comic) ? <View comic={comic}/> : null;

    return(
        <div className="single-comic">
            {spinner}
            {errorMessage}
            {content}
            <Link to="/comics" className="single-comic__back">Back to all</Link>
        </div>
    )
}

const View = ({comic}) => {
    const {title, thumbnail, description, pageCount, price} = comic;

    return(
        <>
            <img src={thumbnail} alt={title} className="single-comic__img" />
            <div className="single-comic__info">
                <h3 className="single-comic__title">{title}</h3>
                <div className="single-comic__descr">{description}
                <br />
                <br />
                {pageCount} pages
                <br />
                <br />
                Language: en-us</div>
                <div className="single-comic__price">
                {price ? `${price}$` : 'Sorry, price is not available'}
                </div>
            </div>
        </>
    )
}

export default SingleComic;