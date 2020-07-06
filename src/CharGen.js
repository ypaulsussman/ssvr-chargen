import React, { Component } from "react";
import data from "./ssvrCharGen.json";

const randomValFrom = (hash) => {
  const arrayedHash = Object.entries(hash);

  // If a given entry has a weight:Integer, then add its key to the array that many times;
  // otherwise, add its key once.
  const weightedHashKeys = arrayedHash.reduce((accumulator, entry) => {
    let i = 0;
    while (i < (entry[1].weight ? entry[1].weight : 1)) {
      accumulator.push(entry[0]);
      i++;
    }
    return accumulator;
  }, []);

  // Select a random key from that weighted array,
  // then pull that key's value from the hash
  const randomIndex = Math.floor(Math.random() * weightedHashKeys.length);
  return hash[weightedHashKeys[randomIndex]];
};

class CharGen extends Component {
  constructor() {
    super();
    this.state = { ...data };
  }

  genNewChar = () => {
    const pcRace = randomValFrom(this.state.pcAttributes.races);
    const pcClass = randomValFrom(this.state.pcAttributes.classes);
    const pcArchetype = randomValFrom(pcClass.archetypes);
    const pcHook = randomValFrom(this.state.pcAttributes.characterHooks);
    const pcBackground = randomValFrom(pcHook.backgrounds);
    const pcNpc = randomValFrom(this.state.pcAttributes.npcConnections);
    this.setState({
      currentChar: {
        pcRace,
        pcClass,
        pcArchetype,
        pcHook,
        pcBackground,
        pcNpc,
      },
    });
  };

  render() {
    const { currentChar } = this.state;
    return (
      <div className="char-gen">
        <h1>Vilhon Reach PC Generator</h1>
        <button onClick={this.genNewChar}>New PC!</button>
        <main>
          {currentChar && (
            <>
              <h2>New character:</h2>

              <h3>Race and Class:</h3>
              <h4>{currentChar.pcRace.name}</h4>
              <p>{currentChar.pcRace.description}</p>

              <h4>{currentChar.pcClass.name}</h4>
              <p>{currentChar.pcClass.description}</p>

              <h4>{currentChar.pcArchetype.name}</h4>
              <p>{currentChar.pcArchetype.description}</p>

              <h3>Background and Campaign Hook:</h3>
              <h4>{currentChar.pcHook.name}</h4>
              <p>{currentChar.pcHook.description}</p>

              <h4>{currentChar.pcBackground.name}</h4>
              <p>{currentChar.pcBackground.description}</p>

              <h4>{currentChar.pcNpc.name}</h4>
              <p>{currentChar.pcNpc.description}</p>
            </>
          )}
        </main>
      </div>
    );
  }
}

export default CharGen;
