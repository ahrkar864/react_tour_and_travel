import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImage from "../assets/4.jpg";
import ContactForm from "../components/ContactForm"
import Footer from "../components/Footer";
function Contact() {
    return(
        <>
        <Navbar />
           <Hero
           cName="hero-mid"
           title="Contact"
           heroImg={AboutImage}
           btnClass="hide"
           />
           <ContactForm />
        <Footer />
        </>
    )
}

export default Contact;