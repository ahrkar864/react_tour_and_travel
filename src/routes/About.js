import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImage from "../assets/2.jpg";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
function About () {
    return(
        <>
        <Navbar />
           <Hero
           cName="hero-mid"
           title="About"
           heroImg={AboutImage}
           btnClass="hide"
           />
            <AboutUs />
            <Footer />
        </>
    )
}

export default About;