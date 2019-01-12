var express = require("express");
var dbHelper = require('./databaseHelper.js')

var mysql = require('mysql');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer')
var Promise = require('promise')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Renegade187!',
    database: 'pole2fitness'
});

var fs = require('fs');


var app = express();
var server = require('http').Server(app);
var server = require('http').Server(app);
app.use(express.static(process.cwd() + '/app'));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json())

app.get("/getImages", function(req, res) {
    // var getImages = dbHelper.getData("SELECT * FROM images")
    // getImages.then(function(images) {
    //     res.send(images)
    // })
    fs.readdir('./app/images', (err, files) => {
        res.send(files)
            // console.log(files)
            // files.forEach(file => {
            // console.log(file);
            // })
    })
})

app.get("/getClasses", function(req, res) {
    var getClasses = dbHelper.getData("SELECT * FROM classes")
    getClasses.then(function(classes) {
        res.send(classes)
    })
})

app.get("/getClassSchedule", function(req, res) {
    var getClasses = dbHelper.getData("SELECT name, day, date FROM classes JOIN schedule ON schedule.class_id = classes.id WHERE class_id = " + req.query.class_id)
    getClasses.then(function(classes) {
        res.send(classes)
    })
})


app.get("/getClassInfo", function(req, res) {
    var getClassInfo = dbHelper.getData("SELECT DISTINCT(email), name, class_id FROM bookings")
    getClassInfo.then(function(classInfo) {
        res.send(classInfo)
    })
})

app.post("/startNewblock", (req, res) => {
    dbHelper.getData("DELETE FROM bookings WHERE id > 0").then((result) => {
        dbHelper.getData("DELETE FROM schedule WHERE id > 0").then((result) => {
            for (let i in req.body) {
                for (let j in req.body[i]) {
                    dbHelper.getData("INSERT INTO schedule (class_id, date) VALUES (" + i.split('class')[1] + ", '" + req.body[i][j].substring(0, 19) + "')")
                }
            }
            res.send('New Block Started!')
        })
    })
})

app.post("/book", (req, res) => {
    dbHelper.getData("SELECT * FROM schedule WHERE class_id = " + req.body.class_id).then((result) => {
        for (let i in result) {
            dbHelper.getData("INSERT INTO bookings (class_id, schedule_id, name, email) VALUES (" + req.body.class_id + "," + result[i].id + ", '" + req.body.name + "', '" + req.body.email + "')").then((result) => {
                res.send(result)
            })
        }
    })
})

// app.get("/removeMapping", function(req, res) {
//     var removeMapping = dbHelper.getData("DELETE FROM pole_fitness.class_mapping WHERE class_id = " + req.query.classID + " AND poler_id = " + req.query.userID)
//     removeMapping.then(function(removeMappingResult) {
//         if (typeof removeMappingResult.errno == 'undefined') {
//             res.send(removeMappingResult)
//         } else {
//             console.log(removeMappingResult)
//         }
//     })
// })


// app.get("/getMondayInverts", function(req, res, next) {
//     connection.query("SELECT DISTINCT name,class,email from subscriptions where class = 'Monday 6:00-7:00 Inverts and Tricks'", function(err, rows, fields) {
//         if (!err) {
//             res.json(rows)
//         } else {
//             console.log(err)
//         }
//     })
// });
// app.get("/getSubscriptions", function(req, res, next) {
//     connection.query("SELECT DISTINCT name,class,email from subscriptions", function(err, rows, fields) {
//         if (!err) {
//             res.json(rows)
//         } else {
//             console.log(err)
//         }
//     })
// });
// app.get("/getMondayBeginners", function(req, res, next) {
//     connection.query("SELECT DISTINCT name,class,email from subscriptions where class = 'Monday 7:05-8:05 Beginners'", function(err, rows, fields) {
//         if (!err) {
//             res.json(rows)
//         } else {
//             console.log(err)
//         }
//     })
// });
// app.get("/getTuesdayMixed", function(req, res, next) {
//     connection.query("SELECT DISTINCT name,class,email from subscriptions where class = 'Tuesday 6:30-7:30 Mixed Ability'", function(err, rows, fields) {
//         if (!err) {
//             res.json(rows)
//         } else {
//             console.log(err)
//         }
//     })
// });
// app.get("/getTuesdayStrengthen", function(req, res, next) {
//     connection.query("SELECT DISTINCT name,class,email from subscriptions where class = 'Tuesday 7:30-8:15 Pole Strengthen'", function(err, rows, fields) {
//         if (!err) {
//             res.json(rows)
//         } else {
//             console.log(err)
//         }
//     })
// });
// app.get("/getWednesdayNewBeginners", function(req, res, next) {
//     connection.query("SELECT DISTINCT name,class,email from subscriptions where class = 'Wednesday 6:00-7:00 New Beginners'", function(err, rows, fields) {
//         if (!err) {
//             res.json(rows)
//         } else {
//             console.log(err)
//         }
//     })
// });
// app.get("/getWednesdayBeginners", function(req, res, next) {
//     connection.query("SELECT DISTINCT name,class,email from subscriptions where class = 'Wednesday 7:00-8:00 Beginners'", function(err, rows, fields) {
//         if (!err) {
//             res.json(rows)
//         } else {
//             console.log(err)
//         }
//     })
// });
// app.get("/getThursdayMixed", function(req, res, next) {
//     connection.query("SELECT DISTINCT name,class,email from subscriptions where class = 'Thursday 6:30-7:30 Mixed Ability'", function(err, rows, fields) {
//         if (!err) {
//             res.json(rows)
//         } else {
//             console.log(err)
//         }
//     })
// });
// app.get("/getFridayBeginners", function(req, res, next) {
//     connection.query("SELECT DISTINCT name,class,email from subscriptions where class = 'Friday 6:00-7:00 Beginners'", function(err, rows, fields) {
//         if (!err) {
//             res.json(rows)
//         } else {
//             console.log(err)
//         }
//     })
// });

