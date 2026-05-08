import { useState } from "react";

function App() {
  const [status, setStatus] = useState("");

  const addEntry = async () => {
    setStatus("Adding...");
    try {
      const res = await fetch("http://localhost:5000/api/entries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: "Entry from React" }),
      });
      const data = await res.json();
      setStatus(`✅ Entry added! ID: ${data._id}`);
    } catch (err) {
      setStatus(`❌ Error: ${err.message}`);
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>MERN App</h1>
      <button
        onClick={addEntry}
        style={{ padding: "10px 20px", fontSize: "16px" }}
      >
        Add Entry test
      </button>
      {status && <p style={{ marginTop: "1rem" }}>{status}</p>}
    </div>
  );
}

export default App;
