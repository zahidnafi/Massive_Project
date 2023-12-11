const connect=require('./connection')

const user = `
CREATE TABLE user(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(45) NOT NULL,
    email VARCHAR(45) NOT NULL,
    password VARCHAR(45) NOT NULL
);
`

connect.query(user,(err,result)=>{
    if (err) throw err
})