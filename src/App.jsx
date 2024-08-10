import {Outlet} from 'react-router-dom';
import Footer from './layout/Footer/Footer';
import Navbar from './layout/Navbar/Navbar';

function App() {
    return (
        <div className="max-w-6xl mx-auto">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
}

export default App;
