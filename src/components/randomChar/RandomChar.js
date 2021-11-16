import { useState, useEffect } from 'react';
import Spinner from '../spinner/Spinner';
import Error from '../error/Error';
import useMarvelService from '../../services/MarvelService';

import './randomChar.sass';

const RandomChar = () => {
    const [char, setChar] = useState({});

    const {loading, error, getCharacter, clearError} = useMarvelService();

    useEffect(() => updateChar(), []);

    const onCharLoaded = (char) => {
        setChar(char);
    }

    const updateChar = () => {
        clearError();
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
        getCharacter(id)
            .then(onCharLoaded);
    }
        
        const spinner = loading ? <Spinner/> : null;
        const errorMessage = error ? <Error/> : null;
        const content = !(loading || error) ? <View char={char}/> : null;


    return (
        <div className="random">
            <div className="random__char">
            {content}
            {errorMessage}
            {spinner}
            </div>
            <div className="random__try">
                <p className="random__today">
                Random character for today! 
                <br/> 
                Do you want to get to know him better?
                <br/> <br/>
                Or choose another one</p>
                <button 
                    type="button" 
                    className="btn btn_gray-bg"
                    onClick={updateChar}>TRY IT</button>
            </div>
        </div>
    )
} 

const View = ({char}) => {
    const {name, description, thumbnail, homepage, wiki} = char;
    const showDescr = !description ?  'Sorry, description is not available' : `${description.substring(0, 210)}...`;

    return(
        <>
            <div className="random__wrapper">
                <img src={thumbnail} alt="Random Character" />
                <div className="random__info">
                    <h2 className="random__name">{name}</h2>
                    <p className="random__descr">{showDescr}</p>
                </div>
            </div>
            <div className="random__btns">
                    <button type="button" className="btn"><a href={homepage}>HOMEPAGE</a></button>
                    <button type="button" className="btn btn_gray"><a href={wiki}>WIKI</a></button>
            </div>
        </>
    )
}

export default RandomChar;