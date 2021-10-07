import AppHeader from '../appHeader/AppHeader';
import RandomChar from '../randomChar/RandomChar';
import CharList from '../charList/CharList';
import CharInfo from '../charInfo/CharInfo';

import decoration from '../../resources/img/bg.jpg';

import './app.sass';
import '../../style/buttons.sass';

const App = () => {
    return(
        <div className="app">
            <AppHeader/>
            <RandomChar/>
            <div className="app__wrapper">
                <CharList/>
                <CharInfo/>
            </div>
            <img 
                className="bg-decoration"
                src={decoration} 
                alt="Vision" />
        </div>
    )
}

export default App;