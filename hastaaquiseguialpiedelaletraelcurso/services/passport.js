const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser( (id, done) => {
	console.log( id );
	User.findById(id).then(user => {
		done(null, user);
	});
});

passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: '/auth/google/callback',
			proxy: true
		},
		async (accessToken, refreshToken, profile, done) => {
			const existingUser = await User.findOne({ googleId: profile.id });
			if (existingUser) {
				return done(null, existingUser); //first argument informs of an error
				//else not necessary, if the user exists the function ends with the return
			} 
			const user = await new User({ googleId: profile.id }).save()
			done(null, user);
		}
	)	
);

/* COMENTARIO INÚTIL PARA QUE HAGA ALGO QUE HACER COMMIT */