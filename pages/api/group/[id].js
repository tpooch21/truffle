import nc from 'next-connect';
import fire from '../../../firebaseConfig';

const handler = nc()
  .get(async (req, res) => {
    const {id} = req.query;
    const groupRef = fire.database().ref(`'groups/${id}`);
    const groupSnap = await groupRef.once('value');
    res.json({ group: groupSnap.val() }).status(200);
  })

export default handler;
