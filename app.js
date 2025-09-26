const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Satellite link active');
});

app.listen(1000, () =>{
  console.log('Working')
})


//Q9
app.get('/status', (req, res) => {
  res.json({ status: "online" });
});

app.get('/telemetry', (req, res) => {
  res.json({ "temperature": 24, "voltage": 3.7 });
});


app.post('/telemetry', (req, res) => {
  console.log(req.body);
  res.json({ name: "Preet", year: "Second" });
});
