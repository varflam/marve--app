import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AppHeader from '../appHeader/AppHeader';
import Spinner from '../spinner/Spinner';
import { Page404 } from '../pages';

import './app.sass';
import '../../style/buttons.sass';

const MainPage = lazy(() => import('../pages/mainPage/MainPage'));
const ComicsPage = lazy(() => import('../pages/ComicsPage'));
const SingleItemChar = lazy(() => import('../pages/singleItemChar/SingleItemChar'));
const SingleItemComic = lazy(() => import('../pages/singleItemComic/SingleItemComic'));
const SingleItem = lazy(() => import('../pages/SingleItem'));



const App = () => {
    return(
        <Router>
            <div className="app">
                <main>
                    <AppHeader/>
                    <Suspense fallback={<Spinner/>}>
                        <Routes>
                            <Route path="/" element={<MainPage/>}/>
                            <Route path="/comics" element={<ComicsPage/>}/>
                            <Route path="/comics/:id" 
                                   element={
                                        <SingleItem 
                                        Component={SingleItemComic} 
                                        dataType='comic'/>}/>
                            <Route path="/characters/:id" 
                                   element={
                                        <SingleItem 
                                        Component={SingleItemChar} 
                                        dataType='character'/>}/>
                            <Route path="*" element={<Page404/>}/>
                        </Routes>
                    </Suspense>
                </main>
            </div>
        </Router>
    )
} 


export default App;