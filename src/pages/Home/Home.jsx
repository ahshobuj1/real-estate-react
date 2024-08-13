import Discount from '../../components/Discount';
import Teams from '../../components/TeamMember/Teams';
import Header from '../../layout/Header/Header';
import About from '../About/About';
import Blogs from '../Blog/Blogs';
import Reservation from '../Reservation/Reservation';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header />
            <About />
            <Services />
            <Teams />
            <Discount />
            <Blogs />
            <Reservation />
        </div>
    );
};

export default Home;
