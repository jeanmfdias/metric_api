class Migrations {
    init(connection) {
        this.connection = connection;
    }

    criarLogsTable() {
        const sql = 'CREATE TABLE IF NOT EXISTS logs ('+
            'id int NOT NULL AUTO_INCREMENT, ' +
            'alias varchar(255), ' +
            'value varchar(255), ' +
            'input TEXT, ' +
            'output TEXT, ' + 
            'PRIMARY KEY(id)' +
        ')';

        this.connection.query(sql, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('log table successful created');
            }
        });
    }
}

module.exports = new Migrations