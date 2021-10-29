import { useState, useEffect } from 'react';
import Spinner from '../spinner/Spinner';
import Error from '../error/Error';
import MarvelService from '../../services/MarvelService';

import './randomChar.sass';

const RandomChar = () => {

    // state = {
    //     char: {},
    //     loading: true,
    //     error: false
    // }
    const [char, setChar] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const marvelService = new MarvelService();

    // componentDidMount() {
    //     this.updateChar();
    //     // this.timerId = setInterval(this.updateChar, 3000)
    // }
    useEffect(() => updateChar(), []);

    // componentWillUnmount() {
    //     clearInterval(this.timerId);
    // }

    const onCharLoaded = (char) => {
        // this.setState({
        //     char,
        //     loading: false,
        // });
        setChar(char);
        setLoading(false);
    }

    const onError = () => {
        // this.setState({
        //     loading: false,
        //     error: true
        // })
        setLoading(false);
        setError(true);
    }

    const updateChar = () => {
        // this.setState({
        //     loading: true,
        //     error: false
        // });
        setLoading(true);
        setError(false);
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
        marvelService
            .getCharacter(id)
            .then(onCharLoaded)
            .catch(onError)
    }

        // const {char, loading, error} = this.state;
        
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

    return(
        <>
            <div className="random__wrapper">
                <img src={thumbnail} alt="Random Character" />
                <div className="random__info">
                    <h2 className="random__name">{name}</h2>
                    <p className="random__descr">{description}</p>
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