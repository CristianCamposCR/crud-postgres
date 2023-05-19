"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
const app = (0, express_1.default)();
//middlewares
//son funciones que se ejecutan antes de que lleguen a las rutas
app.use(express_1.default.json()); //convierte los json a objetos
app.use(express_1.default.urlencoded({ extended: false })); //para convertir a objetos desde formularios
app.use(index_1.default);
// app.listen(3000, () => {
//     console.log('Server run on', 3000);    
// })
app.listen(3000);
console.log('Server on port', 3000);
