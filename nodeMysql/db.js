// desestructuración {}
import {createPool} from 'mysql2/promise'; 

export const conn = createPool({
    host: 'localhost',
    user: 'ingweb',
    password: 'IngWeb12',
    port: 3306,
    database: 'users'
});

