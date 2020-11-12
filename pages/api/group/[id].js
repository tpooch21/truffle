import nc from 'next-connect';
import fire from '../../../firebaseConfig';

const handler = nc()
  .get(async (req, res) => {
    const {id} = req.query;
    const groupRef = fire.database().ref(`groups/${id}`);
    const groupSnap = await groupRef.once('value');

    // Add groupData to array for rendering purposes
    const groupFormatted = [
      {
        ...groupSnap.val(),
        key: id
      }
    ];

    res.json({ groups: groupFormatted }).status(200);
  })

export default handler;
