import "./TripStyles.css";
import TripData from "./TripData";
import Popa1 from '../assets/popa1.jpg';
import Mandalay1 from "../assets/mandalay1.jpg"

function Trip() {
    return (
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps.</p>
            <div className="tripcard">
                <TripData
                    image={Popa1}
                    heading = "Trip in Popa" 
                    text="Mount Popa, often referred to as the Mount Olympus of Myanmar is a striking extinct volcano that rises dramatically from the plains of the central region, about 50 kilometers southeast of Bagan"
                />
                <TripData
                    image={Mandalay1}
                    heading = "Trip in Mandalay" 
                    text="Mandalay, the last royal capital of Myanmar, is a city steeped in history and culture, serving as a vibrant testament to the country's rich heritage."
                />
                <TripData
                    image={Popa1}
                    heading = "Trip in Popa" 
                    text="Mount Popa, often referred to as the Mount Olympus of Myanmar is a striking extinct volcano that rises dramatically from the plains of the central region, about 50 kilometers southeast of Bagan"
                />

            </div>
        </div>
    );
}

export default Trip;