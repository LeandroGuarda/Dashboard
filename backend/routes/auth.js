const express = require('express');
const router = express.Router();
const User = require('../models/userRegister');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const secretKey = process.env.SECRET_KEY;


router.post('/login', async (req, res) =>{
    try {
        const { email, password } = req.body;

        //Buscar el usuario
        const user = await User.findOne({ email });
        if(!user){
           return res.status(404).json({message: "Usuario no encontrado"})
        }
        console.log('Password enviada:', password);
        console.log('Hash en DB:', user.password);

        // Comparar las contraseñas
        const isMatch = await bcrypt.compare(password, user.password);
        console.log("contreseña coincide?", isMatch);
        if(!isMatch){
           return res.status(401).json({message: 'Contraseña incorrecta'})
        }

        // Generar token

        const token = jwt.sign(
            {id:user._id, email:user.email},
            secretKey,
            {expiresIn: '4h'}
        );
        res.status(200).json({
            message: "login Exitoso",
            token
        })
    
    }catch(error){
        console.error('Error en login', error.message);
        return res.status(500).json({error: error.message})

    }
})

module.exports = router;