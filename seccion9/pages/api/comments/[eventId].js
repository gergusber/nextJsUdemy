// get incomming requests as post and also fetch requests
function handler(req, res) {
  // const email = req.query.email;
  const eventId = req.query.eventId
  console.log('Get request to backend');
  if (req.method === 'POST') {

    const { email, name, text } = req.body;

    if (!email || !email.includes('@')) {
      res.status(422).json({ message: 'Bad request, email not valid' });
      return;
    }
  
    if (!name || !name.trim() === '') {
      res.status(422).json({ message: 'Bad request, Name not valid' });
      return;
    }
  
    if (!text || !text.trim() === '') {
      res.status(422).json({ message: 'Bad request, Text not valid' });
      return;
    }
  
    const newComment = {
      id: new Date().toISOString(),
      email,
      name,
      text
    }
  
    console.log('Comment in the api : ', newComment);

    res.status(200).json({ message: 'Added Comment', comment: newComment })
  }


  if (req.method === 'GET') {
    console.log('Get request to backend');
    const dummyList = [
      { id: 'c1', name: 'German', text: 'something awesome' },
      { id: 'c2', name: 'Maax', text: 'something awesome 2' }
    ]
    console.log('Events sent to: event', eventId, dummyList);
    
    res.status(200).json({ comments: dummyList })
  }
}

export default handler;