import Navbar from './Navbar.js';
import Timebar from './Timebar.js';
import StaffList from './StaffList.js';
const Home = () => {
    return <div className='height'>
        <section>
            <Navbar />
        </section>
        <div className='h100 flex'>
            <Timebar />
            <StaffList />
        </div>
    </div>;
};

export default Home;