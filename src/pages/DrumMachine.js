import React, { useEffect } from "react";
import pads from "../data/drumPads.json";
import "../index.css";

function DrumMachine() {
    const playSound = (sound, label) => {
        const audio = new Audio(sound);
        audio.play();

        const display = document.getElementById("display");
        if (display) display.innerText = label;
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            const key = e.key.toUpperCase();
            const pad = pads.find((p) => p.key === key);
            if (pad) {
                playSound(pad.sound, pad.label);
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <div id="drum-machine" className="drum-container">
            <div id="display" className="display-text">Press or Click</div>
            {pads.map((pad) => (
                <button key={pad.key} className="drum-pad" id={pad.label} onClick={() => playSound(pad.sound)}>
                    {pad.key}
                </button>
            ))}
        </div>
    );
}
export default DrumMachine;