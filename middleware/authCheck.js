// const jwt = require("jsonwebtoken");


// const authCheck = (req, res, next) => {
// 	const token = req.cookies.token;
// 	console.log("auth check middleware has fired");

// 	if (token == 'true') {
// 		//Token has to be true in order to view pokemon
// 		next();
// 	} else {
// 		res.redirect("/");
// 	}
// };


// module.exports = authCheck;
const jwt = require('jsonwebtoken');

const authCheck = (req, res, next) => {
  const token = req.cookies.token;

  // Verify JWT
  // If JWT is valid, then next
  // If JWT is not valid then show error
  let decoded = null;
  try {
    decoded = jwt.verify(token, 'superSecretPrivateKey');
    console.log('decoded JWT: ', decoded);
  } catch (error) {
    console.log(error);
  }

  if (decoded) {
    next();
  } else {
    res.redirect('/');
  }
};

module.exports = authCheck;