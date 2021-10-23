import { Component } from 'react';
import PropTypes from 'prop-types';
import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import Error from '../error/Error';

import './charList.sass';

class CharList extends Component {

    state = {
        charList: [],
        loading: true,
        error: false,
        offset: 210,
        newCharLoading: false,
        charEnded: false,
    }

    marvelService = new MarvelService();

    componentDidMount() {
        this.onRequest();
    }

    onRequest = (offset) => {
        this.onCharLoading();

        this.marvelService
            .getAllCharacters(offset)
            .then(this.onLoadedList)
            .catch(this.onError)
    }

    onCharLoading = () => {
        this.setState({
            newCharLoading: true
        })
    }

    onSelectChar = (id) => {
        this.props.onCharIdSelect(id);
        window.scrollTo({ top: 450, behavior: 'smooth' });
    }

    onLoadedList = (newCharList) => {
        let ended = false;

        if(newCharList.length < 9 || this.state.offset === 1550) {
            ended = true;
        }

        this.setState(({charList, offset}) => ({
            charList: [...charList, ...newCharList],
            loading: false,
            newCharLoading: false,
            offset: offset + 9,
            charEnded: ended
        }));
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
        })
    }

    renderCharItems = (charList) => {
        const list = charList.map(item => {
            return(
                <li className="char-list__item"
                    key={item.id}
                    onClick={() => this.onSelectChar(item.id)}>
                        <img src={item.thumbnail} alt={item.name} className="char-list__img" />
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


    render() {
        const {charList, loading, error, newCharLoading, charEnded, offset} = this.state;

        const items = this.renderCharItems(charList);
        const btn =                 
        <div className="btn__wrapper">
            <button
                type="button"
                className="btn btn_long"
                style={charEnded ? {display: 'none'} : {display: 'block'}}
                onClick={() => this.onRequest(offset)}
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
}

CharList.propTypes = {
    onCharIdSelect: PropTypes.func
}

export default CharList;