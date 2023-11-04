import express from 'express';
import { json } from 'body-parser';

const app = express();

// You need to invoke the json middleware as a function
app.use(json());

app.get('', (req, res) => {
    res.send("Hi There!");
    console.log("This is working");
});

app.get('/', (req, res) => {
    res.send("Hi There!");
    console.log("This is working");
});


app.get('/api/users/currentUser', (req, res) => {
    res.send("Hi There!");
    console.log("This is working");
});

app.listen(3000, () => {
    console.log('Listening on port 3000!!!!!!!!!');
});
