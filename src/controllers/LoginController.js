function login(req, res){
req.render('login/index');
}

function register(req, res){
    res.render('login/register');
    }
    module.exports ={
        login:login,
        register: register,
        
    }