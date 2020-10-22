import React from "react";
import SingleSelect from "./Select";
import { Link } from "react-router-dom";

export default class Home extends React.Component {
  render() {
    let { images } = this.props;
    console.log(images);
    if (!images) {
      return (
        <div class="loader">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
      );
    }
    return (
      <>
        <section className="text-gray-700 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Gallery
              </h1>
              <div className="select-div">
                <SingleSelect />
              </div>
            </div>
            <div className="gallery-div grid">
              {images.map((elem) => {
                return (
                  <div>
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
          </div>
        </section>
      </>
    );
  }
}
