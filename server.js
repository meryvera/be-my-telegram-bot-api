// server.js
import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // Para parsear application/json

app.post('/webhook', (req, res) => {
    // Aquí manejarás las actualizaciones entrantes de Telegram
    console.log(req.body); // Muestra el cuerpo del mensaje en la consola => {}

    // Envía una respuesta simple
    res.status(200).send('Mensaje recibido');
});

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});