import express from "express";
import axios from "axios";

const app = express();
const PORT = process.env.PORT || 3000;

// Fetch raw HTML from the tracker
app.get("/tracker/raw", async (req, res) => {
  try {
    const { data } = await axios.get("https://plantsvsbrainrotsstocktracker.com/");
    res.send(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Try to extract data (placeholder until we know JSON structure)
app.get("/tracker/data", async (req, res) => {
  try {
    const { data } = await axios.get("https://plantsvsbrainrotsstocktracker.com/");
    
    // For now just send back a preview
    res.json({ preview: data.slice(0, 400) });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`✅ API running at http://localhost:${PORT}`);
});