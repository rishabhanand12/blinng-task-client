import React from "react";
import { Link } from "react-router-dom";

export default function Gallery(props) {
  return (
    <div className="gallery-div grid">
      {props.images.map((elem, index) => {
        return (
          <div key={index}>
            <Link to={`/image/${elem.id}`}>
              <img src={elem.image} alt="" />
            </Link>
            <a className="more-btn" target="blank" href={elem.url}>
              View More
            </a>
          </div>
        );
      })}
    </div>
  );
}
