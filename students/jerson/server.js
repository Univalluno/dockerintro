const express = require('express');
const fs = require('fs');

const app = express();

const student = process.env.STUDENT_NAME || "Jerson";
const barrio = process.env.BARRIO || "San Antonio";

app.get('/', (req, res) => {
  const msg = `Hola, I am ${student} and I live in ${barrio}`;
  fs.appendFileSync('/var/log/app/visitas.log', msg + '\n');
  res.send(msg);
});

app.get('/health', (req, res) => {
  res.json({ ok: true });
});

app.listen(8080, () => {
  console.log("Server running on port 8080");
});