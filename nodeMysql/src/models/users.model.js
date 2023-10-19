import {conn} from '../../db.js';

export async function getAllUsers(){
  const strSql = 'select * from user';    
  const [result] = await conn.query(strSql);  // callback

  return result;
}

export function getUser(email){
  let users = [];
  const strSql = 'select * from user where email_u = ?';  
  const [result] = conn.query(strSql,[email]);
  
  return result;

}

export function createUser(email){

}

export function updateUser(email){

}

function deleteUser(email){

}

