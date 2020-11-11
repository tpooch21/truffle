import nc from 'next-connect';
import fire from '../../../firebaseConfig';
import { formatJSON } from '../../../helpers/formatFirebaseData';

const groupsRef = fire.database().ref('groups');

const handler = nc()
  .get(async (req, res) => {
    const groupsSnap = await groupsRef.once("value");
    const mappedGroups = formatJSON(groupsSnap.val());
    res.json({ groups: mappedGroups });
  })
  .post((req, res) => {
    groupsRef.push({...req.body}, (err) => {
      if (err) res.json(err.message).status(501);
      else res.send(201);
    });
  })

  export default handler;

  // FOR POST ROUTE
  // If no groups have been added yet, the value will be 0
  // await groupsRef.push({
  //   name: userInput
  // });