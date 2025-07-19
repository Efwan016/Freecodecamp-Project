import React from "react";
import pads from "../data/drumPads.json";
import "../index.css";

function DrumMachine() {
    const playSound = (sound) => {
        const audio = new Audio(sound);
        audio.play();
    };

    return (
        <div id="drum-machine" className="drum-container">
            {pads.map((pad) => (
                <button key={pad.key} className="drum-pad" id={pad.label} onClick={() => playSound(pad.sound)}>
                    {pad.key}
                </button>
            ))}
        </div>
    );
}
export default DrumMachine;