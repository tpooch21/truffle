import nc from 'next-connect';
import fire from '../../../firebaseConfig';

const boardsRef = fire.database().ref('boards');

const handler = nc()
  .post(async (req, res) => {
    const newBoard = boardsRef.push({...req.body});
    res.json({boardKey: newBoard.key}).status(201);
  });

export default handler;