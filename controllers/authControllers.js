const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const { registerSchema } = require('../validation/userValidation.js')
require('dotenv').config()

const registerUser = async (req, res) => {
    try {
        // validate user
        const { error } = registerSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message })
        }

        const { email, pin } = req.body;

        // check if email already registered
        const existingUser = await prisma.User.findUnique({ where: { email } })
        if (existingUser) {
            return res.status(400).json({ error: 'Email sudah terdaftar' });
        }

        // create user
        const hashedPin = await bcrypt.hash(pin.toString(), 10);
        const user = await prisma.User.create({
            data: {
                email,
                pin: hashedPin
            }
        })
        res.status(201).json({
            message: "Berhasil membuat akun",
            data: user
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, pin } = req.body;

        // find user email
        const user = await prisma.User.findUnique({
            where: { email },
        });

        if (!user) {
            return res.status(401).json({ error: 'Email tidak ditemukan' });
        }

        const pinMatch = await bcrypt.compare(pin.toString(), user.pin);
        if (!pinMatch) {
            return res.status(401).json({ error: 'PIN Salah' });
        }

        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' })
        res.json({ message: 'Login berhasil', user, token });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = { registerUser, loginUser }