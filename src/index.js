import express from 'express';
import path from 'path';
import routerConmutador from './routers/conmutador.router.js';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

//middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
});

app.use(routerConmutador);

app.use(express.static(__dirname + "/public"));

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.listen(process.env.PORT || 3002, () => {
    console.log('Servidor corriendo en el puerto 3002');
});