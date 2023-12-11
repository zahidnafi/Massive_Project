const connect = require('../connection')

class User {
    constructor(id, nama, email, password) {
        this.id = id
        this.nama = nama
        this.email = email
        this.password = password
    }

    static registerUser(data, cb) {
        const { name, email, password } = data;

        // hash password

        const query = `
        INSERT INTO user(nama, email, password)
        VALUES("${name}", "${email}", "${password}");
        `
        connect.query(query, (err) => {
            if (err) cb(err, false)
            else cb(null, true)

        })
    }
    static loginUser(data, cb) {
        const { name, password } = data;
        // Ganti query
        // check password yang di DB dengan yang di input user
        // kalo sama ambil
        // kalo gak sama error
        const query = `
        SELECT * FROM user WHERE user.nama = "${name}"&& user.password = "${password}";
        `

        connect.query(query, (err, result) => {
            if (err) cb(err, false)
            else {
                cb(null, result)
            }
        })
    }
}



module.exports = User

