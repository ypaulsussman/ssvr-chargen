import React, { Component } from "react";
import mapWithLegend from "./Auvandell_sites.jpg";
import data from "./legendData.json";
import "./MapQuiz.scss";

export default class MapQuiz extends Component {
  constructor() {
    super();
    this.state = { ...data };
  }

  openLandmark = (landmark) => {
    this.setState({
      openedLandmark: landmark,
    });
  };

  render() {
    const { legend } = this.state;

    return (
      <div className="mapquiz">
        <h1>The town of Auvendell</h1>
        <main className="map-and-legend">
            <div className="map__wrapper">
              <img src={mapWithLegend} alt="Map of Auvendell" />
            </div>
            <div className="legend__wrapper">
              {legend.map((legend) => (
                <details key={legend.name}>
                  <summary className="legend__description">
                    {legend.name}
                  </summary>
                  <p>{legend.description}</p>
                </details>
              ))}
            </div>
        </main>
      </div>
    );
  }
}
