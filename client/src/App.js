import React from 'react'; 
import { Route, Routes } from 'react-router-dom';
//Styles
import './Styles/index.css'
import './Styles/Header.css'
import './Styles/Post.css'
import './Styles/Menu.css'
import './Styles/Login.css'
//Components
import Header from './Components/Header';
import Post from './Components/Post';
import Menu from './Components/Menu';
import Login from './Components/Login';

function App(){
    return(
        <div className="App">
            <Routes>
                <Route 
                    path='/'
                    element={
                        <>
                            <Header />
                            <div className='pb-5'>
                                <Post />
                                <Post />
                            </div>         
                            <Menu />
                        </>
                    }
                />
                <Route 
                    path='/login'
                    element={
                        <>
                            <Login />
                        </>
                    }
                />
            </Routes>         
        </div>
    )
}
export default App;