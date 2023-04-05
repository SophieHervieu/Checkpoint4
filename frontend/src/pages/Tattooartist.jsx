import Navbar from "../components/Navbar";
import Card from "../components/Card";

export default function Tattooartist() {
  return (
    <div className="tattooartistPage">
      <Navbar />
      <div className="cards">
        <Card />
      </div>
      <div className="addingButton">
        <div className="addATattooArtist">
          <p>Ajouter un tatoueur</p>
          <button type="button" className="plusBtn">
            +
          </button>
        </div>
      </div>
    </div>
  );
}
