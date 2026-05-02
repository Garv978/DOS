import Featuresection from '../Components/Landingparts/Featuresection.jsx';
import Footer from '../Components/Landingparts/Footer.jsx';
import Herosection from '../Components/Landingparts/Herosection.jsx';
import HospitalCtA from '../Components/Landingparts/HospitalCtA.jsx';
import Navbar from '../Components/Navbar.jsx';
import Statssection from '../Components/Landingparts/Statssection.jsx';

function LandingPage() {
  return (
    <>
      <Navbar />
      <Herosection
        midtext="Global Open-Source Disease Surveillance"
        smalltext="Open-source SMS platform for real-time outbreak alerts. Protecting communities worldwide through innovative technology."
        buttontext1="Register Now"
        buttontext2="Learn More"
      />
      <Statssection />
      <Featuresection question="Why Choose Our Platform?" answer=" Designed for the society with cutting-edge technology and user-focused features"/>
      <HospitalCtA text1="Ready to improve disease surveillance?" text2="Join hundreds of health organizations using our platform to detect outbreaks faster and save lives." buttontext1="Register for hospitals" buttontext2="Login for hospitals" />
      <Footer />
    </>
  );
}

export default LandingPage;
