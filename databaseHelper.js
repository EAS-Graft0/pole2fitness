var mysql = require('mysql');
var Promise = require('promise')
    // Initialise database connection
function handleDisconnect() {
    tq = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Renegade187!',
        database: 'pole2fitness'
    });

    tq.connect(function(err) {
        if (err) {
            setTimeout(handleDisconnect, 2000);
        }
    });

    tq.on('error', function(err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            handleDisconnect();
        } else {
            throw err;
        }
    });
}

handleDisconnect();

exports.getData = function(queryString) {
    // console.log("db helper")
    return new Promise(function(resolve, reject) {
        tq.query(queryString, function(err, data, fields) {
            if (err) {
                // console.log(error)
                resolve(err)
            } else {
                // console.log(data)
                resolve(data)
            }
        })
    })
}


exports.insert = function(queryString, dataToInsert) {
    return new Promise(function(resolve, reject) {
        tw.query(queryString, dataToInsert, function(error, results, fields) {
            if (error) {
                // console.log(error);
                resolve(error)
            } else {
                // console.log(results);
                resolve(results)
            }
        });
    })
}