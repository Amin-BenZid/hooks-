import React from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import { Link } from "react-router-dom";

const Description = ({ movies }) => {
  const { title } = useParams();
  var movn;
  movies.find((e) => (movn = e = title));
  var mova = movies.find((e) => e.title == movn);

  return (
    <div>
      <h1>{movn}</h1>
      <p>{mova.des}</p>
      <ReactPlayer url={mova.trailer} />
      <Link to="/"> Home</Link>
    </div>
  );
};
export default Description;
