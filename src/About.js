import "./styles.css";
import React from "react";

import {Link} from "react-router-dom"

export default function About() {
  const [vans, setVans] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())

      .then((data) => setVans(data.vans));
  }, []);

  const show = vans.map((pre, index) => (
    <div key={index} className="foto1">

      <Link className="baralink" to={`/${pre.id}`}>
      <img className="pic" alt="" src={pre.imageUrl} />

      <div  className="japan">
        <h3>{pre.name}</h3>
        <h5>${pre.price}/day</h5>

        <button
          style={{
            backgroundColor:
              pre.type === "simple"
                ? "blue"
                : "" || pre.type === "rugged"
                ? "black"
                : "" || pre.type === "luxury"
                ? "orange"
                : ""
          }}
          className="type"
        >
          {pre.type}
        </button>
      </div>
       
       </Link>

    </div>
  ));

  return <div className="foto">{show}</div>;
}
