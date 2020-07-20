import React, { Component } from "react";
import AttrCard from "./AttrCard/AttrCard";
import { randomValFrom } from "../../utils";
import './CharGen.scss'
import charGenData from "./CharGenData.json";

class CharGen extends Component {
  constructor() {
    super();
    this.state = { ...charGenData };
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
      <div className="chargen">
        <main className="chargen__content">
        <h1 className="chargen__heading">Vilhon Reach PC Generator</h1>
        <button onClick={this.genNewChar}>Randomize PC!</button>
          {currentChar && (
            <>
              <h2>Race and Class:</h2>
              <AttrCard
                attr={currentChar.pcRace}
                headTitle="Race"
                togglePin={this.togglePin}
                pinKeys={["pcRace"]}
                unPinKeys={["pcRace"]}
              />
              <AttrCard
                attr={currentChar.pcClass}
                headTitle="Class"
                togglePin={this.togglePin}
                pinKeys={["pcClass"]}
                unPinKeys={["pcClass", "pcArchetype"]}
              />
              <AttrCard
                attr={currentChar.pcArchetype}
                headTitle="Archetype"
                togglePin={this.togglePin}
                pinKeys={["pcClass", "pcArchetype"]}
                unPinKeys={["pcClass", "pcArchetype"]}
              />

              <h2>Background and Campaign Hook:</h2>
              <AttrCard
                attr={currentChar.pcHook}
                headTitle="Campaign Hook"
                togglePin={this.togglePin}
                pinKeys={["pcHook"]}
                unPinKeys={["pcBackground", "pcHook"]}
              />
              <AttrCard
                attr={currentChar.pcBackground}
                headTitle="Background"
                togglePin={this.togglePin}
                pinKeys={["pcBackground", "pcHook"]}
                unPinKeys={["pcBackground", "pcHook"]}
              />
              <AttrCard
                attr={currentChar.pcNpc}
                headTitle="NPC Contact"
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
