const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "notion@pvpsit.ac.in",
    },
});


let messageHTML=`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <h1>Welcome to Notion Club</h1>
    <img src="logo.png" alt="">
</body>
</html>
`


const mailOptions = {
    from: "notion@pvpsit.ac.in",
    to: "bk117134@gmail.com, brajesh31@gmail.com",
    subject: "Testing NodeMailer",
    // text: "This is a test email sent using Nodemailer.",
    html: messageHTML,
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error("Error sending email: ", error);
    } else {
        console.log("Email sent: ", info.response);
    }
});