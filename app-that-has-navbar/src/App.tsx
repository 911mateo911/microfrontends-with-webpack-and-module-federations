import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
// @ts-ignore 
import { useCount } from 'iUseTheNavbar/useCount';

function App() {
    const [count, inc] = useCount();

    return (
        <div className="App">
            <Navbar />
            <button onClick={inc} >Inc</button>
            {count}
        </div>
    );
}

export default App;
