const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const nodemailer = require("nodemailer");
const path = require("path");
const PORT = process.env.PORT || 5000;
//process.env.PORT


app.use(cors());
app.use(express.json());
app.use(express.json("./client/build"));

if (process.env.NODE_ENV === "production") {

    app.use(express.static(path.join(__dirname, "client/build")))
}
console.log(__dirname);
console.log(path.join(__dirname, "client/build"));

//routes//
//create a email
app.post("/emails", async (req, res) => {
    try {
        const { email } = req.body;
        const newEmail = await pool.query("INSERT INTO email (email) VALUES($1) RETURNING *", [email]);
        res.json(newEmail.rows[0]);

        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: "rhnmobikwik1@gmail.com",
                pass: "rohan.3110"
            }
        })

        const mailOptions = {
            from: `rhnmobikwik1@gmail.com`,
            to: 'mahimagarg832@gmail.com',
            subject: `message from ${email}`,
            html: `<h1>hello!</h1><h3>Newsletter email- ${email}</h3>`
        }
        transport.sendMail(mailOptions, (error) => {
            if (error) {
                console.log(error);
                // res.send('error');
            } else {
                console.log('Email sent')
                // res.send('success')
            }
        })

        // res.send("information submitted")

    } catch (err) {
        console.error(err.message);
    }
});

//get all emails

app.get("/emails", async (req, res) => {
    try {
        const allEmails = await pool.query("SELECT * FROM email");
        res.json(allEmails.rows);
    } catch (err) {
        console.error(err.message);
    }
});

// get a email

app.get("/emails/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const email = await pool.query("SELECT * FROM email WHERE email_id = $1", [id
        ]);

        res.json(email.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

app.post("/enquiers", async (req, res) => {
    try {
        const { name, mobile, city, product } = req.body;
        const newEnquiry = await pool.query("INSERT INTO enquiry ( name , mobile , city , product ) VALUES($1 ,$2 , $3, $4 ) RETURNING *", [name, mobile, city, product]);
        res.json(newEnquiry.rows[0]);

        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: "rhnmobikwik1@gmail.com",
                pass: "rohan.3110"
            }
        })

        const mailOptions = {
            from: `rhnmobikwik1@gmail.com`,
            to: 'mahimagarg832@gmail.com',
            subject: `message from ${name}`,
            html: `<h1>hello!</h1><h3> My name is ${name}.<br />My mobile number is ${mobile}.<br /> I live in ${city}.<br /> I am interested in ${product}.</h3>`
        }
        transport.sendMail(mailOptions, (error) => {
            if (error) {
                console.log(error);
                // res.send('error');
            } else {
                console.log('Email sent')
                // res.send('success')
            }
        })

    } catch (err) {
        console.error(err.message);
    }
});

//get all enquiry

app.get("/enquiers", async (req, res) => {
    try {
        const allEnquiry = await pool.query("SELECT * FROM enquiry");
        res.json(allEnquiry.rows);
    } catch (err) {
        console.error(err.message);
    }
});

// get a email

app.get("/enquiers/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const enquiry = await pool.query("SELECT * FROM enquiry WHERE enquiry_id = $1", [id
        ]);

        res.json(enquiry.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

app.post("/infos", async (req, res) => {
    try {
        const { firstname, lastname, email, subject, message } = req.body;
        const newInfo = await pool.query("INSERT INTO info ( firstname , lastname , email , subject , message) VALUES($1, $2, $3, $4, $5) RETURNING *", [firstname, lastname, email, subject, message]
        );
        res.json(newInfo.rows[0]);


        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: "rhnmobikwik1@gmail.com",
                pass: "rohan.3110"
            }
        })

        const mailOptions = {
            from: `rhnmobikwik1@gmail.com`,
            to: 'mahimagarg832@gmail.com',
            subject: `message from ${firstname}`,
            html: `<h1>hello!</h1><h3> My name is ${firstname} ${lastname}.<br />My email address is - ${email}.<br />Subject-  ${subject}.<br /> Message- ${message}.</h3>`
        }
        transport.sendMail(mailOptions, (error) => {
            if (error) {
                console.log(error);
                // res.send('error');
            } else {
                console.log('Email sent')
                // res.send('success')
            }
        })
    } catch (err) {
        console.error(err.message);
    }
});

//get all  info

app.get("/infos", async (req, res) => {
    try {
        const allInfos = await pool.query("SELECT * FROM info");
        res.json(allInfos.rows);
    } catch (err) {
        console.error(err.message);
    }
});
// get a info
app.get("/infos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const info = await pool.query("SELECT * FROM info WHERE info_id = $1", [id])
    } catch (err) {
        console.error(err.message);
    }
});

app.listen(PORT, () => {
    console.log(`server has started on port ${PORT}`);
});
