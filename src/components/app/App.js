import { Component } from 'react';
import AppHeader from '../appHeader/AppHeader';
import RandomChar from '../randomChar/RandomChar';
import CharList from '../charList/CharList';
import CharInfo from '../charInfo/CharInfo';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
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
                    <ErrorBoundary>
                        <RandomChar/>
                    </ErrorBoundary>
                    <div className="char__content">
                        <ErrorBoundary>
                            <CharList onCharIdSelect={this.onCharIdSelect}/>
                        </ErrorBoundary>
                        <ErrorBoundary>
                            <CharInfo charId={this.state.charId}/>
                        </ErrorBoundary>
                    </div>
                </main>
            </div>
        )
    }
} 


export default App;