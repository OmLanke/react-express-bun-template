import express from 'express';
import path from 'path';

const app = express();

app.use(express.static('frontend/dist')); // Serve the frontend at the root URL

app.get('/api', (req, res) => {
    res.send('Hello World');
    }
);

app.use('/api/users', require('./routes/users'));

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"), err => {
        if (err) {
            console.log(err);
        }
    });
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
    console.log('http://localhost:3000');
});