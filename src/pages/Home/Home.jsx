import Teams from '../../components/TeamMember/Teams';
import Header from '../../layout/Header/Header';
import About from '../About/About';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header />
            <About />
            <Services />
            <Teams />
        </div>
    );
};

export default Home;
