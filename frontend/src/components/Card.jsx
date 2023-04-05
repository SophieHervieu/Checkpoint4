import { useState, useEffect } from "react";

import axios from "axios";

export default function Card() {
  const [tattooArtists, setTattooArtists] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/tattooArtist`).then((res) => {
      setTattooArtists(res.data);
    });
  }, []);

  return (
    <div className="cardsList">
      {/* <div className="card"> */}
      {tattooArtists.map((tattooArtist) => (
        <div className="eachCard">
          <div key={tattooArtist.id}>
            <h2>{tattooArtist.Name}</h2>
            <p>{tattooArtist.description}</p>
          </div>
        </div>
      ))}
      {/* </div> */}
    </div>
  );
}
