const nodemailer = require('nodemailer')

export default (req, res) => {
  res.setHeader('Content-Type', 'application/json')
    try {
      const {body} = req
      const {name, subject, email, message} = body
  
      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'eltemplomailproxy@gmail.com',
          pass: 'Eltemplo123',
        },
      });

      const html = `
        <div>
          <h3>Detalles de contacto</h3>
          <div>Nombre: ${name}</div>
          <div>Correo electrónico: ${email}</div>
          <hr />
          <p>${message}</p>
        </div>
      `
  
      const mailOptions = {
        from: email,
        to: 'hola@eltemplo.gg',
        subject: `[Contacto web] ${subject}`,
        html: html
      };
  
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
          res.status(500).end()
        } else {
          console.log('Email sent: ' + info.response);
          res.status(200).end()
        }
      })
    } catch(e) {
      res.status(500).end()
    }
}
