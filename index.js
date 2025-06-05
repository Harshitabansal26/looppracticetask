const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

let events = []; // In-memory store

app.post('/ingest', (req, res) => {
    const { event, user_id, timestamp } = req.body;

    if (!event || !user_id || !timestamp) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    events.push({ event, user_id, timestamp });
    res.status(200).json({ message: "Event logged successfully" });
});

app.get('/events', (req, res) => {
    res.json(events);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
