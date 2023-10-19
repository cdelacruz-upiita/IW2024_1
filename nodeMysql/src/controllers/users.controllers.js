import * as userModel from '../models/users.model.js';

export const getAllUsers = (req, res)=>{
  
  let users = userModel.getAllUsers();    
  users.then(result=>{
    result.forEach(obj=>{
       console.log (obj.email_u);
       console.log (obj.passwd_u);
    })
    //console.log(result);
    res.json(result);
  });
}

export const getUser = (req, res)=>{
   let {email} = req.params.email;   
   console.log(email);
    //userModel.getUser(email);  
}


