import "./HeroStyles.css";

function Hero(props) {
    return(
        <>
            <div className={props.cName}>
                <img alt="HeroImg" src={props.heroImg}/>
            {/* <div className="hero-text">
                <h1>Your Journey Your Stroy</h1>
                <p>Choose Your Favorite Desnition.</p>
                <a href="">Travel Plan</a>
            </div> */}
                <div className="hero-text">
                    <h1>{props.title}</h1>
                    <p>{props.text}</p>
                    <a href={props.url} className={props.btnClass}>{props.buttonText}</a>
                </div>
            </div>
        </>
    );
}

export default Hero;