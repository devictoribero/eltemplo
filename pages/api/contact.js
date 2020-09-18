const sendmail = require('sendmail')();

export default (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  
  if (req.method === 'POST') {
    try {
      const {body} = req
      const {name, email, message} = JSON.parse(body)

      sendmail({
        from: 'victor.ribero3@gmail.com',
        to: 'victor.ribero3@gmail.com',
        subject: 'test sendmail',
        html: 'Mail of test sendmail ',
      }, function(err, reply) {
        console.log(err && err.stack);
        console.dir(reply);
    });

    } catch(e) {
      res.status(500).end()
    }
  }
}