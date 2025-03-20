const usreModel = require('../models/userModel');
// const bcrypt = require('bcryptjs');
const { hashPassword, comparePassword, generateToken } = require('../utils/auth');

const signup = async (req, res) => {
    try {
        const data = req.body;
        if(data.userRole === undefined) {
            data.userRole = 'user';
        }
        data.password = await hashPassword(data.password);
        const user = new usreModel(data);
        await user.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch {
        res.status(500).json({ message: 'Internal server error' });
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await usreModel.findOne({ email }).lean();
        if(user) {
            const isPasswordMatch = await comparePassword(password, user.password);
            if(!isPasswordMatch) {
                const token = generateToken({ email: user.email, userRole: user.userRole });
                return res.status(400).json({ message: 'Invalid email or password', success: false });
            }
        }
        res.status(200).json({ message: 'Login success', success: true, token: generateToken(user) });
    }
    
}

module.exports = {
    signup,
    login
}