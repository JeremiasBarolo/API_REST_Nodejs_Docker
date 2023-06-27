const passport = require("passport");
const passportJwt = require('passport-jwt');
const JWTStrategy = passportJwt.Strategy;
const ExtractJWT =  passportJwt.ExtractJwt;
const { userModel } = require('../models');

const SECRET = "llavesupersecretaquesoloelserversabe"

passport.use(
    new JWTStrategy({jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(), 
        secretOrKey: SECRET,
    }, async (jwtPayLoad, done)=>{

        const userFound = await userModel.findOne({ where: {username: jwtPayLoad.username} }); 

        if(jwtPayLoad.user === 'admin' || userFound ){
            // si esta el usuario, no devolvemos errores y retornamos el usuario.
            return done(null, jwtPayLoad);
        }else{
            return done(null, false, {messege: 'user not valid.'})
        }
    })
)

const jwtValidMDW = passport.authenticate('jwt', {session: false});


module.exports = { SECRET , jwtValidMDW }

