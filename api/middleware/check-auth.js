const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        console.log("JWT_KEY - " + process.env.JWT_KEY);       
        const token = req.headers.authorization.split(' ')[1]
        console.log("TOKEN - " + token);
        const decoded = jwt.verify(token, 'secret');
        req.userData = decoded;
        console.log("User data = "+ req.userData);
        next();
    } catch (error) {
        console.log("error = "+ error);
        return res.status(401).json({
            message: 'Auth failed'
        });
    }
    
};