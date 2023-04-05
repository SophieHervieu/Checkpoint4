import { useState, useEffect } from "react";

import axios from "axios";

import Navbar from "../components/Navbar";

export default function City() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/city`).then((res) => {
      setCities(res.data);
    });
  }, []);

  return (
    <div className="city">
      <Navbar />
      <div className="cityList">
        {cities.map((city) => (
          <div className="eachCity">
            <div key={city.id}>
              <h2>{city.City}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
