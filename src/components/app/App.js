import AppHeader from '../appHeader/AppHeader';
// import RandomChar from '../randomChar/RandomChar';
// import CharList from '../charList/CharList';
// import CharInfo from '../charInfo/CharInfo';
// import Skeleton from '../skeleton/Skeleton';
import Advert from '../advert/Advert';
import ComicsList from '../comicsList/ComicsList';

import decoration from '../../resources/img/bg.jpg';

import './app.sass';
import '../../style/buttons.sass';

const App = () => {
    return(
        <div className="app">
            <AppHeader/>
            <Advert/>
            <ComicsList/>
            <img 
                className="bg-decoration"
                src={decoration} 
                alt="Vision" />
        </div>
    )
}

export default App;