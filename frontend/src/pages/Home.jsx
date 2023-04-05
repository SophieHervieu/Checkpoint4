import Navbar from "../components/Navbar";
import firstImage from "../assets/ImageTattoo1.png";
import secondImage from "../assets/ImageTattoo2.png";
import thirdImage from "../assets/ImageTattoo3.png";

export default function Home() {
  return (
    <div className="homePage">
      <Navbar />
      <div className="images">
        <img src={firstImage} alt="jambes et bras tatoués" />
        <img src={secondImage} alt="tatouage traditionnel japonais" />
        <img src={thirdImage} alt="tatouage arbre sans feuilles" />
      </div>
    </div>
  );
}
