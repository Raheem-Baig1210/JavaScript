const  bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")



const responseGenerator = (success, message , data) => {
    let obj = {}
    obj.success=success;
    obj.message=message || (success ? "Success" : "Failed");
    if(data){
        obj.data = data
    }
    return obj
}

const hashPassword = async(plainPassword) => {
    return await bcrypt.hash(plainPassword,10)
}
const comparePassword = (plainPassword,hashPassword) =>{
    // console.log(plainPassword,hashPassword)
    return bcrypt.compare(plainPassword,hashPassword)
}
const generateTokens = (data) => {
    return jwt.sign(data, process.env.SECRET_KEY, {expiresIn:"1d"})
}

const authenticateJWT = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (token) {
        jwt.verify(token, 'secretKey', (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

module.exports = {
    responseGenerator,
    hashPassword,
    comparePassword,
    generateTokens,
    authenticateJWT
}