const passport = require("passport");
const passportJwt = require('passport-jwt');
const JWTStrategy = passportJwt.Strategy;
const ExtractJWT =  passportJwt.ExtractJwt;

const SECRET = "llavesupersecretaquesoloelserversabe"

passport.use(
    new JWTStrategy({jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(), 
        secretOrKey: SECRET,
    }, (jwtPayLoad, done)=>{
        if(jwtPayLoad.user === 'admin'){
            // si esta el usuario, no devolvemos errores y retornamos el usuario.
            return done(null, jwtPayLoad);
        } else{
            return done(null, false, {messege: 'user not valid.'})
        }
    })
)

const jwtValidMDW = passport.authenticate('jwt', {session: false});


module.exports = { SECRET , jwtValidMDW }

