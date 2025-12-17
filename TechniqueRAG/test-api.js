import fetch from "node-fetch";

async function testAnalyze() {
  try {
    const res = await fetch("http://localhost:5000/api/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query: "What is Retrieval Augmented Generation?"
      })
    });

    const data = await res.text(); // text first to catch errors
    console.log("Response:", data);
  } catch (err) {
    console.error("Error:", err.message);
  }
}

testAnalyze();
