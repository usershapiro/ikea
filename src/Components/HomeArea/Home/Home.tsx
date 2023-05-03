import "./Home.css";
import logo from "../../../assests/ikealogo.png"
function Home(): JSX.Element {
    return (
        <div className="Home">
			<h2>IKEA-FURNITURE</h2>
            <img src={logo} alt="Logo" />
        </div>
    );
}

export default Home;
