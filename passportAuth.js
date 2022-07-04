const db = require('./config/db.config');
const User = db.User;
const LocalStrategy = require("passport-local").Strategy;

exports.passportAuth = (passport) => {

    passport.use(new LocalStrategy(
        async function (username, password, done) {
            console.log(username, password);
            try {
                const userData = await User.findOne({
                    where: { username: username }
                })
                const user = userData.dataValues;
                console.log(user);

                if (!user) return done(null, false);

                if (user.password !== password) return done(null, false);
                return done(null, user);

            }
            catch (error) {
                console.log("error");
                console.log(error)
                return done(error, false);
            }

        }));

    passport.serializeUser((user, done) => {
        if (user) {
            console.log("serial" + user.id);
            return done(null, user.id);
        }
        return done(null, false);
    });
    passport.deserializeUser(async (id, done) => {
        try {
            console.log("dese " + id)
            const user = await User.findOne({ where: { id: id } });
            return done(null, user);
        }

        catch (error) {
            done(error, false);
        }
    });
}