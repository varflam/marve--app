import { Component } from 'react';
import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import Error from '../error/Error';

import './charList.sass';

class CharList extends Component {

    state = {
        charList: [],
        loading: true,
        error: false
    }

    marvelService = new MarvelService();

    componentDidMount() {
        this.listUpdate();
    }

    listUpdate = () => {
        this.marvelService
            .getAllCharacters()
            .then(this.onLoadedList)
            .catch(this.onError)
    }

    onLoadedList = (charList) => {
        this.setState({
            charList,
            loading: false
        });
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
        })
    }


    render() {
        const {charList, loading, error} = this.state;
        
        const spinner = loading ? <Spinner/> : null;
        const errorMessage = error ? <Error/> : null;
        const content = !(loading || error) ? <View charList={charList} onCharIdSelect={this.props.onCharIdSelect}/> : null;

        return(
            <div>
                {content}
                {errorMessage}
                {spinner}
            </div>
        )
    }
}

const View = ({charList, onCharIdSelect}) => {
    const list = charList.map(item => {
        return(
            <li className="char-list__item"
                key={item.id}
                onClick={() => onCharIdSelect(item.id)}>
                    <img src={item.thumbnail} alt={item.name} className="char-list__img" />
                    <h3 className="char-list__name">{item.name}</h3>
            </li> 
        )
    })

    return(
        <>
            <ul className="char-list">
                {list}
            </ul>
            <div className="btn__wrapper">
                    <button
                        type="button"
                        className="btn btn_long"
                        >LOAD MORE</button>
            </div>
        </>
    )
}

export default CharList;