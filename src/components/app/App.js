import AppHeader from '../appHeader/AppHeader';
import decoration from '../../resources/img/bg.jpg';

import './app.sass';

const App = () => {
    return(
        <div className="app">
            <AppHeader/>
            <img 
                className="bg-decoration"
                src={decoration} 
                alt="Vision" />
        </div>
    )
}

export default App;