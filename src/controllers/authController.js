// src/controllers/authController.js
const bcrypt = require('bcrypt');
const pool = require('../config/database');
const { generateToken } = require('../config/jwt');

const authController = {
    // Registro de usuario
    register: async (req, res) => {
        try {
            const { name, email, password, company_id } = req.body;

            // Verificar si el usuario ya existe
            const userExists = await pool.query(
                'SELECT * FROM users WHERE email = $1',
                [email]
            );

            if (userExists.rows.length > 0) {
                return res.status(400).json({ message: 'El email ya está registrado' });
            }

            // Encriptar contraseña
            const hashedPassword = await bcrypt.hash(password, 10);

            // Insertar nuevo usuario
            const newUser = await pool.query(
                'INSERT INTO users (name, email, password, company_id) VALUES ($1, $2, $3, $4) RETURNING id, name, email, company_id',
                [name, email, hashedPassword, company_id]
            );

            // Generar token
            const token = generateToken(newUser.rows[0].id);

            res.status(201).json({
                message: 'Usuario registrado exitosamente',
                user: newUser.rows[0],
                token
            });
        } catch (error) {
            console.error('Error en registro:', error);
            res.status(500).json({ message: 'Error en el servidor' });
        }
    },

    // Login de usuario
    login: async (req, res) => {
        try {
            const { email, password } = req.body;

            // Buscar usuario
            const result = await pool.query(
                'SELECT users.*, companies.name as company_name FROM users LEFT JOIN companies ON users.company_id = companies.id WHERE users.email = $1',
                [email]
            );

            if (result.rows.length === 0) {
                return res.status(401).json({ message: 'Credenciales inválidas' });
            }

            const user = result.rows[0];

            // Verificar contraseña
            const validPassword = await bcrypt.compare(password, user.password);

            if (!validPassword) {
                return res.status(401).json({ message: 'Credenciales inválidas' });
            }

            // Generar token
            const token = generateToken(user.id);

            // Eliminar la contraseña del objeto usuario
            delete user.password;

            res.json({
                message: 'Login exitoso',
                user,
                token
            });
        } catch (error) {
            console.error('Error en login:', error);
            res.status(500).json({ message: 'Error en el servidor' });
        }
    },

    // Obtener información del usuario actual
    getProfile: async (req, res) => {
        try {
            const result = await pool.query(
                'SELECT users.id, users.name, users.email, users.company_id, companies.name as company_name FROM users LEFT JOIN companies ON users.company_id = companies.id WHERE users.id = $1',
                [req.user.userId]
            );

            if (result.rows.length === 0) {
                return res.status(404).json({ message: 'Usuario no encontrado' });
            }

            res.json(result.rows[0]);
        } catch (error) {
            console.error('Error al obtener perfil:', error);
            res.status(500).json({ message: 'Error en el servidor' });
        }
    }
};

module.exports = authController;