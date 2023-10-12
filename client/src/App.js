import React from 'react'; 
import { Route, Routes } from 'react-router-dom';
//Styles
import './Styles/index.css'
import './Styles/Header.css'
import './Styles/Post.css'
import './Styles/Menu.css'
import './Styles/LoginAndRegister.css'
//Components
import Header from './Components/Header';
import Post from './Components/Post';
import Menu from './Components/Menu';
import Login from './Components/Login';
import Register1 from './Components/Register1';
import Register2 from './Components/Register2';
import Register3 from './Components/Register3';

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
                <Route 
                    path='/register/step1'
                    element={
                        <>
                            <Register1 />
                        </>
                    }
                />
                <Route 
                    path='/register/step2'
                    element={
                        <>
                            <Register2 />
                        </>
                    }
                />
                <Route 
                    path='/register/step3'
                    element={
                        <>
                            <Register3 />
                        </>
                    }
                />
            </Routes>         
        </div>
    )
}
export default App;