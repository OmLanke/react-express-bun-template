import express from 'express';

const app = express();

app.use(express.static('frontend/dist')); // Serve the frontend at the root URL

app.get('/api', (req, res) => {
    res.send('Hello World');
    }
);

app.use('/api/users', require('./routes/users'));

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
    console.log('http://localhost:3000');
});