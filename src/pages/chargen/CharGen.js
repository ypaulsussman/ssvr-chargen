import React, { Component } from "react";
import AttrCard from "./AttrCard";
import { randomValFrom } from "../../utils";
import data from "./ssvrPcData.json";

class CharGen extends Component {
  constructor() {
    super();
    this.state = { ...data };
  }

  genNewChar = () => {
    const { currentChar, pcAttributes } = this.state;
    const pcRace = this.valFrom(currentChar?.pcRace, pcAttributes.races);
    const pcClass = this.valFrom(currentChar?.pcClass, pcAttributes.classes);
    const pcArchetype = this.valFrom(
      currentChar?.pcArchetype,
      pcClass.archetypes
    );
    const pcHook = this.valFrom(
      currentChar?.pcHook,
      pcAttributes.characterHooks
    );
    const pcBackground = this.valFrom(
      currentChar?.pcBackground,
      pcHook.backgrounds
    );
    const pcNpc = this.valFrom(currentChar?.pcNpc, pcAttributes.npcConnections);

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

  valFrom = (currentAttr, allAttrs) => {
    if (currentAttr?.pinned) {
      return currentAttr;
    } else {
      return randomValFrom(allAttrs);
    }
  };

  togglePin = (attrKeys, attrVals) => {
    const attrsToPin = attrKeys.reduce((accumulator, pk) => {
      accumulator[pk] = { ...this.state.currentChar[pk], pinned: attrVals };
      return accumulator;
    }, {});

    this.setState({
      currentChar: { ...this.state.currentChar, ...attrsToPin },
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
              <AttrCard
                attr={currentChar.pcRace}
                togglePin={this.togglePin}
                pinKeys={["pcRace"]}
                unPinKeys={["pcRace"]}
              />
              <AttrCard
                attr={currentChar.pcClass}
                togglePin={this.togglePin}
                pinKeys={["pcClass"]}
                unPinKeys={["pcClass", "pcArchetype"]}
              />
              <AttrCard
                attr={currentChar.pcArchetype}
                togglePin={this.togglePin}
                pinKeys={["pcClass", "pcArchetype"]}
                unPinKeys={["pcArchetype"]}
              />

              <h3>Background and Campaign Hook:</h3>
              <AttrCard
                attr={currentChar.pcHook}
                togglePin={this.togglePin}
                pinKeys={["pcHook"]}
                unPinKeys={["pcBackground", "pcHook"]}
              />
              <AttrCard
                attr={currentChar.pcBackground}
                togglePin={this.togglePin}
                pinKeys={["pcBackground", "pcHook"]}
                unPinKeys={["pcBackground"]}
              />
              <AttrCard
                attr={currentChar.pcNpc}
                togglePin={this.togglePin}
                pinKeys={["pcNpc"]}
                unPinKeys={["pcNpc"]}
              />
            </>
          )}
        </main>
      </div>
    );
  }
}

export default CharGen;
