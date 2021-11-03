import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AppHeader from '../appHeader/AppHeader';
import { MainPage, ComicsPage } from '../pages';

import './app.sass';
import '../../style/buttons.sass';

const App = () => {

    return(
        <Router>
            <div className="app">
                <main>
                    <AppHeader/>
                    <Switch>
                        <Route exact path="/">
                            <MainPage/>
                        </Route>
                        <Route exact path="/comics">
                            <ComicsPage/>
                        </Route>
                    </Switch>
                </main>
            </div>
        </Router>
    )
} 


export default App;