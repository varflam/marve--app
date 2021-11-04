import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import Error from '../error/Error';

import './comicsList.sass';

const ComicsList = () => {
    const [comics, setComics] = useState([]);
    const [offset, setOffset] = useState(210);
    const [newComicsLoading, setNewComicsLoading] = useState(false);
    const [comicsEnded, setComicsEnded] = useState(false);

    const {getAllComics, error, loading} = useMarvelService();

    useEffect(() => onRequest(offset, true), []);

    const onRequest = (offset, initial) => {
        initial ? setNewComicsLoading(false) : setNewComicsLoading(true);
        
        getAllComics(offset)
            .then(onLoadedList);
    }

    const onLoadedList = (newComics) => {
        let ended = false;

        if(newComics.length < 8 || offset === 50179) {
            ended = true;
        }

        setComics(charList => [...charList, ...newComics]);
        setNewComicsLoading(false);
        setOffset(offset => offset + 9);
        setComicsEnded(ended);
    }

    const renderComicsList = (comicsList) => {
        const list = comicsList.map((item, i) => {
            return (
                <li className="comics-list__item"
                    key={i}>
                    <Link to={`/comics/${item.id}`}>
                        <img src={item.thumbnail} alt={item.title} className="comics-list__img" />
                        <h3 className="comics-list__title">{item.title}</h3>
                        <p className="comics-list__price">9.99$</p>
                    </Link>
                </li>
            )
        });

        return(
            <ul className="comics-list">
                {list}
            </ul>
        )
    }

    const items = renderComicsList(comics);

    const spinner = loading && !newComicsLoading ? <Spinner/> : null;
    const errorMessage = error ? <Error/> : null;

    return(
        <>
            {items}
            {errorMessage}
            {spinner}
            <div className="btn__wrapper">
                <button
                    type="button"
                    className="btn btn_long"
                    style={comicsEnded ? {display: 'none'} : {display: 'block'}}
                    onClick={() => onRequest(offset, false)}
                    disabled={newComicsLoading}
                    >LOAD MORE</button>
            </div>
        </>
    )
}

export default ComicsList;