import {conn} from '../../db.js';

export async function getAllUsers(){
  const strSql = 'select * from user';    
  const [result] = await conn.query(strSql);  // callback
  return result;
}

export async function getUserById(id){  
  const strSql = 'SELECT * FROM user WHERE id = ?';   
  const [result] = await conn.query(strSql,[id]);      
  return result;
}

export async function getUserByEmail(email){  
  const strSql = 'SELECT * FROM user WHERE email_u = ?';   
  const [result] = await conn.query(strSql,[email]);      
  return result;
}

