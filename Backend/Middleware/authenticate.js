// const User = require("../model/userSchema");
 const jwt = require('jsonwebtoken');

// const Authenticate = async (req, res, next) => {
//      try{
         
//         const token = req.cookies.pass;
//         const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

//         const rootUser = await User.findOne({ _id:verifyToken, "tokens.token": token});
//         if(!rootUser){
//             throw new Error("User Not Found");
//         }

//         req.token = token;
//         req.rootUser = rootUser;

//         next();
//      }catch(err){
//          res.status(401).send("Unauthorized");
//          console.log(err);
//      }
// }

const Authenticate=(req,res,next)=>{
    const token=req.cookies.pass;
    if(token)
    {
        jwt.verify(token,process.env.SECRET_KEY,(err, decodedToken)=>{
            if(err)
            {
                console.log(err.message);
                res.redirect("/login");
            }
                else{
                    console.log(decodedToken);
                    next();
                }
            }
        )
    }
    else{
        res.redirect("/login");
    }
};

module.exports = authenticate;