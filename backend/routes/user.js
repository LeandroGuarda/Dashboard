const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/', async (req,res) =>{
try {
    
    const newUser = new User (req.body);
    await newUser.save();
    console.log("Usuario creado correctamente", newUser);
    res.status(201).json(newUser)

} catch (error) {
    console.error("Error en obtener el usuario", error.message);
    res.status(500).json({error: error.message})
    
}
})

module.exports = router;