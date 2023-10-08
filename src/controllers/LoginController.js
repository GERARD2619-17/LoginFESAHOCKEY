function login (req, res){
  res.render('login/login');
}
function register(req, res){
  res.render('login/register');
}

function storeUser(req, res){
  const data = req.body;
  console.log(data);
} 
    module.exports = {
       login,
       register,
       storeUser,
    }
  