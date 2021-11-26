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
            });
        });
    }

    get() {
        return new Promise((resolve, reject) => {
            const sql = "SELECT * FROM logs";

            connection.query(sql, null, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }
}

module.exports = new Log;