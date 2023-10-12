const UserModel = require("../models/Users")

module.exports.Register = async(req,res) =>{
    UserModel.create(req.body)
    .then(users =>  res.json(users))
    .catch(err => res.json(err))
}


module.exports.Login = async(req,res) =>{
    const {username, password} = req.body;
    UserModel.findOne({username: username})
    .then(user => {
        if(user){
            if(user.password === password) {
                res.json("Success");
            }else{
                res.json("Password is incorrect")
            }
        }
        else{
            res.json("Password is incorrect")
        }
    })
}