const express = require('express');
const router = express.Router();
const User = require('../models/user');
const jwt =  require('jsonwebtoken');
const secretKey = process.env.SECRET_KEY;
const bcrypt = require('bcrypt');


// Ruta GET para ver si funciona
router.get('/', (req, res) => {
    console.log("entrado al inicio");
    res.send('Hello World');
  });
  



router.post('/', async (req, res) =>{
    try {
        const {email, password, firstName, lastName} = req.body;
        const existingUser = await User.findOne({email})
        if (existingUser) {
            return res.status(400).json({ message: 'Email ya registrado' })
    
        }


    const user = {
        email,
        firstName,
        lastName,
        password

    }
    const newUser = new User(user);
    await newUser.save()

    const token = jwt.sign(
        {id: newUser._id, email: newUser.email},
        secretKey,
        {expiresIn: '4h'}
    )

    res.status(201).json({
        message: 'Usuario creado correctamente',
        token
    });
    } catch (error) {
        console.error("Error en el registro", error.message);
        res.status(500).json({error:error.message})
    }
});

module.exports = router;
