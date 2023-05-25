import fs from 'fs'
import path from 'path';


const buildPath = () => path.join(process.cwd(), 'data', 'feedback.json')

const getFileData = (filePath) => {
  const fileData = fs.readFileSync(filePath)
  return JSON.parse(fileData);
}

function handler(req, res) {
  if (req.method === 'POST') {
    const { email, text: feedback } = req.body;

    const newFeedback = {
      id: new Date().toISOString(),
      email,
      feedback
    }

    const filePath = buildPath();
    const data = getFileData(filePath);

    data.push(newFeedback)

    fs.writeFileSync(filePath, JSON.stringify(data));

    res.status(201).json({ message: 'Success', feedback: newFeedback })
  }
  else {
    const filePath = buildPath();
    const data = getFileData(filePath);

    res.status(200).json({ feedbacks: data })
  }
}

export default handler;