// app.post("/subscribe", function(req, res, next) {
//     connection.query('INSERT INTO subscriptions SET ?', req.body.values, function(err) {
//         if (!err) {
//             res.send('{"status":"success"}')
//         } else {
//             console.log(err)
//         }
//     })
// });

app.post('/sendConfirmation', function(req, res, next) {
    var transporter = nodemailer.createTransport("SMTP", {
        service: 'hotmail',
        auth: {
            user: 'pole2fitness@hotmail.co.uk',
            pass: 'polefitclass2017'
        }
    });

    var mailOptions = {
        from: 'pole2fitness@hotmail.co.uk',
        to: req.query.email,
        subject: 'Pole Class Confirmation',
        text: 'Thank you "' + req.query.name + '" for booking onto 5 weeks of  "' + req.query.class + '". We will see you soon!',
    }
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error)
        } else {
            console.log('Message Sent!')
        }
    })
})

app.post('/sendEmail', function(req, res, next) {
    var transporter = nodemailer.createTransport("SMTP", {
        service: 'hotmail',
        auth: {
            user: 'pole2fitness@hotmail.co.uk',
            pass: 'polefitclass2017'
        }
    });

    var mailOptions = {
        from: req.query.email,
        to: 'pole2fitness@hotmail.co.uk',
        subject: req.query.name + ' - ' + req.query.subject,
        text: req.query.message,
    }
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error)
        } else {
            console.log('Message Sent!')
        }
    })
})

app.post('/notify', function(req, res, next) {
    var transporter = nodemailer.createTransport("SMTP", {
        service: 'hotmail',
        auth: {
            user: 'pole2fitness@hotmail.co.uk',
            pass: 'polefitclass2017'
        }
    });

    var mailOptions = {
        from: 'pole2fitness@hotmail.co.uk',
        to: 'silverpennies76@hotmail.co.uk',
        subject: 'Pole Class Confirmation',
        text: req.query.name + '" has booked onto "' + req.query.class + '". You can contact them via: ' + req.query.email,
    }
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error)
        } else {
            console.log('Message Sent!')
        }
    })
})

app.post('/sendPrivate', function(req, res, next) {
    var transporter = nodemailer.createTransport("SMTP", {
        service: 'hotmail',
        auth: {
            user: 'pole2fitness@hotmail.co.uk',
            pass: 'polefitclass2017'
        }
    });

    var mailOptions = {
        from: 'pole2fitness@hotmail.co.uk',
        to: 'silverpennies76@hotmail.co.uk',
        subject: 'Private Lesson Enquiry',
        text: req.query.name + '" Would like to book a private lesson on "' + req.query.time + '". You can contact them via: ' + req.query.email,
    }
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error)
        } else {
            console.log('Message Sent!')
        }
    })
})



app.post('/sendMessage', function(req, res, next) {
    var transporter = nodemailer.createTransport("SMTP", {
        service: 'hotmail',
        auth: {
            xoauth2: xoauth2.createXOAuth2Generator({
                user: 'kylevantil14@gmail.com',
                pass: 'polefitclass2017'
            })
        }
    });

    var mailOptions = {
        from: 'pole2fitness@hotmail.co.uk',
        to: 'silverpennies76@hotmail.co.uk',
        subject: req.body.subject,
        text: req.body.name + '" said "' + req.body.message + '. You can contact them on ' + req.body.email + ' or ' + req.body.phone,
    }
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error) 
        } else {
            console.log('Message Sent!')
        }
    })
})


app.listen(80);
console.log('Listening on port 80!');