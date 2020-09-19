const nodemailer = require("nodemailer")
const Email = require("email-templates")
const path = require("path")
const MAILER_SENDER = {
  name: "Web contact form",
  email: "eltemplomailproxy@gmail.com",
  emailPass: "Eltemplo123",
  host: "smtp.gmail.com",
  port: "465"
}

class Mailer {
  constructor() {
    this.sender = MAILER_SENDER
    this.transporter = nodemailer.createTransport({
      host: this.sender.host,
      port: this.sender.port,
      secure: true,
      auth: {
        user: this.sender.email,
        pass: this.sender.emailPass
      }
    })

    // this.email = new Email({
    //   transport: this.transporter,
    //   send: true,
    //   preview: false
    // })
  }

  send({
    // template,
    to,
    locals
  }) {
    return new Promise((resolve, reject) => {
      this.email.send({
        // template: path.join(__dirname, "emails", template),
        message: {
          from: `${this.sender.name} <${this.sender.email}>`,
          to
        },
        locals
      })
        .then(() => resolve(`Email to ${to} has been sent`))
        .catch(err => {
          reject(err)
        })
    })
  }
}
module.exports.mailer = new Mailer()