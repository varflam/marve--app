import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import useMarvelService from '../../services/MarvelService';
import setContent from '../../utils/setContent';

import './charInfo.sass';

const CharInfo = ({charId}) => {

    const [char, setChar] = useState(null);

    const {clearError, getCharacter, process, setProcess} = useMarvelService();

    // eslint-disable-next-line
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
            .then(onCharLoaded)
            .then(() => setProcess('confirmed'));
    }

    return(
        <div className="char-info">
            {
                setContent(process, View, char)
            }
        </div>
    )
} 

const View = ({data}) => {
    const {name, description, thumbnail, homepage, wiki, comics} = data;

    let comicsList;

    if(comics.length !== 0) {
        comicsList = comics.map((item, i) => {
            return(
                <li key={i} className="char-info__comics-item">
                    <Link to={`/comics/${item.resourceURI.substring(43)}`}>{item.name}</Link>
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