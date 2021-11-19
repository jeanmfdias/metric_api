const connection = require('../configs/database');

class Log {
    create(log) {
        const sql = 'INSERT INTO logs SET ?';

        connection.query(sql, log, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('log successful created');
            }
        })
    }
}

module.exports = new Log;