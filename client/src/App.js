import React from 'react'; 
//Styles
import './Styles/index.css'
import './Styles/Header.css'
import './Styles/Post.css'
import './Styles/Menu.css'
//Components
import Header from './Components/Header';
import Post from './Components/Post';
import Menu from './Components/Menu';

function App(){
    return(
        <div className="App">
            <Header />
            <Post />
            <Post />
            <Menu />
        </div>
    )
}
export default App;