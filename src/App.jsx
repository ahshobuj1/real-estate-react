import {Outlet} from 'react-router-dom';
import Footer from './layout/Footer/Footer';
import Header from './layout/Header/Header';

function App() {
    return (
        <>
            <Header />
            <h2 className="text-2xl">Setup 2.0 </h2>
            <Outlet />
            <Footer />
        </>
    );
}

export default App;
