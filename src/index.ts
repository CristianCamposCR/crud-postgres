import express from 'express'

import indexRoutes from "./routes/index";
const app = express();



//middlewares
//son funciones que se ejecutan antes de que lleguen a las rutas

app.use(express.json());//convierte los json a objetos
app.use(express.urlencoded({extended: false})); //para convertir a objetos desde formularios


app.use(indexRoutes);

// app.listen(3000, () => {
//     console.log('Server run on', 3000);    
// })

app.listen(3000);
console.log('Server on port', 3000);

