// ROUTE /api/contact

const handler = (req, res) => {

  if (req.method === 'POST') {
    const { email, name, message } = req.body;
    console.log(email, name, message)

    if (!email || !name || !message || !name.trim().length || !message.trim().length) {
      res.status(422).json({ message: 'All fields are required' });
      return;

    }
    if (!email.includes(`@`)) {

      res.status(400).json({ message: 'Email is invalid' });
      return;
    }


    //send message to bd
    const newMessage = {
      email, name, message
    }
    console.log(newMessage)
    res.status(201).json({ message: 'Message sent', message: newMessage });
  }

}

export default handler;