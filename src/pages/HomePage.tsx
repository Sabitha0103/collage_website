import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import About from '../components/About';
import FacultySpotlight from '../components/FacultySpotlight';
import CampusLife from '../components/CampusLife';
import AlumniSuccess from '../components/AlumniSuccess';
import Placements from '../components/Placements';
import UpcomingEvents from '../components/UpcomingEvents';
import Admissions from '../components/Admissions';
import Footer from '../components/Footer';
import Accreditations from '../components/Accreditations';
import GlobalTieUps from '../components/GlobalTieUps';
import LeadershipVision from '../components/LeadershipVision';
import SocialMediaFeeds from '../components/SocialMediaFeeds';
import CSRActivities from '../components/CSRActivities';
import StudentAchievements from '../components/StudentAchievements';

const HomePage: React.FC = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main>
                <Hero />
                <Accreditations />
                <Stats />
                <About />
                <GlobalTieUps />
                <LeadershipVision />
                <FacultySpotlight />
                <CampusLife />
                <Placements />
                <AlumniSuccess />
                <StudentAchievements />
                <UpcomingEvents />
                <CSRActivities />
                <SocialMediaFeeds />
                <Admissions />
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;
