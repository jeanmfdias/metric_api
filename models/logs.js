const connection = require('../configs/database');

class Log {
    create(log) {
        return new Promise((resolve, reject) => {
            const sql = 'INSERT INTO logs SET ?';

            connection.query(sql, log, (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve('log successful created');
                }
            })
        })
    }
}

module.exports = new Log;