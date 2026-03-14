const express = require("express");
const cors = require("cors");
const PORT = 3000;

// Start the app
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (_req, res) => {
    res.send("API is working!");
});

// Sub route
app.use("/api", require("./routes/token"));

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});