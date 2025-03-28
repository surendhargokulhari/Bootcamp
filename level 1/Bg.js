import React, { useState } from "react";

function App() {
    const [color, setColor] = useState("red");

    return (
        <div style={{ textAlign:"center", marginTop: "50px" }}>
            <h2 style={{ textAlign: "center" }}>select your fav color</h2>

            <div
                style={{
                    width: "100px",
                    height: "100%",
                    backgroundColor: color,
                    margin: "10px auto" ,
                    lineHeight: "100px",
                    color: "white",
                    fontWeight: "bold",
                    
                }}
            >
                {color}
            </div>

            <select onChange={(e) => setColor(e.target.value)}>
                <option value="red">Red</option>
                <option value="black">Black</option>
                <option value="pink">Pink</option>
                <option value="orange">Orange</option>
                <option value="green">Green</option>
            </select>
        </div>
    );
}

// Ensure this is at the bottom, at the top level of the file
export default App;
