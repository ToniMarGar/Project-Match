// Usado para crear y verificar tokens
const jwt = require('jsonwebtoken');
// Se importa el modelo de user
const User = require('../models/user.model.js'); 
// Importa el modulo express que se usa para manipular las respuestas http
const { response } = require('express');
// Importa el modulo bcrypt para cifrar y comparar contraseñas de manera segura
const bcrypt = require('bcrypt');

// Funcion usada para manejar el registro de nuevos usuarios. req representa la solicitud http y res la respuesta HTTP
async function Signup(req, res) {
    const saltRounds = bcrypt.genSaltSync(parseInt(process.env.SALTROUNDS))
    // Cifra las contraseñas
    const hashedPassword = bcrypt.hashSync(req.body.password, saltRounds)
    // Sustituye la contraseña en el cuerpo de la solicitud con la contraseña cifrada
    req.body.password = hashedPassword
try{
    // Crea un nuevo usuario en la base de datos con la informacion proporcionada en req.body
    const user = await User.create(req.body)
    // Define el payload del token JWT siendo el email en este caso [CAMBIAR]
    const payload = {email: req.body.email}
    // Genera un token JWT firmado con una clave secreta env.SECRET que expira en 1 hora
    const token = jwt.sign(payload,process.env.SECRET,{ expiresIn: '1h' })
  
    // Si todo va bien devuelve una respuesta con un estado 200 que es OK y un objeto JSON que contiene el token, rol de usuario y su email
    return res.status(200).json({token, role: user.role, user: user.email}) 
}
catch(error){
    // En caso de error lo captura  y devuelve una respuesta con un estado 500 ERROR DE SERVIDOR y mensaje de error
return res.status(500).send(error.message)}
}

// Define una funcion que maneja el inicio de sesion de los usuarios
async function Login(req, res){
    try {
        // Busca un usuario en la BD en donde el email coincida con el porporcionado en req.body.email
        const user = await User.findOne({
            where:{email:req.body.email}
        })

// Si no se encuentra el usuario devuelve una respuesta con un estado 404 no encontrado junto a un mensaje de error
if(!user)return res.status(404).send("Error: No such user")

// Comparaa la contraseña proporcionada en req.body,password con la contraseña dentro  de la db 
const comparePass = bcrypt.compareSync(req.body.password,user.password)

// Si las contraseñas coinciden se define el payload del token JWT, genera un token JWT firmado con una clave secreta env.SECRET 
// y devuelve una respuesta con estado 200 ok y un onjeto JSON que contiene el token y el rol del usuario.
if(comparePass) {
    const payload = {email :user.email}
    const token = jwt.sign(payload,process.env.SECRET)
    return res.status(200).json({token, role: user.role})
    // Si las contraseñas no coinciden se devuelve una respuesta con estado 404 no encontrado junto un mensaje de error
}else {
    return res.status(404).json("Error las contraseñas no coinciden")
}  
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


module.exports = {Signup , Login}