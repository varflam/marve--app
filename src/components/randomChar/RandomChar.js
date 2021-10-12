import { Component } from 'react';
import MarvelService from '../../services/MarvelService';

import './randomChar.sass';

class RandomChar extends Component {
    constructor(props) {
        super(props);

        this.updateChar();
    }


    state = {
        char: {
        }
    }

    marvelService = new MarvelService();

    onCharLoaded = (char) => {
        this.setState({char});
    }

    updateChar = () => {
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
        this.marvelService.
            getCharacter(id).
            then(this.onCharLoaded);
    }

    render() {
        const {char: {name, description, thumbnail, homepage, wiki}} = this.state;
        return (
            <div className="random">
                <div className="random__char">
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
                </div>
                <div className="random__try">
                    <p className="random__today">
                    Random character for today! 
                    <br/> 
                    Do you want to get to know him better?
                    <br/> <br/>
                    Or choose another one</p>
                    <button type="button" className="btn btn_gray-bg">TRY IT</button>
                </div>
            </div>
        )
    }
} 

export default RandomChar;