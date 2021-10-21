import { Component } from 'react';
import AppHeader from '../appHeader/AppHeader';
import RandomChar from '../randomChar/RandomChar';
import CharList from '../charList/CharList';
import CharInfo from '../charInfo/CharInfo';
// import Skeleton from '../skeleton/Skeleton';
// import Advert from '../advert/Advert';
// import ComicsList from '../comicsList/ComicsList';
// import SingleComic from '../singleComic/SingleComic';

import './app.sass';
import '../../style/buttons.sass';

class App extends Component {

    state = {
        charId: null,
    }

    onCharIdSelect = (id) => {
        this.setState({
            charId: id
        });
    }

    render() {
        return(
            <div className="app">
                <main>
                    <AppHeader/>
                    <RandomChar/>
                    <div className="char__content">
                        <CharList onCharIdSelect={this.onCharIdSelect}/>
                        <CharInfo charId={this.state.charId}/>
                    </div>
                </main>
            </div>
        )
    }
} 

export default App;