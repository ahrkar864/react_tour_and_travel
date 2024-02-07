import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImage from "../assets/3.jpg";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Service() {
    return(
        <>
            <Navbar />
                <Hero
                    cName="hero-mid"
                    title="Service"
                    heroImg={AboutImage}
                    btnClass="hide"
                />
                <Trip />
            <Footer />
        </>
    )
}

export default Service;