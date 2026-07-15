import { useState, useEffect } from "react";

function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        // Update every second
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        // Cleanup when component unmounts
        return () => clearInterval(interval);
    }, []);

    return (
        <div
            style={{
                textAlign: "center",
                padding: "20px",
                fontFamily: "Arial",
            }}
        >
            <h2>Current Time</h2>
            <h1>{time.toLocaleTimeString()}</h1>
        </div>
    );
}

export default Clock;