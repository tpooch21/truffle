import nc from 'next-connect';
import fire from '../../../firebaseConfig';
import { formatJSON } from '../../../helpers/formatFirebaseData';

const groupsRef = fire.database().ref('groups');

const handler = nc()
  .get(async (req, res) => {
    const groupsSnap = await groupsRef.once("value");
    const mappedGroups = formatJSON(groupsSnap.val());
    console.log('Logging mapped groups => ', mappedGroups);
    res.json({ groups: mappedGroups }).status(200);
  })
  .post((req, res) => {
    groupsRef.push({...req.body}, (err) => {
      if (err) res.json(err.message).status(501);
      else res.send(201);
    });
  })

  export default handler;
