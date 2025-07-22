import React, { useState, useEffect, useRef } from "react";
import "../index.css";

function PodomoroClock() {
    const [breakLength, setBreakLength] = useState(5);
    const [sessionLength, setSessionLength] = useState(25);
    const [timeLeft, setTimeLeft] = useState(25 * 60);
    const [isRunning, setIsRunning] = useState(false);
    const [isSession, setIsSession] = useState(true);

    const audioRef = useRef(null);
    const intervalRef = useRef(null);

    // Format time (mm:ss)
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60)
        .toString()
        .padStart(2,"0");
        const seconds = (time % 60).toString().padStart(2,"0");
        return `${minutes}:${seconds}`;
    };

    // Toggle timer 
    const handleStartStop = () => {
        setIsRunning(!isRunning);
    };

    // Reset Timer
    const handleReset = () => {
        clearInterval(intervalRef.current);
        setIsRunning(false);
        setBreakLength(5);
        setSessionLength(25);
        setTimeLeft(25 * 60);
        setIsSession(true);
        audioRef.current.pause();
    };

    // Increase/decrease session & break 
    const changeLength = (type, operation) => {
        if (isRunning) return;

        if (type === "session") {
            const newLength = Math.min(60, Math.max(1, sessionLength + operation));
            setSessionLength(newLength);
            if (isSession) setTimeLeft(newLength * 60);
        } else if (type === "break") {
            const newLength = Math.min(60, Math.max(1, breakLength + operation));
            setBreakLength(newLength);
            if (!isSession) setTimeLeft(newLength * 60);
        }
    };

    // timer countdown 
    useEffect(() => {
        if (!isRunning) return;

        intervalRef.current = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev === 0) {
                    audioRef.current.play();
                    const nextIsSession =!isSession;
                    setIsSession(nextIsSession);
                    return nextIsSession ? sessionLength * 60 : breakLength * 60;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(intervalRef.current);
    }, [isRunning, isSession, sessionLength, breakLength]);

    return (
        <div className="clock-container">
            <h1>25 + 5 Clock</h1>

            <div className="length-controls">
                <div>
                    <h2 id="break-label">Break length</h2>
                    <button id="break-decrement" onClick={() => changeLength("break", -1)}>-</button>
                    <span id="break-length">{breakLength}</span>
                    <button id="break-increment" onClick={() => changeLength("break",1)}>+</button>
                </div>

                <div>
                    <h2 id="session-label">Session Lenght</h2>
                    <button id="session-decrement" onClick={() => changeLength("break", -1)}>-</button>
                    <span id="session-length">{sessionLength}</span>
                    <button id="session-increment" onClick={() => changeLength("break", 1)}>+</button>
                </div>
            </div>

            <div className="timer">
                <h2 id="timer-label">{isSession ? "Session": "Break"}</h2>
                <span id="time-left">{formatTime(timeLeft)}</span>
            </div>

            <div className="controls">
                <button id="start_stop" onClick={handleStartStop}>
                    {isRunning ? "Pause" : "Start"}
                </button>
                <button id="reset" onClick={handleReset}>Reset</button>
            </div>

            <audio id="beep" ref={audioRef} src="https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3" preload="auto" />
        </div>
    );
}

export default PodomoroClock;