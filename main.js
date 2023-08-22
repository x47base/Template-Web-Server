const express = require('express');
const cookieParser = require("cookie-parser");
const cors = require('cors')
const path = require('path');
const app = express();

const PORT = process.env.port || 450;

app.use(cors({origin: '*'})); 

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname));
app.use(cookieParser());

app.use('/api/v1', require('./routes/api'));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + "/static/index.html"));
});

app.get('/style.css', (req, res) => {
	res.sendFile(path.join(__dirname + "/styles/style.css"));
});

app.listen(PORT, () => console.log(`alive on http://localhost:${PORT}`));
