import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import Error from '../error/Error';
import Skeleton from '../skeleton/Skeleton';

import './charInfo.sass';

const CharInfo = ({charId}) => {

    const [char, setChar] = useState(null);

    const {loading, error, clearError, getCharacter} = useMarvelService();

    useEffect(() => updateChar(), [charId]);

    const onCharLoaded = (char) => {
        setChar(char);
    }

    const updateChar = () => {
        if(!charId) {
            return;
        }

        clearError();

        getCharacter(charId)
            .then(onCharLoaded);
    }
    
    const skeleton = loading || error || char ? null : <Skeleton/>
    const spinner = loading ? <Spinner/> : null;
    const errorMessage = error ? <Error/> : null;
    const content = !(loading || error || !char) ? <View char={char}/> : null;

    return(
        <div className="char-info">
            {skeleton}
            {content}
            {errorMessage}
            {spinner}
        </div>
    )
} 

const View = ({char}) => {
    const {name, description, thumbnail, homepage, wiki, comics} = char;

    let comicsList;

    if(comics.length !== 0) {
        comicsList = comics.map((item, i) => {
            return(
                <li key={i} className="char-info__comics-item">
                    {item.name}
                </li>
            )
        });
    } else {
        comicsList = 'Sorry, there is no comics';
    }

    return(
        <>
            <img src={thumbnail} alt={name} />
            <h3 className="char-info__name">{name}</h3>
            <button className="btn"><a href={homepage}>HOMEPAGE</a></button>
            <button className="btn btn_gray"><a href={wiki}>WIKI</a></button>
            <div className="char-info__descr">{description}</div>

            <h3 className="char-info__ul-title">Comics:</h3>
            <ul className="char-info__comics">
                {comicsList}
            </ul>
        </>
    )
}

CharInfo.propTypes = {
    charId: PropTypes.number
}

export default CharInfo;