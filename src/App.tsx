import React, {useEffect} from 'react';
import './output.css';
import Login from "./components/login/Login";


function App() {
    useEffect(() => {
        document.body.classList.add('body');
        document.documentElement.classList.add('html')
    })
    return (
        <Login/>
    );
}

export default App;
