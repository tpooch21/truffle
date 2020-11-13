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
  // Update a new board to a group
  .post((req, res) => {
    console.log('Adding board to group');
    const {id} = req.query;
    const {boardId, boardName} = req.body;
    const groupsRef = fire
      .database()
      .ref(`groups/${id}`)
      .child("boards");
    groupsRef.update({
      [boardId]: {
        name: boardName
      }
    }, (err) => {
      if (err) res.status(501);
      res.status(204);
    });
  })

export default handler;
