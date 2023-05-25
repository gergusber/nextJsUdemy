
//  ROUTE  /feedback/feedbackId



import fs from 'fs'
import path from 'path';


export const buildPath = () => path.join(process.cwd(), 'data', 'feedback.json')

export const getFileData = (filePath, feedbackId) => {
  const fileData = fs.readFileSync(filePath);
  return fileData.find(feedback => feedback.id === feedbackId)
}

function handler(req, res) {
  const feedbackId = req.query.feedbackId;

  if (req.method === 'DELETE') {

    res.status(200)
  }
  else {
    const filePath = buildPath();
    const selectedFeedback = getFileData(filePath, feedbackId);
    console.log(selectedFeedback);
    res.status(200).json({ feedback: selectedFeedback })
  }
}

export default handler;