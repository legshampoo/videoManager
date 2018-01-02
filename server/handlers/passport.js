const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('User');

const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },
  function(username, password, done){
    //in this case, username = email
    console.log('PASSPORT: Checking for user...');
    const email = username;

    User.findOne({
      'email': email
    }, function(err, user){

      if(err){
        console.log('PASSPORT: Error searching for user ', email);
        return done(err);
      }

      if(!user){
        console.log('PASSPORT: Unable to find user');
        return done(null, false, {
          message: 'Incorrect username.'
        });
      }

      if(user.validPassword(password, function(err, isMatch){
        if(err){
          console.log('PASSPORT: Error validating password ');
          console.log(err);
          return done(null, false, { message: 'password validation error' });
        }

        if(isMatch){
          console.log('PASSPORT: password is valid');
          return done(null, user, { message: 'Correct Password!' });
        }else{
          console.log('PASSPORT: password does not match');
          return done(null, false, { message: 'Incorrect Password' });
        }
      }));
    })
  }
));

passport.serializeUser(function(user, done){
  done(null, user.id);
});

passport.deserializeUser(function(id, done){
  User.findById(id, function(err, user){
    done(err, user);
  });
});
