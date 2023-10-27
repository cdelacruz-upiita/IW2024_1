import * as userModel from '../models/users.model.js';
import { createHash } from "crypto";

export const getAllUsers = async()=> {
   let obj, userObjs=[];
   /**
    *  1. Se consume la promesa proveniente del modelo de usuarios mediante
    *     código bloqueante.
    *  2. Se genera un nuevo objeto que no contiene la contraseña
    *  3. Se añade a un nuevo array que se retorna al controller como promesa
    */
   
   let users = await userModel.getAllUsers();
   if (users) {      
        users.forEach(row=>{
        obj = {
            id:row.id,
            name:row.name_u,
            email:row.email_u
        }
        userObjs.push(obj);                      
      })    
   }
   return userObjs;               
}

export const valAuth = async(email, passwd)=> {
   let user = await userModel.getUserByEmail(email);
   let hash = createHash("md5").update(passwd).digest("hex");

   console.log(user[0].passwd_u);
   console.log(hash);
   
   if (user) {
      if(user[0].email_u === email && user[0].passwd_u === hash)
         return true;      
   }     
   return false;
}

