import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import Error from '../error/Error';

import './comicsList.sass';

const setContent = (process, Component, newItemLoading) => {
    switch (process) {
        case 'waiting':
            return <Spinner/>
        case 'loading':
            return newItemLoading ? <Component/> : <Spinner/>
        case 'confirmed':
            return <Component/>
        case 'error':
            return <Error/>
        default:
            throw new Error('Unexpected error');
    }
}

const ComicsList = () => {
    const [comics, setComics] = useState([]);
    const [offset, setOffset] = useState(210);
    const [newComicsLoading, setNewComicsLoading] = useState(false);
    const [comicsEnded, setComicsEnded] = useState(false);

    const {getAllComics, setProcess, process} = useMarvelService();

    const onRequest = (offset, initial) => {
        initial ? setNewComicsLoading(false) : setNewComicsLoading(true);
        
        getAllComics(offset)
            .then(onLoadedList)
            .then(() => setProcess('confirmed'));
    }

    // eslint-disable-next-line
    useEffect(() => onRequest(offset, true), []);

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
        return comicsList.map((item, i) => {
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
    }

    const elements = useMemo(() => {
        return setContent(process, () => renderComicsList(comics), newComicsLoading);
        // eslint-disable-next-line
    }, [process])

    return(
        <>
            <ul className="comics-list">
                {elements}
            </ul>
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