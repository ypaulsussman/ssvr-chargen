import React, { Component } from "react";
import mapWithGrid from "./vilhonReachGrid.png";
import data from "./legendData.json";
import "./MapQuiz.scss";

export default class MapQuiz extends Component {
  constructor() {
    super();
    this.state = { ...data, openedLandmark: {} };
  }

  openLandmark = (landmark) => {
    this.setState({
      openedLandmark: landmark,
    });
  };

  render() {
    const { openedLandmark, legend } = this.state;

    return (
      <div className="mapquiz">
        <h1>The Vilhon Reach:</h1>
        <main className="mapquiz__content">
          <section className="map-and-legend">
            <div className="map__wrapper">
              <map name="legend_links">
                {legend.map((landmark) => (
                  <area
                    alt={landmark.name}
                    key={landmark.name}
                    shape="poly"
                    coords={landmark.coordinates}
                    onClick={() => {
                      this.openLandmark(landmark);
                    }}
                  />
                ))}
              </map>
              <img
                src={mapWithGrid}
                alt="Map of the Vilhon Reach"
                useMap="#legend_links"
              />
            </div>
            <div className="legend__wrapper">
              <h2>{openedLandmark.name}</h2>

              <p className="legend__description">
                {openedLandmark.description}
              </p>
            </div>
          </section>
          <p>*grid hexes are 60 miles, or ~2-3 days&apos; overland travel</p>
          <div className="location-list__wrapper">
            <p>
              also it turns out styling the links on the map above is gonna be a
              huge pain in the ass, so instead here&apos;s a list of locations above
              w/ clickable descriptions (in descending order of importance): The
              Vilhon Reach, Sespech, Mimph (where you start), Ormpetarr, Fort
              Arran, Chondath, Arrabar, Turmish, The Chondalwood, The Nagawater,
              The Golden Plains, Nimpeth, Hlondeth.
            </p>
          </div>
          {/* <section className="quiz__content"></section> */}
        </main>
      </div>
    );
  }
}
