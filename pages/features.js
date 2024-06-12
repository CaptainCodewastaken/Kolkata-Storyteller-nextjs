import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Features = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Features</h1>
        <p>Features page content goes here.</p>
      </div>
      <Footer />
    </div>
  );
};

export default Features;
