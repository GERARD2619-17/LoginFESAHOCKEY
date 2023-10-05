function index(req, res) {
    if (req.session.loggedin) {
          // Output username
      res.redirect('/');
      
    } else {
      res.render('login/index');
    }
  }
  
  function register(req, res) {
    res.render('login/register');
  }

  function auth(req, res) {
    const data = req.body;   

    req.getConnection((err, conn) => {
      conn.query('SELECT * FROM users WHERE email = ?', [data.email], (err, userdata) =>{
      if(userdata.length > 0) {


          res.render('login/register', { error: 'Error: user alredy exists !' })
        
     
      } else{
      }

});
});
 }

  function storeUser (req, res) {
    const data = req.body;

    req.getConnection((err, conn) => {
      conn.query('SELECT * FROM users WHERE email = ?', [data.email], (err, userdata) =>{
      if(userdata.length > 0) {


          res.render('login/register', { error: 'Error: user alredy exists !' })
        
     
      } else
      bcrypt.hash(data.password, 12).then(hash => {
        data. password = hash;
    
        req.getConnection ((err, conn) => {
        conn.query('INSERT INTO users SET ?', [data], (err, rows) => {
        res.redirect('/');
        });
        });
        });
      
      
      {

        }
      });
      });
       
    }  
  module.exports = {
    index: index,
    register: register,
    storeUser:storeUser,
   auth:auth,   
  }
  