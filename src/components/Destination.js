import BaganImage1 from "../assets/bagan1.jpg";
import BaganImage2 from "../assets/bagan2.jpg";
import KalawImage1 from "../assets/kalaw1.jpg";
import KalawImage2 from "../assets/kalaw2.jpg";
import "./DestinationStyles.css";
import DestinationData from "./DestinationData";
const Destination = () => {
    return(
        <div className="destination">
            <h1>Popular Destination</h1>
            <p>Tours give you the opportunity to see ak lot, within a time frame</p>
            <DestinationData 
                className="first-des"
                heading="Bangan"
                text="Bagan, nestled in the Mandalay Region of Myanmar, is a captivating destination that beckons travelers with its ancient allure and spiritual essence. This historic city, once the capital of the Pagan Empire, hosts over 2,000 Buddhist monuments dotting its vast landscape, ranging from majestic temples and stupas to intricate murals and statues that date back to the 11th and 13th centuries. A journey to Bagan is a voyage through time, where the golden hues of the sun illuminate the timeless architecture, creating a surreal atmosphere at dawn and dusk. Beyond its archaeological treasures, Bagan invites visitors to explore its vibrant local life, traditional markets, and scenic surroundings by bike, hot air balloon, or on foot, offering a deeply immersive cultural experience. Whether one seeks spiritual contemplation or the thrill of exploration, Bagan stands as a testament to Myanmar's rich history and enduring beauty, making it an unforgettable destination on any traveler's itinerary."
                img1={BaganImage1}
                img2={BaganImage2}
            />
            <DestinationData 
                className="first-des-reverse"
                heading="Kalaw"
                text="Kalaw, perched in the western Shan State of Myanmar, is a hidden gem that offers travelers a refreshing retreat from the hustle and bustle of city life. This charming hill station, established by British colonialists as a summer resort, is enveloped by cool, pine-clad mountains and is renowned for its serene atmosphere and breathtaking natural beauty. Kalaw stands as a gateway to some of Myanmar's most picturesque trekking routes, leading adventurers through ethnic hill tribe villages, lush tea plantations, and tranquil bamboo forests, offering a unique glimpse into the rural lifestyle and cultural diversity of the region. The town itself, with its colonial-era buildings, vibrant markets, and Buddhist temples, exudes a quaint and cozy vibe, inviting visitors to explore its rich heritage and peaceful surroundings at a leisurely pace. Whether you're an avid trekker in search of unforgettable trails or a traveler seeking solace and inspiration in nature, Kalaw promises an enriching and soul-soothing experience, making it a must-visit destination for those looking to uncover the quieter, more untouched side of Myanmar."
                img1={KalawImage1}
                img2={KalawImage2}
            />
        </div>
    );
};
export default Destination