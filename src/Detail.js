import React from "react";

import { useParams } from "react-router-dom";

export default function Detail() {
  const params = useParams();

  const [pic, setpic] = React.useState("");

  React.useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())

      .then((data) => setpic(data.vans));
  }, [params.id]);

  return (
    <div>
      <img className="halogen" alt="" src={pic.imageUrl} />

      <button
        style={{
          backgroundColor:
            pic.type === "simple"
              ? "blue"
              : "" || pic.type === "rugged"
              ? "black"
              : "" || pic.type === "luxury"
              ? "orange"
              : ""
        }}
        className="meetup"
      >
        {pic.type}
      </button>

      <h1>{pic.name}</h1>

      <h2> ${pic.price}/day </h2>

      <p>{pic.description}</p>
    </div>
  );
}
