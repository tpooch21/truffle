import nc from 'next-connect';
import fire from '../../../firebaseConfig';
import { formatJSON } from '../../../helpers/formatFirebaseData';

const handler = nc()
  .get(async (req, res) => {
    const groupsRef = fire.database().ref('groups');
    const groupsSnap = await groupsRef.once("value");
    const mappedGroups = formatJSON(groupsSnap.val());
    res.json({ groups: mappedGroups });
  })

  export default handler;

  // FOR POST ROUTE
  // If no groups have been added yet, the value will be 0
  // await groupsRef.push({
  //   name: userInput
  // });