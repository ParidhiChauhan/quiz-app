import React, { useEffect, useState } from "react";

function Timer({ onTimeout }) {
    const [time, setTime] = useState(30 * 60);

    useEffect(() => {
        if (time === 0) {
            onTimeout();
            return;
        }
        const timer = setInterval(() => setTime((prev) => prev - 1), 1000);
        return () => clearInterval(timer);
    }, [time, onTimeout]);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
    };

    return <div className="timer">Time Left: {formatTime(time)}</div>;
}

export default Timer;
