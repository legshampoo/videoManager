const passport = require('passport');

exports.authenticate = (req, res, next) => {

  passport.authenticate('local', function(err, user, info){
    console.log('AUTHENTICATING: ', user);

    if(err){
      console.log('Authentication Error!');
      return next(err);
    }

    if(!user){
      console.log('Authentication Failed: No user, wrong email or password');
      return next(user);
    }

    req.login(user, function(err){
      console.log('Authentication successful, req.login()')
      if(err){
        console.log('req.login err');
        return next(err);
      }else{
        next();
      }
    })
  })(req, res, next);
}
