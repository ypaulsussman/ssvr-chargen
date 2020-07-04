import React, { Component } from "react";
import data from "./ssvrCharGen.json";
class CharGen extends Component {
  constructor() {
    super();
    this.state = { ...data };
  }

  randomValFor = (hash) => {
    const arrayedHash = Object.entries(hash);

    const weightedHashKeys = arrayedHash.reduce((accumulator, entry) => {
      let i = 0;
      while (i < (entry[1].weight ? entry[1].weight : 1)) {
        accumulator.push(entry[0]);
        i++;
      }
      return accumulator;
    }, []);

    const randomIndex = Math.floor(Math.random() * weightedHashKeys.length);
    return hash[weightedHashKeys[randomIndex]];
  };

  render() {
    const pcRace = this.randomValFor(this.state.pcAttributes.races);
    return (
      <div className="char-gen">
        <h1>New character:</h1>
        {pcRace.name}
      </div>
    );
  }
}

export default CharGen;
