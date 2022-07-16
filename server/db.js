import { createPool } from 'mysql2/promise'

export const pool = createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'faztpassword',
    database: 'tasksdb'
})


