import { lazy, Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
// @ts-ignore shut up typescript
const Navbar = lazy(async () => import('iHaveNavbar/Navbar'));
// @ts-ignore shut up typescript
const Button = lazy(async () => import('iHaveNavbar/Button'));

function App() {
    return (
        <div className="App">
            I am using the below navbar from the other app
            <Suspense fallback={<p>Wait</p>} >
                <Navbar />
                <Button />
            </Suspense>
        </div>
    );
}

export default App;
