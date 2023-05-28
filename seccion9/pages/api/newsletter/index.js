//sign up email handler for register.

function handler(req, res) {
  // const email = req.query.email;
  const { email } = req.body;

  if (req.method === 'POST') {

    if (!email || !email.includes('@')) {
      res.status(422).json({ message: 'Bad request' });
      return;
    }

    console.log('Email in the api : ', email);


    res.status(201).json({ message: 'sign up successfully ' })
  }
  else {

    res.status(200).json({})
  }
}

export default handler;