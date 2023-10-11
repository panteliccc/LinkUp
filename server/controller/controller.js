const express = require("express")
const UserModel = require("../models/Users")

module.exports.Register = async(req,res) =>{
    UserModel.create(req.body)
    .then(users =>  res.json(users))
    .catch(err => res.json(err))
}