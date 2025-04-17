const express = require('express');
const app = express();
const connectDB = require('./mongoose');
const port = process.env.PORT || 3000;
const userRoutes = require('./routes/user');
const registerRoutes = require('./routes/register');
const loginRoutes = require('./routes/auth');
const cors = require('cors');

app.use(cors()); // Permite TODO (todos los orígenes)

//CONECTAR  A MONGO DB USANDO MONGOOSE
connectDB()


// para leer el req.body
app.use(express.json());
// middleware user

app.use('/users', userRoutes);
app.use('/register',registerRoutes)
app.use('/auth', loginRoutes)





//Inicializamos el servidor
app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
  })
