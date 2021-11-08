import { useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import Error from '../error/Error';

import './charList.sass';

const CharList = ({onCharIdSelect}) => {

    const [charList, setCharList] = useState([]);
    const [offset, setOffset] = useState(210);
    const [newCharLoading, setNewCharLoading] = useState(false);
    const [charEnded, setCharEnded] = useState(false);

    const {loading, error, getAllCharacters} = useMarvelService();

    useEffect(() => onRequest(offset, true), []);

    const onRequest = (offset, initial) => {
        initial ? setNewCharLoading(false) : setNewCharLoading(true);
        
        getAllCharacters(offset)
            .then(onLoadedList);
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
        setNewCharLoading(false);
        setOffset(offset => offset + 9);
        setCharEnded(ended);
    }

    const itemRef = [];

    const setItemRef = (item) => {
        itemRef.push(item);
    }

    const renderCharItems = (charList) => {
        const list = charList.map((item, i) => {
            return(
                <CSSTransition 
                    key={item.id} 
                    classNames="char-list__item" 
                    timeout={500}>
                    <li className="char-list__item"
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
                </CSSTransition>
            )
        });

        return(
            <ul className="char-list">
                <TransitionGroup component={null}>
                    {list}
                </TransitionGroup>
            </ul>
        )
    }

    const items = renderCharItems(charList);
    
    const spinner = loading && !newCharLoading ? <Spinner/> : null;
    const errorMessage = error ? <Error/> : null;

    return(
        <div>
            {items}
            {errorMessage}
            {spinner}
            <div className="btn__wrapper">
                <button
                    type="button"
                    className="btn btn_long"
                    style={charEnded ? {display: 'none'} : {display: 'block'}}
                    onClick={() => onRequest(offset, false)}
                    disabled={newCharLoading}
                    >LOAD MORE</button>
            </div>
        </div>
    )
}

CharList.propTypes = {
    onCharIdSelect: PropTypes.func
}

export default CharList;