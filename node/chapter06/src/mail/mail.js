const mailer = require("nodemailer");
const goodbye = require('./goodbye_template');
const welcome = require('./welcome_template');


const getEmailData = (to, name, template) => {
    let data = null;
    console.log(template);
    switch (template) {
        case "welcome":
            data = {
                from: "보내는 사람 이름 <userId@gmail.com>",
                to,
                subject: `Hello ${name}`,
                html: welcome(),
            };
            break;
        case "goodbye":
            data = {
                from: "보내는 사람 이름 <userId@gmail.com>",
                to,
                subject: `goodbye ${name}`,
                html: goodbye(),
            };
            break;
        default:
            data;
    }
    return data;
};

const sendMail = (to, name, type) => {
    const transporter = mailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_ADDRESS,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    const mail = getEmailData(to, name, type);
    console.log(to)
    transporter.sendMail(mail, (error, response) => {
        if (error) {
            console.log(error);
        } else {
            console.log("email sent successfully");
        }
    });
};

module.exports = sendMail;