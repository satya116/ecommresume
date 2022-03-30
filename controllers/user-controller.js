const User = require('../model/userSchema')

async function Signup(req,res) {

    try {
        const exists = await User.findOne({ username: req.body.username })
        if(exists){
            return res.status(401).json({messagu: "username already exists"})
        }
        const user = req.body
        const newUser = new User(user)
      await newUser.save()
      res.status(200).json({ messagu: "user is succesfully registered" })
    } catch (error) {
        console.log("Sign Up Error: ", error.message);
        
    }
    
}

const Login = async (req,res)=>{

    try {
        let user = await User.findOne({ username: req.body.username, password: req.body.password })
        if(user){
            return res.status(200).json({nice: "welldone mafackar"})
        }
        else{
            res.status(401).json({gadbad: "gadbad hai"})
        }
    } catch (error) {
        console.log("Login errooor from backend");
        
    }




}




module.exports = {Signup, Login}