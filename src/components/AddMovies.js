import { useImperativeHandle, useState } from "react";
import "./add.css";

function AddMovies(add) {
  const [data, setData] = useState({
    title: "",
    des: "",
    url: "",
    rating: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const handelInputChangeTitle = (e) => {
    setData({ ...data, title: e.target.value });
  };
  const handleInputChangeDes = (e) => {
    setData({ ...data, des: e.target.value });
  };
  const handelInputChangeUrl = (e) => {
    setData({ ...data, url: e.target.value });
  };
  const handelInputChangeRating = (e) => {
    setData({ ...data, rating: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="inputsec">
      <div className="t">
        <h6 style={{ fontSize: "30px", marginLeft: "24px" }}> Add Movie</h6>
        <form onSubmit={handleSubmit}>
          <div className="in1">
            <input
              placeholder="Movie title"
              value={data.title}
              onChange={handelInputChangeTitle}
            ></input>
          </div>
          <br />
          <div className="in1">
            <input
              placeholder="Movie des"
              value={data.des}
              onChange={handleInputChangeDes}
            ></input>
          </div>
          <br />
          <div className="in1">
            <input
              placeholder="Movie url poster"
              value={data.url}
              onChange={handelInputChangeUrl}
            ></input>
          </div>
          <br />
          <div className="in1">
            <input
              placeholder="Movie rating"
              value={data.rating}
              onChange={handelInputChangeRating}
            ></input>
          </div>
          <br />
          <button type="submit" onClick={() => add.addMovies(data)}>
            Add!
          </button>
        </form>
      </div>
    </div>
  );
}
export default AddMovies;
