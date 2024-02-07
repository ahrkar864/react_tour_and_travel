import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HomeImage from "../assets/1.jpg";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer"

function Home () {
    return(
        <>
            <Navbar />
            <Hero 
                cName="hero"
                title="Your Journey Your Stroy"
                heroImg={HomeImage}
                text="Choose Your Favorite Destination"
                buttonText="Travel Plan"
                url="/"
                btnClass="show"
            />
            <Destination />
            <Trip />
            <Footer />
        </>
    )
}

export default Home;