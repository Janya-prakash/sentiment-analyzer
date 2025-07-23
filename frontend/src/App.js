import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [history, setHistory] = useState([]);


const analyzeSentiment = async () => {
  setLoading(true);
  setError('');
  setResult('');
  
  try {
    const response = await fetch('http://127.0.0.1:8000/analyze', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: input }),
    });

    if (!response.ok) throw new Error("Backend not reachable");

    const data = await response.json();
    setResult(data.sentiment);
    setHistory(prev => [...prev, { text: input, sentiment: data.sentiment }]);
  } catch (err) {
    setError('Failed to fetch sentiment 😢. Please ensure backend is running.');
  } finally {
    setLoading(false);
  }
};


  return (
  <div style={{
    maxWidth: "600px",
    margin: "auto",
    marginTop: "2rem",
    fontFamily: "Arial, sans-serif",
    padding: "2rem",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
    backgroundColor: "#f9f9f9"
  }}>
    <h1 style={{ textAlign: "center" }}>Sentiment Analyzer</h1>

    <textarea
      rows="4"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder="Type something to analyze..."
      style={{ width: "100%", padding: "10px", fontSize: "16px", marginBottom: "1rem" }}
    />

    <button
      onClick={analyzeSentiment}
      style={{
        padding: "10px 20px",
        fontSize: "16px",
        backgroundColor: "#4CAF50",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer"
      }}
    >
      Analyze
    </button>

    {/* LOADING & ERROR UI */}
    {loading && <p style={{ color: "#555" }}>Analyzing...</p>}
    {error && <p style={{ color: "red" }}>{error}</p>}
    {result && !error && <p style={{ fontSize: "18px", marginTop: "1rem" }}><strong>Result:</strong> {result}</p>}

    {/* HISTORY SECTION */}
    {history.length > 0 && (
      <div style={{ marginTop: "2rem" }}>
        <h3>Previous Results:</h3>
        <ul>
          {history.map((item, index) => (
            <li key={index}><strong>{item.text}</strong> — {item.sentiment}</li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

}

export default App;
