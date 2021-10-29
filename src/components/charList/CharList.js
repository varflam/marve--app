import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import Error from '../error/Error';

import './charList.sass';

const CharList = ({onCharIdSelect}) => {

    const [charList, setCharList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [offset, setOffset] = useState(210);
    const [newCharLoading, setNewCharLoading] = useState(false);
    const [charEnded, setCharEnded] = useState(false);

    const marvelService = new MarvelService();

    useEffect(() => onRequest(offset), []);

    const onRequest = (offset) => {
        onCharLoading();

        marvelService
            .getAllCharacters(offset)
            .then(onLoadedList)
            .catch(onError)
    }

    const onCharLoading = () => {
        setNewCharLoading(true);
    }

    const onSelectChar = (id, i) => {
        onCharIdSelect(id);
        window.scrollTo({ top: 450, behavior: 'smooth' });
        itemRef.forEach(item => {
            item.classList.remove('char-list__item_active');
        });
        itemRef[i].classList.add('char-list__item_active');
        itemRef[i].focus();
    }

    const onLoadedList = (newCharList) => {
        let ended = false;

        if(newCharList.length < 9 || offset === 1550) {
            ended = true;
        }

        setCharList(charList => [...charList, ...newCharList]);
        setLoading(false);
        setNewCharLoading(false);
        setOffset(offset => offset + 9);
        setCharEnded(ended);
    }

    const onError = () => {
        setLoading(false);
        setError(true);
    }

    const itemRef = [];

    const setItemRef = (item) => {
        itemRef.push(item);
    }

    const renderCharItems = (charList) => {
        const list = charList.map((item, i) => {
            return(
                <li className="char-list__item"
                    key={item.id}
                    tabIndex="0"
                    ref={setItemRef}
                    onClick={() => onSelectChar(item.id, i)}
                    onKeyPress={(e) => {
                        if(e.key === '' || e.key === 'Enter') {
                            onSelectChar(item.id, i)
                        }
                    }}>
                        <img 
                            src={item.thumbnail} 
                            alt={item.name} 
                            className="char-list__img"
                            style={item.thumbnail !== 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg' ? {'objectFit': 'cover'} : null} />
                        <h3 className="char-list__name">{item.name}</h3>
                </li> 
            )
        });

        return(
            <ul className="char-list">
                {list}
            </ul>
        )
    }

    const items = renderCharItems(charList);
    const btn =                 
    <div className="btn__wrapper">
        <button
            type="button"
            className="btn btn_long"
            style={charEnded ? {display: 'none'} : {display: 'block'}}
            onClick={() => onRequest(offset)}
            disabled={newCharLoading}
            >LOAD MORE</button>
    </div>
    
    const spinner = loading ? <Spinner/> : null;
    const errorMessage = error ? <Error/> : null;
    const content = !(loading || error) ? items : null;
    const visibleBtn = !(loading || error) ? btn : null;

    return(
        <div>
            {content}
            {errorMessage}
            {spinner}
            {visibleBtn}
        </div>
    )
}

CharList.propTypes = {
    onCharIdSelect: PropTypes.func
}

export default CharList;