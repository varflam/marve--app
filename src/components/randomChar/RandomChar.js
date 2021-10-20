import { Component } from 'react';
import Spinner from '../spinner/Spinner';
import Error from '../error/Error';
import MarvelService from '../../services/MarvelService';

import './randomChar.sass';

class RandomChar extends Component {

    state = {
        char: {},
        loading: true,
        error: false
    }

    marvelService = new MarvelService();

    componentDidMount() {
        this.updateChar();
        // this.timerId = setInterval(this.updateChar, 3000)
    }

    // componentWillUnmount() {
    //     clearInterval(this.timerId);
    // }

    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false,
        });
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
        })
    }

    updateChar = () => {
        this.setState({
            loading: true,
            error: false
        });
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
        this.marvelService
            .getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError)
    }

    render() {
        const {char, loading, error} = this.state;
        
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
                        onClick={this.updateChar}>TRY IT</button>
                </div>
            </div>
        )
    }
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