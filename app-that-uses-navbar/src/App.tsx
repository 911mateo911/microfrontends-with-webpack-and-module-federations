import './App.css';
// @ts-ignore
import Navbar from 'iHaveNavbar/Navbar';
// @ts-ignore shut up typescript
import Button from 'iHaveNavbar/Button';

function App() {
    return (
        <div className="App">
            I am using the below navbar from the other app
            <Navbar />
            <Button />
        </div>
    );
}

export default App;
