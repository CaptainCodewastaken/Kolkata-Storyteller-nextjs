import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">About Us</h1>
        <p>About page content goes here.</p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
