const logIn = require('../lib/log-in')

module.exports = async (req, res) => {
  let result = await logIn.authenticate(req.body)
  if (result.status) {
    req.session.user = result.user
    res.redirect('/dashboard')
  } else {
    req.session.flash = { message: result.message }
    res.redirect('/')
  }
}